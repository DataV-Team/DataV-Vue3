import { uniqueId } from 'lodash-es';
import { onMounted, onUnmounted, defineComponent } from 'vue';

import type { Component, FunctionalComponent } from 'vue';

/**
 * StyledComponents CSS In JS
 * 为了更好处理样式的tree shake 使用styled components将组件样式和组件逻辑绑定
 * 使用组件时无需再额外导入CSS文件
 */
function StyledComponents(classNamePrefix: string) {
  let innerClassNamePrefix = classNamePrefix;

  /**
   * 统计styled component 当前渲染引用
   * 引用为0表示当前没有对应的styled component渲染 需要卸载样式
   */
  const styleComponentRenderRef: Record<string, number> = {};

  const getRenderRefCount = (id: string) => {
    return styleComponentRenderRef[id] ?? 0;
  };

  const addRenderRef = (id: string) => {
    styleComponentRenderRef[id] = (styleComponentRenderRef[id] ?? 0) + 1;
  };

  const delRenderRef = (id: string) => {
    let willUpdateRefCount = styleComponentRenderRef[id] - 1;
    if (willUpdateRefCount <= 0) {
      willUpdateRefCount = 0;
    }

    styleComponentRenderRef[id] = willUpdateRefCount;
  };

  /**
   * 用户可以自定义组件样式前缀 避免样式作用域冲突
   */
  const setClassNamePrefix = (classNamePrefix: string) => {
    innerClassNamePrefix = classNamePrefix;
  };

  const getFullClassName = (className: string, dot = true) => {
    return `${dot ? '.' : ''}${innerClassNamePrefix || ''}${className}`;
  };

  /**
   * 组件对外暴露的class 需要使用这个方法获取带有prefix的完整className
   */
  const getClassNameForBind = (className: string) => {
    return getFullClassName(className, false);
  };

  const createStyle = (style: TemplateStringsArray, className: string) => {
    const classNameWithPrefix = getFullClassName(className);
    const styleContent = `${__STYLED_PLACEHOLDER__} {${style.toString()}}`.replaceAll(
      __STYLED_PLACEHOLDER__,
      classNameWithPrefix
    );

    return styleContent;
  };

  function styled<T>(StyledComponent: T) {
    return (style: TemplateStringsArray) => {
      const styleEle = document.createElement('style');

      const appendStyle = (className: string) => {
        styleEle.innerHTML = createStyle(style, className);
        document.querySelector('head').appendChild(styleEle);
      };
      const removeStyle = () => document.querySelector('head').removeChild(styleEle);

      type Props = (T extends Component<infer P> ? P : never) & { class?: string };

      return (className: string): T => {
        const StyledComponentWithType = StyledComponent as FunctionalComponent<Props>;
        const id = uniqueId('style');

        const StyledFC = /*#__PURE__*/ defineComponent<Props>({
          setup(props, { slots }) {
            onMounted(() => {
              // 样式加载过就不再重复加载
              if (getRenderRefCount(id) === 0) {
                appendStyle(className);
              }

              addRenderRef(id);
            });

            onUnmounted(() => {
              delRenderRef(id);

              // 当前组件没有实例在渲染的时候 卸载样式
              if (getRenderRefCount(id) === 0) {
                removeStyle();
              }
            });

            const fullClassName = getFullClassName(className, false);

            return () => (
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              <StyledComponentWithType {...props} class={fullClassName}>
                {slots?.default?.()}
              </StyledComponentWithType>
            );
          },
        });

        return StyledFC as T;
      };
    };
  }

  styled.setClassNamePrefix = setClassNamePrefix;
  styled.getClassNameForBind = getClassNameForBind;

  styled.span = styled((props, { slots }) => <span {...props}>{slots?.default()}</span>);
  styled.div = styled((props, { slots }) => <div {...props}>{slots?.default()}</div>);
  styled.img = styled((props) => <img {...props} />);
  styled.svg = styled((props, { slots }) => <svg {...props}>{slots?.default()}</svg>);

  return styled;
}

const defaultClassNamePrefix = 'dv-';

export const styled = StyledComponents(defaultClassNamePrefix);

export const setClassNamePrefix = styled.setClassNamePrefix;
