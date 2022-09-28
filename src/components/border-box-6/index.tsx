import { defineComponent } from 'vue';

import { useResize } from '../../hooks/useResize';
import { createBorderBoxCommonProps, mergeColor } from '../../utils/borderBox';
import { withInstall } from '../../utils/common';

import type { BorderBoxCommonProps } from '../../utils/borderBox';

import './index.less';

const defaultColor = ['rgba(255, 255, 255, 0.35)', 'gray'];

export type BorderBox6Props = BorderBoxCommonProps;

export const BorderBox6 = /*#__PURE__*/ withInstall(
  defineComponent({
    name: 'BorderBox6',

    props: createBorderBoxCommonProps(),

    setup(props, { slots }) {
      const { domRef, domSize } = useResize();

      return () => {
        const { color, backgroundColor } = props;
        const { width, height } = domSize;
        const mergedColor = mergeColor(defaultColor, color);

        return (
          <div class="dv-border-box-6" ref={domRef}>
            <svg class="dv-border-svg-container" width={width} height={height}>
              <polygon
                fill={backgroundColor}
                points={`
              9, 7 ${width - 9}, 7 ${width - 9}, ${height - 7} 9, ${height - 7}`}
              />

              <circle fill={mergedColor[1]} cx="5" cy="5" r="2" />
              <circle fill={mergedColor[1]} cx={width - 5} cy="5" r="2" />
              <circle fill={mergedColor[1]} cx={width - 5} cy={height - 5} r="2" />
              <circle fill={mergedColor[1]} cx="5" cy={height - 5} r="2" />
              <polyline stroke={mergedColor[0]} points={`10, 4 ${width - 10}, 4`} />
              <polyline stroke={mergedColor[0]} points={`10, ${height - 4} ${width - 10}, ${height - 4}`} />
              <polyline stroke={mergedColor[0]} points={`5, 70 5, ${height - 70}`} />
              <polyline stroke={mergedColor[0]} points={`${width - 5}, 70 ${width - 5}, ${height - 70}`} />
              <polyline stroke={mergedColor[0]} points={`3, 10, 3, 50`} />
              <polyline stroke={mergedColor[0]} points={`7, 30 7, 80`} />
              <polyline stroke={mergedColor[0]} points={`${width - 3}, 10 ${width - 3}, 50`} />
              <polyline stroke={mergedColor[0]} points={`${width - 7}, 30 ${width - 7}, 80`} />
              <polyline stroke={mergedColor[0]} points={`3, ${height - 10} 3, ${height - 50}`} />
              <polyline stroke={mergedColor[0]} points={`7, ${height - 30} 7, ${height - 80}`} />
              <polyline stroke={mergedColor[0]} points={`${width - 3}, ${height - 10} ${width - 3}, ${height - 50}`} />
              <polyline stroke={mergedColor[0]} points={`${width - 7}, ${height - 30} ${width - 7}, ${height - 80}`} />
            </svg>

            <div class="border-box-content">{slots.default?.()}</div>
          </div>
        );
      };
    },
  })
);
