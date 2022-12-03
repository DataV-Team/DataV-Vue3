import type { defineComponent } from 'vue';

declare global {
  type Component = ReturnType<typeof defineComponent>;

  export const ExternalLinkIcon: Component;
}
