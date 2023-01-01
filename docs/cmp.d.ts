import type * as DataV from '../es/index';
import type { defineComponent } from 'vue';

declare global {
  type Component = ReturnType<typeof defineComponent>;

  export const __VUEPRESS_SSR__: boolean;
  export const ExternalLinkIcon: Component;
  export const ClientOnly: Component;
  export const BorderBox1: typeof DataV.BorderBox1;
  export const BorderBox2: typeof DataV.BorderBox2;
  export const BorderBox3: typeof DataV.BorderBox3;
  export const BorderBox4: typeof DataV.BorderBox4;
  export const BorderBox5: typeof DataV.BorderBox5;
  export const BorderBox6: typeof DataV.BorderBox6;
  export const BorderBox7: typeof DataV.BorderBox7;
  export const BorderBox8: typeof DataV.BorderBox8;
  export const BorderBox9: typeof DataV.BorderBox9;
  export const BorderBox10: typeof DataV.BorderBox10;
  export const BorderBox11: typeof DataV.BorderBox11;
  export const BorderBox12: typeof DataV.BorderBox12;
  export const BorderBox13: typeof DataV.BorderBox13;
  export const Decoration1: typeof DataV.Decoration1;
  export const Decoration2: typeof DataV.Decoration2;
  export const Decoration3: typeof DataV.Decoration3;
  export const Decoration4: typeof DataV.Decoration4;
  export const Decoration5: typeof DataV.Decoration5;
  export const Loading: typeof DataV.Loading;
}
