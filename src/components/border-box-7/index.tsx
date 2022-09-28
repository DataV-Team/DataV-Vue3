import { defineComponent } from 'vue';

import { useResize } from '../../hooks/useResize';
import { createBorderBoxCommonProps, mergeColor } from '../../utils/borderBox';
import { withInstall } from '../../utils/common';

import type { BorderBoxCommonProps } from '../../utils/borderBox';

import './index.less';

const defaultColor = ['rgba(128,128,128,0.3)', 'rgba(128,128,128,0.5)'];

export type BorderBox7Props = BorderBoxCommonProps;

export const BorderBox7 = /*#__PURE__*/ withInstall(
  defineComponent({
    name: 'BorderBox7',

    props: createBorderBoxCommonProps(),

    setup(props, { slots }) {
      const { domRef, domSize } = useResize();

      return () => {
        const { color, backgroundColor } = props;
        const { width, height } = domSize;
        const mergedColor = mergeColor(defaultColor, color);

        return (
          <div
            class="dv-border-box-7"
            style={{ boxShadow: `inset 0 0 40px ${mergedColor[0]}`, border: `1px solid ${mergedColor[0]}`, backgroundColor: backgroundColor }}
            ref={domRef}
          >
            <svg class="dv-border-svg-container" width={width} height={height}>
              <polyline class="dv-bb7-line-width-2" stroke={mergedColor[0]} points={`0, 25 0, 0 25, 0`} />
              <polyline class="dv-bb7-line-width-2" stroke={mergedColor[0]} points={`${width - 25}, 0 ${width}, 0 ${width}, 25`} />
              <polyline
                class="dv-bb7-line-width-2"
                stroke={mergedColor[0]}
                points={`${width - 25}, ${height} ${width}, ${height} ${width}, ${height - 25}`}
              />
              <polyline class="dv-bb7-line-width-2" stroke={mergedColor[0]} points={`0, ${height - 25} 0, ${height} 25, ${height}`} />
              <polyline class="dv-bb7-line-width-5" stroke={mergedColor[1]} points={`0, 10 0, 0 10, 0`} />
              <polyline class="dv-bb7-line-width-5" stroke={mergedColor[1]} points={`${width - 10}, 0 ${width}, 0 ${width}, 10`} />
              <polyline
                class="dv-bb7-line-width-5"
                stroke={mergedColor[1]}
                points={`${width - 10}, ${height} ${width}, ${height} ${width}, ${height - 10}`}
              />
              <polyline class="dv-bb7-line-width-5" stroke={mergedColor[1]} points={`0, ${height - 10} 0, ${height} 10, ${height}`} />
            </svg>

            <div class="border-box-content">{slots.default?.()}</div>
          </div>
        );
      };
    },
  })
);
