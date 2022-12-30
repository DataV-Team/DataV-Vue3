import { random } from 'lodash-es';
import { defineComponent } from 'vue';

import { useResize } from '../../hooks/useResize';
import { withInstall, mergeColor } from '../../utils/common';
import { createColorProps } from '../../utils/decoration';
import { styled } from '../../utils/styled';

import type { CSSProperties } from 'vue';

const defaultColor = ['#7acaec', '#7acaec'];
const defaultSvgW = 300;
const defaultSvgH = 35;
const rowCount = 1;
const rowPoints = 40;
const rectWidth = 7;
const halfRectWidth = rectWidth / 2;

const DecorationContainer = styled.div`
  width: 100%;
  height: 100%;

  .svg-origin {
    transform-origin: left top;
  }
`('decoration-6');

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
  // 尺寸内容纳数量的单个宽度
  const horizontalGap = width / (rowPoints + 1);
  // 尺寸内容纳数量的单个高度
  const verticalGap = height / (rowCount + 1);

  // 生成点阵数据
  const points = new Array(rowCount)
    .fill(0)
    .map((_, i) =>
      new Array(rowPoints).fill(0).map((_, j) => [horizontalGap * (j + 1), verticalGap * (i + 1)])
    )
    .reduce((all, item) => [...all, ...item], []);

  const heights = new Array(rowCount * rowPoints)
    .fill(0)
    .map(() =>
      Math.random() > 0.8 ? random(0.7 * height, height) : random(0.2 * height, 0.5 * height)
    );
  const minHeights = new Array(rowCount * rowPoints)
    .fill(0)
    .map((_, i) => heights[i] * Math.random());
  const randoms = new Array(rowCount * rowPoints).fill(0).map(() => Math.random() + 1.5);
  return {
    points,
    heights,
    minHeights,
    randoms,
  };
}

const { points, heights, minHeights, randoms } = calcPointsPosition({
  width: defaultSvgW,
  height: defaultSvgH,
  rowPoints,
  rowCount,
});

export type Decoration6Props = ReturnType<typeof createColorProps>;

export const Decoration6 = /*#__PURE__*/ withInstall(
  defineComponent({
    name: 'Decoration6',

    props: createColorProps(),

    setup(props) {
      const { domRef, domSize } = useResize();

      return () => {
        const { width, height } = domSize;
        const { color } = props;

        const mergedColor = mergeColor(defaultColor, color);

        const svgStyle: CSSProperties = {
          transform: `scale(${width / defaultSvgW},${height / defaultSvgH})`,
        };

        const randomColor = () => mergedColor[Math.random() > 0.5 ? 0 : 1];

        return (
          <DecorationContainer ref={(ref) => (domRef.value = ref.$el)}>
            <svg class="svg-origin" width={width} height={height} style={svgStyle}>
              {points.map(([x, y], i) => (
                <rect
                  key={`rect${i}`}
                  fill={randomColor()}
                  x={x - halfRectWidth}
                  y={y - heights[i]}
                  width={rectWidth}
                  height={heights[i]}
                >
                  <animate
                    attributeName="y"
                    values={`${y - minHeights[i] / 2};${y - heights[i] / 2};${
                      y - minHeights[i] / 2
                    }`}
                    dur={randoms[i]}
                    keyTimes="0;0.5;1"
                    calcMode="spline"
                    keySplines="0.42,0,0.58,1;0.42,0,0.58,1"
                    begin="0s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="height"
                    values={`${minHeights[i]};${heights[i]};${minHeights[i]}`}
                    dur={randoms[i]}
                    keyTimes="0;0.5;1"
                    calcMode="spline"
                    keySplines="0.42,0,0.58,1;0.42,0,0.58,1"
                    begin="0s"
                    repeatCount="indefinite"
                  />
                </rect>
              ))}
            </svg>
          </DecorationContainer>
        );
      };
    },
  })
);
