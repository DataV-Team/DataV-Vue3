import { definePropType } from './common';

export function createColorProps() {
  return {
    color: {
      type: definePropType<[string, string]>(Array),
      default: () => [],
    },
  };
}

export function createReverseProps() {
  return {
    reverse: {
      type: Boolean,
      default: false,
    },
  };
}

// unit: seconds
export function createDurationProps(duration: number) {
  return {
    duration: {
      type: Number,
      default: duration,
    },
  };
}
