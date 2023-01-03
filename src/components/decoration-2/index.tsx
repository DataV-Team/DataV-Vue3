import { defineComponent } from 'vue';

import { useResize } from '../../hooks/useResize';
import { withInstall, mergeColor } from '../../utils/common';
import { createColorProps, createDurationProps, createReverseProps } from '../../utils/decoration';
import { styled } from '../../utils/styled';

const defaultColor = ['#3faacb', '#fff'];

function createDecoration2Props() {
  return {
    ...createColorProps(),
    ...createReverseProps(),
    ...createDurationProps(6),
  };
}

function calcSVGData(reverse, width, height) {
  if (reverse) {
    return {
      width: 1,
      height,
      x: width / 2,
      y: 0,
    };
  } else {
    return {
      width,
      height: 1,
      x: 0,
      y: height / 2,
    };
  }
}

const DecorationContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`('decoration-2');

export type Decoration2Props = ReturnType<typeof createDecoration2Props>;

export const Decoration2 = /*#__PURE__*/ withInstall(
  defineComponent({
    name: 'Decoration2',

    props: createDecoration2Props(),

    setup(props) {
      const { autoBindRef, domSize } = useResize();

      return () => {
        const { width, height } = domSize;
        const { color, reverse, duration } = props;

        const mergedColor = mergeColor(defaultColor, color);

        const { x, y, width: svgWidth, height: svgHeight } = calcSVGData(reverse, width, height);

        return (
          <DecorationContainer ref={autoBindRef}>
            <svg width={width} height={height}>
              <rect x={x} y={y} width={svgWidth} height={svgHeight} fill={mergedColor[0]}>
                <animate
                  attributeName={reverse ? 'height' : 'width'}
                  from="0"
                  to={reverse ? height : width}
                  dur={`${duration}s`}
                  calcMode="spline"
                  keyTimes="0;1"
                  keySplines=".42,0,.58,1"
                  repeatCount="indefinite"
                />
              </rect>

              <rect x={x} y={y} width="1" height="1" fill={mergedColor[1]}>
                <animate
                  attributeName={reverse ? 'y' : 'x'}
                  from="0"
                  to={reverse ? height : width}
                  dur={`${duration}s`}
                  calcMode="spline"
                  keyTimes="0;1"
                  keySplines="0.42,0,0.58,1"
                  repeatCount="indefinite"
                />
              </rect>
            </svg>
          </DecorationContainer>
        );
      };
    },
  })
);
