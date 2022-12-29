import { defineComponent } from 'vue';

import { useResize } from '../../hooks/useResize';
import { withInstall, mergeColor } from '../../utils/common';
import { createColorProps } from '../../utils/decoration';
import { styled } from '../../utils/styled';

import type { Point } from '../../types/common';
import type { CSSProperties } from 'vue';

function calcPointsPosition({
  width,
  height,
  rowPoints,
  rowCount,
}: {
  width: number;
  height: number;
  rowPoints: number;
  rowCount: number;
}): Point[] {
  const horizontalGap = width / (rowPoints + 1);
  const verticalGap = height / (rowCount + 1);

  return new Array(rowCount)
    .fill(0)
    .map<Point[]>((_, i) =>
      new Array(rowPoints).fill(0).map((_, j) => [horizontalGap * (j + 1), verticalGap * (i + 1)])
    )
    .reduce((all, item) => [...all, ...item], []);
}

const defaultColor = ['#fff', '#0de7c2'];
const defaultSvgWidth = 200;
const defaultSvgHeight = 50;

const rowPoints = 20;
const rowCount = 4;
const pointSideLength = 2.5;
const halfPointSideLength = pointSideLength / 2;

const pointPositions = calcPointsPosition({
  width: defaultSvgWidth,
  height: defaultSvgHeight,
  rowPoints,
  rowCount,
});

const leftRectPosition = pointPositions[rowPoints * 2 - 1];
const rightRectPosition = pointPositions[rowPoints * 2 - 3];

const DecorationContainer = styled.div`
  width: 100%;
  height: 100%;

  svg {
    transform-origin: left top;
  }
`('decoration-1');

export type Decoration1Props = ReturnType<typeof createColorProps>;

export const Decoration1 = /*#__PURE__*/ withInstall(
  defineComponent({
    name: 'Decoration1',

    props: createColorProps(),

    setup(props) {
      const { domRef, domSize } = useResize();

      return () => {
        const { color } = props;
        const { width, height } = domSize;

        const mergedColor = mergeColor(defaultColor, color);

        const svgStyle: CSSProperties = {
          transform: `scale(${width / defaultSvgWidth},${height / defaultSvgHeight})`,
        };

        return (
          <DecorationContainer ref={(ref) => (domRef.value = ref.$el)}>
            <svg width={defaultSvgWidth} height={defaultSvgHeight} style={svgStyle}>
              {pointPositions.map(([px, py], i) => {
                const x = px - halfPointSideLength;
                const y = py - halfPointSideLength;

                return Math.random() > 0.6 ? (
                  <rect
                    key={i}
                    x={x}
                    y={y}
                    width={pointSideLength}
                    height={pointSideLength}
                    fill={mergedColor[0]}
                  >
                    {Math.random() > 0.6 && (
                      <animate
                        attributeName="fill"
                        values={`${mergedColor[0]};transparent`}
                        dur="1s"
                        begin={Math.random() * 2}
                        repeatCount="indefinite"
                      />
                    )}
                  </rect>
                ) : null;
              })}

              <rect
                fill={mergedColor[1]}
                x={leftRectPosition[0] - pointSideLength}
                y={leftRectPosition[1] - pointSideLength}
                width={pointSideLength * 2}
                height={pointSideLength * 2}
              >
                <animate
                  attributeName="width"
                  values={`0;${pointSideLength * 2}`}
                  dur="2s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="height"
                  values={`0;${pointSideLength * 2}`}
                  dur="2s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="x"
                  values={`${leftRectPosition[0]};${leftRectPosition[0] - pointSideLength}`}
                  dur="2s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="y"
                  values={`${leftRectPosition[1]};${leftRectPosition[1] - pointSideLength}`}
                  dur="2s"
                  repeatCount="indefinite"
                />
              </rect>

              <rect
                fill={mergedColor[1]}
                x={rightRectPosition[0] - pointSideLength}
                y={rightRectPosition[1] - pointSideLength}
                width={pointSideLength * 2}
                height={pointSideLength * 2}
              >
                <animate attributeName="width" values="0;40;0" dur="2s" repeatCount="indefinite" />
                <animate
                  attributeName="x"
                  values={`${rightRectPosition[0]};${rightRectPosition[0] - 40};${
                    rightRectPosition[0]
                  }`}
                  dur="2s"
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
