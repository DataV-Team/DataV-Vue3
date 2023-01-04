import cx from 'classnames';
import { defineComponent } from 'vue';

import { useResize } from '../../hooks/useResize';
import { withInstall, mergeColor } from '../../utils/common';
import { createColorProps, createDurationProps, createReverseProps } from '../../utils/decoration';
import { styled } from '../../utils/styled';

import type { CSSProperties } from 'vue';

function createDecoration4Props() {
  return {
    ...createColorProps(),
    ...createReverseProps(),
    ...createDurationProps(3),
  };
}

const defaultColor = ['rgba(255, 255, 255, 0.3)', 'rgba(255, 255, 255, 0.3)'];

const DecorationContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`('decoration-4');

const DecorationContent = styled.div`
  display: flex;
  overflow: hidden;
  position: absolute;
  flex: 1;

  &.normal {
    animation: ani-height ease-in-out infinite;
    left: 50%;
    margin-left: -2px;
  }

  &.reverse {
    animation: ani-width ease-in-out infinite;
    top: 50%;
    margin-top: -2px;
  }

  @keyframes ani-height {
    0% {
      height: 0%;
    }

    70% {
      height: 100%;
    }

    100% {
      height: 100%;
    }
  }

  @keyframes ani-width {
    0% {
      width: 0%;
    }

    70% {
      width: 100%;
    }

    100% {
      width: 100%;
    }
  }
`('decoration-content');

export type Decoration4Props = ReturnType<typeof createDecoration4Props>;

export const Decoration4 = /*#__PURE__*/ withInstall(
  defineComponent({
    name: 'Decoration4',

    props: createDecoration4Props(),

    setup(props, { expose }) {
      const { autoBindRef, refreshLayoutSize, domSize } = useResize();

      expose({ refreshLayoutSize });

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
          <DecorationContainer ref={autoBindRef}>
            <DecorationContent class={cx(reverse ? 'reverse' : 'normal')} style={containerStyle}>
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
            </DecorationContent>
          </DecorationContainer>
        );
      };
    },
  })
);
