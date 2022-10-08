/*
 * @Description: 请输入当前文件描述
 * @Author: @Xin (834529118@qq.com)
 * @Date: 2022-12-06 16:24:25
 * @LastEditTime: 2022-12-07 10:10:26
 * @LastEditors: @Xin (834529118@qq.com)
 */
import { defineComponent } from 'vue';

import { useResize } from '../../hooks/useResize';
import { withInstall, mergeColor } from '../../utils/common';
import { createDecoration4Props } from '../../utils/decoration';

import type { CSSProperties } from 'vue';
export type { Decoration4Props } from '../../utils/decoration';
import './index.less';

const defaultColor = ['rgba(255, 255, 255, 0.3)', 'rgba(255, 255, 255, 0.3)'];

export const Decoration4 = withInstall(
  defineComponent({
    name: 'Decoration4',

    props: createDecoration4Props(),

    setup(props) {
      const { domRef, domSize } = useResize();

      return () => {
        const { width, height } = domSize;
        const { color, reverse, dur } = props;

        const mergedColor = mergeColor(defaultColor, color);

        const SW = reverse ? width : 5;
        const SH = reverse ? 5 : height;

        const containerStyle: CSSProperties = {
          width: `${SW}px`,
          height: `${SH}px`,
          animationDuration: `${dur}s`,
        };

        const polylinePoints = reverse ? `0, 2.5 ${width}, 2.5` : `2.5, 0 2.5, ${height}`;

        return (
          <div class="dv-decoration-4" ref={domRef}>
            <div class={['container', reverse ? 'reverse' : 'normal']} style={containerStyle}>
              <svg width={SW} height={SH}>
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
