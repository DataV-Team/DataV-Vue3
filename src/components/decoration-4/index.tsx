import { defineComponent } from 'vue';

import { useResize } from '../../hooks/useResize';
import { withInstall, mergeColor } from '../../utils/common';
import { createColorProps, createDurationProps, createReverseProps } from '../../utils/decoration';

import type { CSSProperties } from 'vue';
import './index.less';

function createDecoration4Props() {
  return {
    ...createColorProps(),
    ...createReverseProps(),
    ...createDurationProps(3),
  };
}

const defaultColor = ['rgba(255, 255, 255, 0.3)', 'rgba(255, 255, 255, 0.3)'];

export type Decoration4Props = ReturnType<typeof createDecoration4Props>;

export const Decoration4 = withInstall(
  defineComponent({
    name: 'Decoration4',

    props: createDecoration4Props(),

    setup(props) {
      const { domRef, domSize } = useResize();

      return () => {
        const { width, height } = domSize;
        const { color, reverse, duration } = props;

        const mergedColor = mergeColor(defaultColor, color);

        const svgWidth = reverse ? width : 5;
        const svgHeight = reverse ? 5 : height;

        const containerStyle: CSSProperties = {
          width: `${svgWidth}px`,
          height: `${svgHeight}px`,
          animationDuration: `${duration}s`,
        };

        const polylinePoints = reverse ? `0, 2.5 ${width}, 2.5` : `2.5, 0 2.5, ${height}`;

        return (
          <div class="dv-decoration-4" ref={domRef}>
            <div class={['container', reverse ? 'reverse' : 'normal']} style={containerStyle}>
              <svg width={svgWidth} height={svgHeight}>
                <polyline stroke={mergedColor[0]} points={polylinePoints} />
                <polyline
                  class="bold-line"
                  stroke={mergedColor[1]}
                  stroke-width="3"
                  stroke-dasharray="20, 80"
                  stroke-dashoffset="-30"
                  points={polylinePoints}
                />
              </svg>
            </div>
          </div>
        );
      };
    },
  })
);
