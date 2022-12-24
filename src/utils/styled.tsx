import cx from 'classnames';
import { onMounted, onUnmounted, defineComponent } from 'vue';

import type { Component, FunctionalComponent } from 'vue';

let prefix = 'dv-';

export function setClassPrefix(willSetPrefix: string) {
  prefix = willSetPrefix;
}

const StyledComponentWrapper = /*#__PURE__*/ defineComponent({
  name: 'StyledComponentWrapper',

  props: {
    appendStyle: {
      type: Function,
      default: () => null,
    },
    removeStyle: {
      type: Function,
      default: () => null,
    },
  },

  setup(props, { slots }) {
    onMounted(() => {
      props.appendStyle();
    });

    onUnmounted(() => {
      props.removeStyle();
    });

    return () => {
      return <>{slots?.default()}</>;
    };
  },
});

function createStyle(style: TemplateStringsArray, className: string) {
  const classNameWithPrefix = `.${prefix || ''}${className}`;
  const styleContent = `${__STYLED_PLACEHOLDER__} {${style.toString()}}`.replaceAll(__STYLED_PLACEHOLDER__, classNameWithPrefix);

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

      const StyledFC = (props: Props, { slots }) => (
        <StyledComponentWrapper appendStyle={() => appendStyle(className)} removeStyle={removeStyle}>
          <StyledComponentWithType {...props} class={cx(`${prefix || ''}${className}`, props.class)}>
            {slots?.default()}
          </StyledComponentWithType>
        </StyledComponentWrapper>
      );

      return StyledFC as T;
    };
  };
}

styled.span = styled((props, { slots }) => <span {...props}>{slots?.default()}</span>);
styled.div = styled((props, { slots }) => <div {...props}>{slots?.default()}</div>);
styled.img = styled((props) => <img {...props} />);
