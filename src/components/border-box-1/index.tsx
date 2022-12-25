import { defineComponent } from 'vue';

import { useResize } from '../../hooks/useResize';
import { createBorderBoxCommonProps, mergeColor } from '../../utils/borderBox';
import { withInstall } from '../../utils/common';

import type { BorderBoxCommonProps } from '../../utils/borderBox';

import './index.less';

const border = ['left-top', 'right-top', 'left-bottom', 'right-bottom'] as const;

const defaultColor = ['#4fd2dd', '#235fa7'];

export type BorderBox1Props = BorderBoxCommonProps;

export const BorderBox1 = /*#__PURE__*/ withInstall(
  defineComponent({
    name: 'BorderBox1',

    props: createBorderBoxCommonProps(),

    setup(props, { slots }) {
      const { domRef, domSize } = useResize();

      return () => {
        const { color, backgroundColor } = props;
        const { width, height } = domSize;
        const mergedColor = mergeColor(defaultColor, color);

        return (
          <div class="dv-border-box-1" ref={domRef}>
            <svg class="border" width={width} height={height}>
              <polygon
                fill={backgroundColor}
                points={`10, 27 10, ${height - 27} 13, ${height - 24} 13, ${height - 21} 24, ${
                  height - 11
                } 38, ${height - 11}
                41, ${height - 8} 73, ${height - 8} 75, ${height - 10} 81, ${height - 10} 85, ${
                  height - 6
                }
                ${width - 85}, ${height - 6} ${width - 81}, ${height - 10} ${width - 75}, ${
                  height - 10
                }
                ${width - 73}, ${height - 8} ${width - 41}, ${height - 8} ${width - 38}, ${
                  height - 11
                }
                ${width - 24}, ${height - 11} ${width - 13}, ${height - 21} ${width - 13}, ${
                  height - 24
                }
                ${width - 10}, ${height - 27} ${width - 10}, 27 ${width - 13}, 25 ${width - 13}, 21
                ${width - 24}, 11 ${width - 38}, 11 ${width - 41}, 8 ${width - 73}, 8 ${
                  width - 75
                }, 10
                ${width - 81}, 10 ${
                  width - 85
                }, 6 85, 6 81, 10 75, 10 73, 8 41, 8 38, 11 24, 11 13, 21 13, 24`}
              />
            </svg>

            {border.map((borderItem) => (
              <svg key={borderItem} width="150px" height="150px" class={`${borderItem} border`}>
                <polygon
                  fill={mergedColor[0]}
                  points="6,66 6,18 12,12 18,12 24,6 27,6 30,9 36,9 39,6 84,6 81,9 75,9 73.2,7 40.8,7 37.8,10.2 24,10.2 12,21 12,24 9,27 9,51 7.8,54 7.8,63"
                >
                  <animate
                    attributeName="fill"
                    values={`${mergedColor[0]};${mergedColor[1]};${mergedColor[0]}`}
                    dur="0.5s"
                    begin="0s"
                    repeatCount="indefinite"
                  />
                </polygon>
                <polygon fill={mergedColor[1]} points="27.6,4.8 38.4,4.8 35.4,7.8 30.6,7.8">
                  <animate
                    attributeName="fill"
                    values={`${mergedColor[1]};${mergedColor[0]};${mergedColor[1]}`}
                    dur="0.5s"
                    begin="0s"
                    repeatCount="indefinite"
                  />
                </polygon>
                <polygon
                  fill={mergedColor[0]}
                  points="9,54 9,63 7.2,66 7.2,75 7.8,78 7.8,110 8.4,110 8.4,66 9.6,66 9.6,54"
                >
                  <animate
                    attributeName="fill"
                    values={`${mergedColor[0]};${mergedColor[1]};transparent`}
                    dur="1s"
                    begin="0s"
                    repeatCount="indefinite"
                  />
                </polygon>
              </svg>
            ))}

            <div class="border-box-content">{slots.default?.()}</div>
          </div>
        );
      };
    },
  })
);
