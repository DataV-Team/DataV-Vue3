/*
 * @Description: 请输入当前文件描述
 * @Author: @Xin (834529118@qq.com)
 * @Date: 2022-12-06 11:33:03
 * @LastEditTime: 2022-12-07 11:34:58
 * @LastEditors: @Xin (834529118@qq.com)
 */
import type { App, Plugin } from 'vue';
import type { PropType } from 'vue';
import { merge } from 'lodash-es';

export function withInstall<T>(comp: T) {
  const c = comp as any;
  c.install = function (app: App) {
    app.component(c.displayName || c.name, comp);
  };

  return comp as T & Plugin;
}

export const definePropType = <T>(val: any): PropType<T> => val;

/**
 * @description: 计算两点之间距离
 * @param {Number[]} pointOne point1
 * @param {Number[]} pointTwo point2
 * @return {Number}
 */
export const calcTwoPointDistance = (pointOne: number[], pointTwo: number[]) => {
  var minusX = Math.abs(pointOne[0] - pointTwo[0]);
  var minusY = Math.abs(pointOne[1] - pointTwo[1]);
  return Math.sqrt(Math.pow(minusX, 2) + Math.pow(minusY, 2));
};

export function mergeColor(defaultColors: string[], colors: string[] = []) {
  return merge(defaultColors, colors);
}
