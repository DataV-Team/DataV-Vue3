import { onMounted, onUnmounted, defineComponent } from 'vue';

import type { Component, FunctionalComponent } from 'vue';

let prefix = 'dv-';

export function setClassPrefix(willSetPrefix: string) {
  prefix = willSetPrefix;
}

function getFullClassName(className: string, dot = true) {
  return `${dot ? '.' : ''}${prefix || ''}${className}`;
}

function createStyle(style: TemplateStringsArray, className: string) {
  const classNameWithPrefix = getFullClassName(className);
  const styleContent = `${__STYLED_PLACEHOLDER__} {${style.toString()}}`.replaceAll(
    __STYLED_PLACEHOLDER__,
    classNameWithPrefix
  );

  return styleContent;
}

export function styled<T>(StyledComponent: T) {
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
      const fullClassName = getFullClassName(className, false);

      const StyledFC = /*#__PURE__*/ defineComponent<Props>({
        setup(props, { slots }) {
          onMounted(() => {
            appendStyle(className);
          });

          onUnmounted(() => {
            removeStyle();
          });

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

styled.span = styled((props, { slots }) => <span {...props}>{slots?.default()}</span>);
styled.div = styled((props, { slots }) => <div {...props}>{slots?.default()}</div>);
styled.img = styled((props) => <img {...props} />);
styled.svg = styled((props, { slots }) => <svg {...props}>{slots?.default()}</svg>);
