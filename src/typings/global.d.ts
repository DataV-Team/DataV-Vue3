import type { SVGAttributes } from 'vue';

declare global {
  namespace JSX {
    interface AnimateMotion extends SVGAttributes {
      path?: string | number;
    }

    interface IntrinsicElements {
      animateMotion: AnimateMotion;
    }
  }
}

export {};
