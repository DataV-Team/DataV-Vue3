/*
 * @Description: 请输入当前文件描述
 * @Author: @Xin (834529118@qq.com)
 * @Date: 2022-12-06 13:17:56
 * @LastEditTime: 2022-12-06 16:26:33
 * @LastEditors: @Xin (834529118@qq.com)
 */
import { definePropType } from './common';

export function createDecoration1Props() {
  return {
    color: {
      type: definePropType<[string, string]>([String, String]),
      default: () => [],
    },
  };
}

export function createDecoration2Props() {
  return {
    ...createDecoration1Props(),
    reverse: {
      type: Boolean,
      default: false,
    },
    dur: {
      type: Number,
      default: 6,
    },
  };
}

export type Decoration1Props = ReturnType<typeof createDecoration1Props>;
export type Decoration2Props = ReturnType<typeof createDecoration2Props>;
