import { defineComponent } from 'vue';

import { useResize } from '../../hooks/useResize';
import { createBorderBoxCommonProps, mergeColor } from '../../utils/borderBox';
import { withInstall } from '../../utils/common';
import { getFullClassForBind, styled } from '../../utils/styled';
import { BorderBoxContainer, BorderBoxContent } from '../styled/borderBox';

import type { BorderBoxCommonProps } from '../../utils/borderBox';

const defaultColor = ['#2862b7', '#2862b7'];

const BorderSvgContainer = styled.svg`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;

  & > polyline {
    fill: none;
  }

  .stroke-width-1 {
    stroke-width: 1;
  }

  .stroke-width-3 {
    stroke-width: 3;
  }
`('border-svg-container');

export type BorderBox3Props = BorderBoxCommonProps;

export const BorderBox3 = /*#__PURE__*/ withInstall(
  defineComponent({
    name: 'BorderBox3',

    props: createBorderBoxCommonProps(),

    setup(props, { slots }) {
      const { domRef, domSize } = useResize();

      return () => {
        const { color, backgroundColor } = props;
        const { width, height } = domSize;
        const mergedColor = mergeColor(defaultColor, color);

        return (
          <BorderBoxContainer
            class={getFullClassForBind('border-box-3')}
            ref={(ref) => (domRef.value = ref.$el)}
          >
            <BorderSvgContainer width={width} height={height}>
              <polygon
                fill={backgroundColor}
                points={`23, 23 ${width - 24}, 23 ${width - 24}, ${height - 24} 23, ${height - 24}`}
              />

              <polyline
                class="stroke-width-3"
                stroke={mergedColor[0]}
                points={`4, 4 ${width - 22} ,4 ${width - 22}, ${height - 22} 4, ${
                  height - 22
                } 4, 4`}
              />
              <polyline
                class="stroke-width-1"
                stroke={mergedColor[1]}
                points={`10, 10 ${width - 16}, 10 ${width - 16}, ${height - 16} 10, ${
                  height - 16
                } 10, 10`}
              />
              <polyline
                class="stroke-width-1"
                stroke={mergedColor[1]}
                points={`16, 16 ${width - 10}, 16 ${width - 10}, ${height - 10} 16, ${
                  height - 10
                } 16, 16`}
              />
              <polyline
                class="stroke-width-1"
                stroke={mergedColor[1]}
                points={`22, 22 ${width - 4}, 22 ${width - 4}, ${height - 4} 22, ${
                  height - 4
                } 22, 22`}
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
