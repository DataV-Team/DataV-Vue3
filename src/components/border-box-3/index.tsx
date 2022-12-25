import { defineComponent } from 'vue';

import { useResize } from '../../hooks/useResize';
import { createBorderBoxCommonProps, mergeColor } from '../../utils/borderBox';
import { withInstall } from '../../utils/common';

import type { BorderBoxCommonProps } from '../../utils/borderBox';

import './index.less';

const defaultColor = ['#2862b7', '#2862b7'];

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
          <div class="dv-border-box-3" ref={domRef}>
            <svg class="dv-border-svg-container" width={width} height={height}>
              <polygon
                fill={backgroundColor}
                points={`23, 23 ${width - 24}, 23 ${width - 24}, ${height - 24} 23, ${height - 24}`}
              />

              <polyline
                class="dv-bb3-line1"
                stroke={mergedColor[0]}
                points={`4, 4 ${width - 22} ,4 ${width - 22}, ${height - 22} 4, ${
                  height - 22
                } 4, 4`}
              />
              <polyline
                class="dv-bb3-line2"
                stroke={mergedColor[1]}
                points={`10, 10 ${width - 16}, 10 ${width - 16}, ${height - 16} 10, ${
                  height - 16
                } 10, 10`}
              />
              <polyline
                class="dv-bb3-line2"
                stroke={mergedColor[1]}
                points={`16, 16 ${width - 10}, 16 ${width - 10}, ${height - 10} 16, ${
                  height - 10
                } 16, 16`}
              />
              <polyline
                class="dv-bb3-line2"
                stroke={mergedColor[1]}
                points={`22, 22 ${width - 4}, 22 ${width - 4}, ${height - 4} 22, ${
                  height - 4
                } 22, 22`}
              />
            </svg>

            <div class="border-box-content">
              <slot>{slots.default?.()}</slot>
            </div>
          </div>
        );
      };
    },
  })
);
