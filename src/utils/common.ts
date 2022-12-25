import { merge } from 'lodash-es';

import type { Point } from '../types/common';
import type { App, Plugin } from 'vue';
import type { PropType } from 'vue';

export function withInstall<T>(comp: T) {
  const c = comp as any;
  c.install = function (app: App) {
    app.component(c.displayName || c.name, comp);
  };

  return comp as T & Plugin;
}

export const definePropType = <T>(val: any): PropType<T> => val;

/**
 * @description 计算两点之间距离
 * @param {Point[]} pointA point1
 * @param {Point[]} pointB point2
 * @return {number[]}
 */
export const calcTwoPointDistance = (pointA: Point, pointB: Point) => {
  const minusX = Math.abs(pointA[0] - pointB[0]);
  const minusY = Math.abs(pointA[1] - pointB[1]);

  return Math.sqrt(Math.pow(minusX, 2) + Math.pow(minusY, 2));
};

export function mergeColor(defaultColors: string[], colors: string[] = []) {
  return merge(defaultColors, colors);
}
