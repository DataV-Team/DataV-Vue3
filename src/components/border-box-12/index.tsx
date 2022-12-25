import { fade } from '@jiaminghi/color';
import { defineComponent } from 'vue';

import { useResize } from '../../hooks/useResize';
import { useUuid } from '../../hooks/useUuid';
import { createBorderBoxCommonProps, mergeColor } from '../../utils/borderBox';
import { withInstall } from '../../utils/common';

import type { BorderBoxCommonProps } from '../../utils/borderBox';

import './index.less';

const defaultColor = ['#2e6099', '#7ce7fd'];

export type BorderBox12Props = BorderBoxCommonProps;

export const BorderBox12 = /*#__PURE__*/ withInstall(
  defineComponent({
    name: 'BorderBox12',

    props: createBorderBoxCommonProps(),

    setup(props, { slots }) {
      const { domRef, domSize } = useResize();
      const uuid = useUuid();

      return () => {
        const { color, backgroundColor } = props;
        const { width, height } = domSize;
        const mergedColor = mergeColor(defaultColor, color);
        const filterId = `border-box-12-filterId-${uuid}`;

        return (
          <div class="dv-border-box-12" ref={domRef}>
            <svg class="dv-border-svg-container" width={width} height={height}>
              <defs>
                <filter id={filterId} height="150%" width="150%" x="-25%" y="-25%">
                  <feMorphology operator="dilate" radius="1" in="SourceAlpha" result="thicken" />
                  <feGaussianBlur in="thicken" stdDeviation="2" result="blurred" />
                  <feFlood
                    flood-color={fade(mergedColor[1] || defaultColor[1], 70)}
                    result="glowColor"
                  >
                    <animate
                      attributeName="flood-color"
                      values={`
                        ${fade(mergedColor[1] || defaultColor[1], 70)};
                        ${fade(mergedColor[1] || defaultColor[1], 30)};
                        ${fade(mergedColor[1] || defaultColor[1], 70)};
                      `}
                      dur="3s"
                      begin="0s"
                      repeatCount="indefinite"
                    />
                  </feFlood>
                  <feComposite
                    in="glowColor"
                    in2="blurred"
                    operator="in"
                    result="softGlowColored"
                  />
                  <feMerge>
                    <feMergeNode in="softGlowColored" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {width && height && (
                <path
                  fill={backgroundColor}
                  stroke-width="2"
                  stroke={mergedColor[0]}
                  d={`
                    M15 5 L ${width - 15} 5 Q ${width - 5} 5, ${width - 5} 15
                    L ${width - 5} ${height - 15} Q ${width - 5} ${height - 5}, ${width - 15} ${
                    height - 5
                  }
                    L 15, ${height - 5} Q 5 ${height - 5} 5 ${height - 15} L 5 15
                    Q 5 5 15 5
                  `}
                />
              )}

              <path
                stroke-width="2"
                fill="transparent"
                stroke-linecap="round"
                filter={`url(#${filterId})`}
                stroke={mergedColor[1]}
                d={`M 20 5 L 15 5 Q 5 5 5 15 L 5 20`}
              />

              <path
                stroke-width="2"
                fill="transparent"
                stroke-linecap="round"
                filter={`url(#${filterId})`}
                stroke={mergedColor[1]}
                d={`M ${width - 20} 5 L ${width - 15} 5 Q ${width - 5} 5 ${width - 5} 15 L ${
                  width - 5
                } 20`}
              />

              <path
                stroke-width="2"
                fill="transparent"
                stroke-linecap="round"
                filter={`url(#${filterId})`}
                stroke={mergedColor[1]}
                d={`
                  M ${width - 20} ${height - 5} L ${width - 15} ${height - 5}
                  Q ${width - 5} ${height - 5} ${width - 5} ${height - 15}
                  L ${width - 5} ${height - 20}
                `}
              />

              <path
                stroke-width="2"
                fill="transparent"
                stroke-linecap="round"
                filter={`url(#${filterId})`}
                stroke={mergedColor[1]}
                d={`
                  M 20 ${height - 5} L 15 ${height - 5}
                  Q 5 ${height - 5} 5 ${height - 15}
                  L 5 ${height - 20}
                `}
              />
            </svg>

            <div class="border-box-content">{slots.default?.()}</div>
          </div>
        );
      };
    },
  })
);
