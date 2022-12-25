import { merge } from 'lodash-es';

import { definePropType } from './common';

export function createBorderBoxCommonProps() {
  return {
    color: {
      type: definePropType<[string, string]>(Array),
      default: () => [],
    },
    backgroundColor: {
      type: String,
      default: 'transparent',
    },
  };
}

export type BorderBoxCommonProps = ReturnType<typeof createBorderBoxCommonProps>;

export function mergeColor(defaultColors: string[], colors: string[] = []) {
  return merge(defaultColors, colors);
}
