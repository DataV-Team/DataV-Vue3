import cx from 'classnames';
import { defineComponent } from 'vue';

import { useResize } from '../../hooks/useResize';
import { createBorderBoxCommonProps, mergeColor } from '../../utils/borderBox';
import { withInstall } from '../../utils/common';

import './index.less';

const defaultColor = ['red', 'rgba(0,0,255,0.8)'];

const BorderBox4Props = () => ({
  ...createBorderBoxCommonProps(),
  reverse: {
    type: Boolean,
    default: false,
  },
});

export type BorderBox4Props = ReturnType<typeof BorderBox4Props>;

export const BorderBox4 = /*#__PURE__*/ withInstall(
  defineComponent({
    name: 'BorderBox4',

    props: BorderBox4Props(),

    setup(props, { slots }) {
      const { domRef, domSize } = useResize();

      return () => {
        const { color, backgroundColor, reverse } = props;
        const { width, height } = domSize;
        const mergedColor = mergeColor(defaultColor, color);

        return (
          <div class="dv-border-box-4" ref={domRef}>
            <svg class={cx('dv-border-svg-container', { 'dv-reverse': reverse })} width={width} height={height}>
              <polygon
                fill={backgroundColor}
                points={`${width - 15}, 22 170, 22 150, 7 40, 7 28, 21 32, 24
                16, 42 16, ${height - 32} 41, ${height - 7} ${width - 15}, ${height - 7}`}
              />

              <polyline
                class="dv-bb4-line-1"
                stroke={mergedColor[0]}
                points={`145, ${height - 5} 40, ${height - 5} 10, ${height - 35} 10, 40 40, 5 150, 5 170, 20 ${width - 15}, 20`}
              />
              <polyline
                stroke={mergedColor[1]}
                class="dv-bb4-line-2"
                points={`245, ${height - 1} 36, ${height - 1} 14, ${height - 23} 14, ${height - 100}`}
              />

              <polyline class="dv-bb4-line-3" stroke={mergedColor[0]} points={`7, ${height - 40} 7, ${height - 75}`} />
              <polyline class="dv-bb4-line-4" stroke={mergedColor[0]} points={`28, 24 13, 41 13, 64`} />
              <polyline class="dv-bb4-line-5" stroke={mergedColor[0]} points={`5, 45 5, 140`} />
              <polyline class="dv-bb4-line-6" stroke={mergedColor[1]} points={`14, 75 14, 180`} />
              <polyline class="dv-bb4-line-7" stroke={mergedColor[1]} points={`55, 11 147, 11 167, 26 250, 26`} />
              <polyline class="dv-bb4-line-8" stroke={mergedColor[1]} points={`158, 5 173, 16`} />
              <polyline class="dv-bb4-line-9" stroke={mergedColor[0]} points={`200, 17 ${width - 10}, 17`} />
              <polyline class="dv-bb4-line-10" stroke={mergedColor[1]} points={`385, 17 ${width - 10}, 17`} />
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

export const Test = () => {
  return <BorderBox4 style={{ width: '100%', height: '300px' }}>123</BorderBox4>;
};
