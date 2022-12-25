import cx from 'classnames';
import { defineComponent } from 'vue';

import { useResize } from '../../hooks/useResize';
import { createBorderBoxCommonProps, mergeColor } from '../../utils/borderBox';
import { withInstall } from '../../utils/common';

import './index.less';

const defaultColor = ['rgba(255, 255, 255, 0.35)', 'rgba(255, 255, 255, 0.20)'];

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
      const { domRef, domSize } = useResize();

      return () => {
        const { color, backgroundColor, reverse } = props;
        const { width, height } = domSize;
        const mergedColor = mergeColor(defaultColor, color);

        return (
          <div class="dv-border-box-5" ref={domRef}>
            <svg
              class={cx('dv-border-svg-container', { 'dv-reverse': reverse })}
              width={width}
              height={height}
            >
              <polygon
                fill={backgroundColor}
                points={`
                  10, 22 ${width - 22}, 22 ${width - 22}, ${height - 86} ${width - 84}, ${
                  height - 24
                } 10, ${height - 24}`}
              />

              <polyline
                class="dv-bb5-line-1"
                stroke={mergedColor[0]}
                points={`8, 5 ${width - 5}, 5 ${width - 5}, ${height - 100}
                  ${width - 100}, ${height - 5} 8, ${height - 5} 8, 5`}
              />

              <polyline
                class="dv-bb5-line-2"
                stroke={mergedColor[1]}
                points={`3, 5 ${width - 20}, 5 ${width - 20}, ${height - 60}
                  ${width - 74}, ${height - 5} 3, ${height - 5} 3, 5`}
              />

              <polyline
                class="dv-bb5-line-3"
                stroke={mergedColor[1]}
                points={`50, 13 ${width - 35}, 13`}
              />

              <polyline
                class="dv-bb5-line-4"
                stroke={mergedColor[1]}
                points={`15, 20 ${width - 35}, 20`}
              />

              <polyline
                class="dv-bb5-line-5"
                stroke={mergedColor[1]}
                points={`15, ${height - 20} ${width - 110}, ${height - 20}`}
              />

              <polyline
                class="dv-bb5-line-6"
                stroke={mergedColor[1]}
                points={`15, ${height - 13} ${width - 110}, ${height - 13}`}
              />
            </svg>

            <div class="border-box-content">{slots.default?.()}</div>
          </div>
        );
      };
    },
  })
);
