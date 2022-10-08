/*
 * @Description: 请输入当前文件描述
 * @Author: @Xin (834529118@qq.com)
 * @Date: 2022-12-06 16:24:25
 * @LastEditTime: 2022-12-06 16:43:04
 * @LastEditors: @Xin (834529118@qq.com)
 */
import { defineComponent } from 'vue';

import { useResize } from '../../hooks/useResize';
import { withInstall, mergeColor } from '../../utils/common';
import { createDecoration2Props } from '../../utils/decoration';
export type { Decoration2Props } from '../../utils/decoration';

import './index.less';

const defaultColor = ['#3faacb', '#fff'];

export const Decoration2 = withInstall(
  defineComponent({
    name: 'Decoration2',

    props: createDecoration2Props(),

    setup(props) {
      const { domRef, domSize } = useResize();

      const calcSVGData = (reverse, width, height) => {
        if (reverse) {
          return {
            w: 1,
            h: height,
            x: width / 2,
            y: 0,
          };
        } else {
          return {
            w: width,
            h: 1,
            x: 0,
            y: height / 2,
          };
        }
      };

      return () => {
        const { width, height } = domSize;
        const { color, reverse, dur } = props;

        const mergedColor = mergeColor(defaultColor, color);

        const { x, y, w, h } = calcSVGData(reverse, width, height);

        return (
          <div class="dv-decoration-2" ref={domRef}>
            <svg width={width} height={height}>
              <rect x={x} y={y} width={w} height={h} fill={mergedColor[0]}>
                <animate
                  attributeName={reverse ? 'height' : 'width'}
                  from="0"
                  to={reverse ? height : width}
                  dur={`${dur}s`}
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
                  dur={`${dur}s`}
                  calcMode="spline"
                  keyTimes="0;1"
                  keySplines="0.42,0,0.58,1"
                  repeatCount="indefinite"
                />
              </rect>
            </svg>
          </div>
        );
      };
    },
  })
);
