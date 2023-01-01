import cx from 'classnames';
import { defineComponent } from 'vue';

import { useResize } from '../../hooks/useResize';
import { createBorderBoxCommonProps, mergeColor } from '../../utils/borderBox';
import { withInstall } from '../../utils/common';
import { styled } from '../../utils/styled';
import { BorderBoxContainer, BorderBoxContent } from '../styled/borderBox';

const defaultColor = ['rgba(255, 255, 255, 0.35)', 'rgba(255, 255, 255, 0.20)'];

const BorderSvgContainer = styled.svg`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;

  & > polyline {
    fill: none;
  }

  &.reverse {
    transform: rotate(180deg);
  }

  .stroke-width1 {
    stroke-width: 1;
  }

  .stroke-width2 {
    stroke-width: 2px;
  }

  .stroke-width5 {
    stroke-width: 5px;
  }
`('border-svg-container');

const borderBox5Props = () => ({
  ...createBorderBoxCommonProps(),
  reverse: {
    type: Boolean,
    default: false,
  },
});

export type BorderBox5Props = ReturnType<typeof borderBox5Props>;

export const BorderBox5 = /*#__PURE__*/ withInstall(
  defineComponent({
    name: 'BorderBox5',

    props: borderBox5Props(),

    setup(props, { slots }) {
      const { autoBindRef, domSize } = useResize();

      return () => {
        const { color, backgroundColor, reverse } = props;
        const { width, height } = domSize;
        const mergedColor = mergeColor(defaultColor, color);

        return (
          <BorderBoxContainer class={styled.getClassNameForBind('border-box-5')} ref={autoBindRef}>
            <BorderSvgContainer class={cx({ reverse })} width={width} height={height}>
              <polygon
                fill={backgroundColor}
                points={`
                  10, 22 ${width - 22}, 22 ${width - 22}, ${height - 86} ${width - 84}, ${
                  height - 24
                } 10, ${height - 24}`}
              />

              <polyline
                class="stroke-width1"
                stroke={mergedColor[0]}
                points={`8, 5 ${width - 5}, 5 ${width - 5}, ${height - 100}
                  ${width - 100}, ${height - 5} 8, ${height - 5} 8, 5`}
              />

              <polyline
                class="stroke-width1"
                stroke={mergedColor[1]}
                points={`3, 5 ${width - 20}, 5 ${width - 20}, ${height - 60}
                  ${width - 74}, ${height - 5} 3, ${height - 5} 3, 5`}
              />

              <polyline
                class="stroke-width5"
                stroke={mergedColor[1]}
                points={`50, 13 ${width - 35}, 13`}
              />

              <polyline
                class="stroke-width2"
                stroke={mergedColor[1]}
                points={`15, 20 ${width - 35}, 20`}
              />

              <polyline
                class="stroke-width2"
                stroke={mergedColor[1]}
                points={`15, ${height - 20} ${width - 110}, ${height - 20}`}
              />

              <polyline
                class="stroke-width5"
                stroke={mergedColor[1]}
                points={`15, ${height - 13} ${width - 110}, ${height - 13}`}
              />
            </BorderSvgContainer>

            <BorderBoxContent>
              <slot>{slots.default?.()}</slot>
            </BorderBoxContent>
          </BorderBoxContainer>
        );
      };
    },
  })
);
