/*
 * @Description: 请输入当前文件描述
 * @Author: @Xin (834529118@qq.com)
 * @Date: 2022-12-06 13:11:20
 * @LastEditTime: 2022-12-06 15:53:14
 * @LastEditors: @Xin (834529118@qq.com)
 */
import { defineComponent } from 'vue';
import type { CSSProperties } from 'vue';
import { useResize } from '../../hooks/useResize';
import { withInstall, mergeColor } from '../../utils/common';
import { createDecoration1Props } from '../../utils/decoration';

export type { Decoration1Props } from '../../utils/decoration';

import './index.less';

const defaultColor = ['#fff', '#0de7c2'];
const defaultSvgW = 200;
const defaultSvgH = 50;

const rowPoints = 20;
const rowNum = 4;
const pointSideLength = 2.5;
const halfPointSideLength = pointSideLength / 2;

export const Decoration1 = withInstall(
  defineComponent({
    name: 'Decoration1',

    props: createDecoration1Props(),

    setup(props) {
      const { domRef, domSize } = useResize();

      const calcPointsPosition = () => {
        const horizontalGap = defaultSvgW / (rowPoints + 1);
        const verticalGap = defaultSvgH / (rowNum + 1);

        return new Array(rowNum)
          .fill(0)
          .map((_, i) => new Array(rowPoints).fill(0).map((_, j) => [horizontalGap * (j + 1), verticalGap * (i + 1)]))
          .reduce((all, item) => [...all, ...item], []);
      };

      const calcRectsPosition = (points) => {
        const rect1 = points[rowPoints * 2 - 1];
        const rect2 = points[rowPoints * 2 - 3];

        return [rect1, rect2];
      };

      return () => {
        const { color } = props;
        const { width, height } = domSize;

        const mergedColor = mergeColor(defaultColor, color);

        const svgStyle: CSSProperties = {
          transform: `scale(${width / defaultSvgW},${height / defaultSvgH})`,
        };

        const points = calcPointsPosition();

        const [RX, RY] = calcRectsPosition(points);

        return (
          <div class="dv-decoration-1" ref={domRef}>
            <svg width={defaultSvgW} height={defaultSvgH} style={svgStyle}>
              {points.map(([px, py], i) => {
                const x = px - halfPointSideLength;
                const y = py - halfPointSideLength;

                return Math.random() > 0.6 ? (
                  <rect key={i} x={x} y={y} width={pointSideLength} height={pointSideLength} fill={mergedColor[0]}>
                    {Math.random() > 0.6 ? (
                      <animate
                        attributeName="fill"
                        values={`${mergedColor[0]};transparent`}
                        dur="1s"
                        begin={Math.random() * 2}
                        repeatCount="indefinite"
                      />
                    ) : null}
                  </rect>
                ) : null;
              })}

              {RX ? (
                <rect
                  fill={mergedColor[1]}
                  x={RX[0] - pointSideLength}
                  y={RX[1] - pointSideLength}
                  width={pointSideLength * 2}
                  height={pointSideLength * 2}
                >
                  <animate attributeName="width" values={`0;${pointSideLength * 2}`} dur="2s" repeatCount="indefinite" />
                  <animate attributeName="height" values={`0;${pointSideLength * 2}`} dur="2s" repeatCount="indefinite" />
                  <animate attributeName="x" values={`${RX[0]};${RX[0] - pointSideLength}`} dur="2s" repeatCount="indefinite" />
                  <animate attributeName="y" values={`${RX[1]};${RX[1] - pointSideLength}`} dur="2s" repeatCount="indefinite" />
                </rect>
              ) : null}

              {RY ? (
                <rect
                  fill={mergedColor[1]}
                  x={RY[0] - pointSideLength}
                  y={RY[1] - pointSideLength}
                  width={pointSideLength * 2}
                  height={pointSideLength * 2}
                >
                  <animate attributeName="width" values="0;40;0" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="x" values={`${RY[0]};${RY[0] - 40};${RY[0]}`} dur="2s" repeatCount="indefinite" />
                </rect>
              ) : null}
            </svg>
          </div>
        );
      };
    },
  })
);
