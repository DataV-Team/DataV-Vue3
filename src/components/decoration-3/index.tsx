/*
 * @Description: 请输入当前文件描述
 * @Author: @Xin (834529118@qq.com)
 * @Date: 2022-12-06 16:24:25
 * @LastEditTime: 2022-12-06 17:12:07
 * @LastEditors: @Xin (834529118@qq.com)
 */
import { defineComponent } from 'vue';

import { useResize } from '../../hooks/useResize';
import { withInstall, mergeColor } from '../../utils/common';
import { createDecoration1Props } from '../../utils/decoration';

import type { Decoration1Props } from '../../utils/decoration';
import type { CSSProperties } from 'vue';
export type Decoration3Props = Decoration1Props;

import './index.less';

const defaultColor = ['#7acaec', 'transparent'];

const defaultSvgW = 300;
const defaultSvgH = 35;
const rowPoints = 25;
const rowNum = 2;

const pointSideLength = 7;
const halfPointSideLength = pointSideLength / 2;

export const Decoration3 = withInstall(
  defineComponent({
    name: 'Decoration3',

    props: createDecoration1Props(),

    setup(props) {
      const { domRef, domSize } = useResize();

      return () => {
        const { width, height } = domSize;
        const { color } = props;

        const svgStyle: CSSProperties = {
          transform: `scale(${width / defaultSvgW},${height / defaultSvgH})`,
        };

        const calcPointsPosition = () => {
          const horizontalGap = defaultSvgW / (rowPoints + 1);
          const verticalGap = defaultSvgH / (rowNum + 1);

          return new Array(rowNum)
            .fill(0)
            .map((_, i) => new Array(rowPoints).fill(0).map((_, j) => [horizontalGap * (j + 1), verticalGap * (i + 1)]))
            .reduce((all, item) => [...all, ...item], []);
        };

        const mergedColor = mergeColor(defaultColor, color);
        const points = calcPointsPosition();

        return (
          <div class="dv-decoration-3" ref={domRef}>
            <svg width={width} height={height} style={svgStyle}>
              {points.map(([px, py], i) => {
                const x = px - halfPointSideLength;
                const y = py - halfPointSideLength;

                return Math.random() > 0.6 ? (
                  <rect key={i} x={x} y={y} width={pointSideLength} height={pointSideLength} fill={mergedColor[0]}>
                    {Math.random() > 0.6 ? (
                      <animate
                        attributeName="fill"
                        values={mergedColor.join(';')}
                        dur={`${Math.random() + 1}s`}
                        begin={Math.random() * 2}
                        repeatCount="indefinite"
                      />
                    ) : null}
                  </rect>
                ) : null;
              })}
            </svg>
          </div>
        );
      };
    },
  })
);
