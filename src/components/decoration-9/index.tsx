import { fade } from '@jiaminghi/color';
import { defineComponent } from 'vue';

import { useResize } from '../../hooks/useResize';
import { useUuid } from '../../hooks/useUuid';
import { withInstall, mergeColor } from '../../utils/common';
import { createDurationProps, createColorProps } from '../../utils/decoration';
import { styled } from '../../utils/styled';

import type { CSSProperties } from 'vue';

function createDecoration9Props() {
  return {
    ...createColorProps(),
    ...createDurationProps(3),
  };
}

const defaultColor = ['rgba(3, 166, 224, 0.8)', 'rgba(3, 166, 224, 0.5)'];
const svgWidth = 100;
const svgHeight = 100;

const DecorationContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  svg.svg-origin {
    position: absolute;
    left: 0px;
    top: 0px;
    transform-origin: left top;
  }
`('decoration-9');

export type Decoration9Props = ReturnType<typeof createDecoration9Props>;

export const Decoration9 = /*#__PURE__*/ withInstall(
  defineComponent({
    name: 'Decoration9',

    props: createDecoration9Props(),

    setup(props, { slots }) {
      const { autoBindRef, domSize } = useResize();
      const uuid = useUuid();
      const polygonId = `decoration-9-polygon-${uuid.id}`;

      return () => {
        const { width, height } = domSize;
        const { color, duration } = props;
        const mergedColor = mergeColor(defaultColor, color);
        const svgStyle: CSSProperties = {
          transform: `scale(${width / svgWidth},${height / svgHeight})`,
        };
        return (
          <DecorationContainer ref={autoBindRef}>
            <svg class="svg-origin" width={svgWidth} height={svgHeight} style={svgStyle}>
              <defs>
                <polygon id={polygonId} points="15, 46.5, 21, 47.5, 21, 52.5, 15, 53.5" />
              </defs>

              <circle
                cx="50"
                cy="50"
                r="45"
                fill="transparent"
                stroke={mergedColor[1]}
                stroke-width="10"
                stroke-dasharray="80, 100, 30, 100"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  values="0 50 50;360 50 50"
                  dur={`${duration}s`}
                  repeatCount="indefinite"
                />
              </circle>

              <circle
                cx="50"
                cy="50"
                r="45"
                fill="transparent"
                stroke={mergedColor[0]}
                stroke-width="6"
                stroke-dasharray="50, 66, 100, 66"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  values="0 50 50;-360 50 50"
                  dur={`${duration}s`}
                  repeatCount="indefinite"
                />
              </circle>

              <circle
                cx="50"
                cy="50"
                r="38"
                fill="transparent"
                stroke={fade(mergedColor[1] || defaultColor[1], 30)}
                stroke-width="1"
                stroke-dasharray="5, 1"
              />

              {new Array(20).fill(0).map((foo, i) => {
                return (
                  <use
                    key={i}
                    xlinkHref={`#${polygonId}`}
                    stroke={mergedColor[1]}
                    fill={Math.random() > 0.4 ? 'transparent' : mergedColor[0]}
                  >
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      values="0 50 50;360 50 50"
                      dur={`${duration}s`}
                      begin={`${(i * duration) / 20}s`}
                      repeatCount="indefinite"
                    />
                  </use>
                );
              })}

              <circle
                cx="50"
                cy="50"
                r="26"
                fill="transparent"
                stroke={fade(mergedColor[1] || defaultColor[1], 30)}
                stroke-width="1"
                stroke-dasharray="5, 1"
              />
            </svg>

            {slots.default?.()}
          </DecorationContainer>
        );
      };
    },
  })
);
