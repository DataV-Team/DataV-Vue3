import { defineComponent } from 'vue';

import { useResize } from '../../hooks/useResize';
import { withInstall, mergeColor } from '../../utils/common';
import { createColorProps } from '../../utils/decoration';
import { styled } from '../../utils/styled';

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
}) {
  const horizontalGap = width / (rowPoints + 1);
  const verticalGap = height / (rowCount + 1);

  return new Array(rowCount)
    .fill(0)
    .map((_, i) =>
      new Array(rowPoints).fill(0).map((_, j) => [horizontalGap * (j + 1), verticalGap * (i + 1)])
    )
    .reduce((all, item) => [...all, ...item], []);
}

const defaultColor = ['#7acaec', 'transparent'];

const defaultSvgWidth = 300;
const defaultSvgHeight = 35;
const rowPoints = 25;
const rowCount = 2;

const pointSideLength = 7;
const halfPointSideLength = pointSideLength / 2;

const pointPositions = calcPointsPosition({
  width: defaultSvgWidth,
  height: defaultSvgHeight,
  rowPoints,
  rowCount,
});

const DecorationContainer = styled.div`
  width: 100%;
  height: 100%;

  svg {
    transform-origin: left top;
  }
`('decoration-3');

export type Decoration3Props = ReturnType<typeof createColorProps>;

export const Decoration3 = /*#__PURE__*/ withInstall(
  defineComponent({
    name: 'Decoration3',

    props: createColorProps(),

    setup(props, { expose }) {
      const { autoBindRef, refreshLayoutSize, domSize } = useResize();

      expose({ refreshLayoutSize });

      return () => {
        const { width, height } = domSize;
        const { color } = props;

        const mergedColor = mergeColor(defaultColor, color);

        return (
          <DecorationContainer ref={autoBindRef}>
            <svg
              width={defaultSvgWidth}
              height={defaultSvgHeight}
              style={{
                transform: `scale(${width / defaultSvgWidth},${height / defaultSvgHeight})`,
              }}
            >
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
                        values={mergedColor.join(';')}
                        dur={`${Math.random() + 1}s`}
                        begin={Math.random() * 2}
                        repeatCount="indefinite"
                      />
                    )}
                  </rect>
                ) : null;
              })}
            </svg>
          </DecorationContainer>
        );
      };
    },
  })
);
