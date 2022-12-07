/*
 * @Description: 请输入当前文件描述
 * @Author: @Xin (834529118@qq.com)
 * @Date: 2022-12-06 11:33:03
 * @LastEditTime: 2022-12-06 17:23:38
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

export function mergeColor(defaultColors: string[], colors: string[] = []) {
  return merge(defaultColors, colors);
}
