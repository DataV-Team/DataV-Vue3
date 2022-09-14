import { merge } from 'lodash-es';

export function useMergedColor(defaultColors: string[], colors: string[] = []) {
  return merge(defaultColors, colors);
}
