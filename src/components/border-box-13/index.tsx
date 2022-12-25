import { defineComponent } from 'vue';

import { useResize } from '../../hooks/useResize';
import { createBorderBoxCommonProps, mergeColor } from '../../utils/borderBox';
import { withInstall } from '../../utils/common';

import type { BorderBoxCommonProps } from '../../utils/borderBox';

import './index.less';

const defaultColor = ['#6586ec', '#2cf7fe'];

export type BorderBox13Props = BorderBoxCommonProps;

export const BorderBox13 = /*#__PURE__*/ withInstall(
  defineComponent({
    name: 'BorderBox13',

    props: createBorderBoxCommonProps(),

    setup(props, { slots }) {
      const { domRef, domSize } = useResize();

      return () => {
        const { color, backgroundColor } = props;
        const { width, height } = domSize;
        const mergedColor = mergeColor(defaultColor, color);

        return (
          <div class="dv-border-box-13" ref={domRef}>
            <svg class="dv-border-svg-container" width={width} height={height}>
              <path
                fill={backgroundColor}
                stroke={mergedColor[0]}
                d={`
                  M 5 20 L 5 10 L 12 3  L 60 3 L 68 10
                  L ${width - 20} 10 L ${width - 5} 25
                  L ${width - 5} ${height - 5} L 20 ${height - 5}
                  L 5 ${height - 20} L 5 20
                `}
              />

              <path
                fill="transparent"
                stroke-width="3"
                stroke-linecap="round"
                stroke-dasharray="10, 5"
                stroke={mergedColor[0]}
                d={`M 16 9 L 61 9`}
              />

              <path
                fill="transparent"
                stroke={mergedColor[1]}
                d={`M 5 20 L 5 10 L 12 3  L 60 3 L 68 10`}
              />

              <path
                fill="transparent"
                stroke={mergedColor[1]}
                d={`M ${width - 5} ${height - 30} L ${width - 5} ${height - 5} L ${width - 30} ${
                  height - 5
                }`}
              />
            </svg>

            <div class="border-box-content">{slots.default?.()}</div>
          </div>
        );
      };
    },
  })
);
