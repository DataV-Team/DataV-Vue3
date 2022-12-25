import { defineComponent } from 'vue';

import { useResize } from '../../hooks/useResize';
import { createBorderBoxCommonProps, mergeColor } from '../../utils/borderBox';
import { withInstall } from '../../utils/common';

import type { BorderBoxCommonProps } from '../../utils/borderBox';

import './index.less';

const defaultColor = ['#fff', 'rgba(255, 255, 255, 0.6)'];

export type BorderBox2Props = BorderBoxCommonProps;

export const BorderBox2 = /*#__PURE__*/ withInstall(
  defineComponent({
    name: 'BorderBox2',

    props: createBorderBoxCommonProps(),

    setup(props, { slots }) {
      const { domRef, domSize } = useResize();

      return () => {
        const { color, backgroundColor } = props;
        const { width, height } = domSize;
        const mergedColor = mergeColor(defaultColor, color);

        return (
          <div class="dv-border-box-2" ref={domRef}>
            <svg class="dv-border-svg-container" width={width} height={height}>
              <polygon
                fill={backgroundColor}
                points={`7, 7 ${width - 7}, 7 ${width - 7}, ${height - 7} 7, ${height - 7}`}
              />

              <polyline
                stroke={mergedColor[0]}
                points={`2, 2 ${width - 2} ,2 ${width - 2}, ${height - 2} 2, ${height - 2} 2, 2`}
              />
              <polyline
                stroke={mergedColor[1]}
                points={`6, 6 ${width - 6}, 6 ${width - 6}, ${height - 6} 6, ${height - 6} 6, 6`}
              />

              <circle fill={mergedColor[0]} cx="11" cy="11" r="1" />
              <circle fill={mergedColor[0]} cx={width - 11} cy="11" r="1" />
              <circle fill={mergedColor[0]} cx={width - 11} cy={height - 11} r="1" />
              <circle fill={mergedColor[0]} cx="11" cy={height - 11} r="1" />
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
