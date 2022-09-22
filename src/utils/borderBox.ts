import { merge } from 'lodash-es';

import type { PropType } from 'vue';

export function createBorderBoxCommonProps() {
  return {
    color: {
      type: Array as unknown as PropType<[string, string]>,
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
