import { defineComponent } from 'vue';

import { useResize } from '../../hooks/useResize';
import { createBorderBoxCommonProps, mergeColor } from '../../utils/borderBox';
import { withInstall } from '../../utils/common';

import './index.less';

const defaultColor = ['#1d48c4', '#d3e1f8'];

export const BorderBox10 = /*#__PURE__*/ withInstall(
  defineComponent({
    name: 'BorderBox10',
    props: createBorderBoxCommonProps(),
    setup(props, { slots }) {
      const { domRef, domSize } = useResize();
      const { width, height } = domSize;
      const border = ['left-top', 'right-top', 'left-bottom', 'right-bottom'];

      return () => {
        const { backgroundColor, color } = props;
        const mergedColor = mergeColor(defaultColor, color);
        return (
          <div ref={domRef} class="dv-border-box-10" style={{ 'box-shadow': `inset 0 0 25px 3px ${mergedColor[0]}` }}>
            <svg class="dv-border-svg-container" width={width} height={height}>
              <polygon
                fill={backgroundColor}
                points={`
                  4, 0 ${width - 4}, 0 ${width}, 4 ${width}, ${height - 4} ${width - 4}, ${height}
                  4, ${height} 0, ${height - 4} 0, 4
                `}
              />
            </svg>
            {border.map((item) => {
              return (
                <svg width="150px" height="150px" key={item} class={`${item} dv-border-svg-container`}>
                  <polygon fill={mergedColor[1]} points="40, 0 5, 0 0, 5 0, 16 3, 19 3, 7 7, 3 35, 3" />
                </svg>
              );
            })}

            <div class="border-box-content">{slots.default?.()}</div>
          </div>
        );
      };
    },
  })
);
