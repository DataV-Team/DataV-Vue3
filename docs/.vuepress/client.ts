import { defineClientConfig } from '@vuepress/client';
import { Components } from '../components';

export default defineClientConfig({
  async enhance({ app }) {
    Components.forEach((CMP) => app.component(CMP.name, CMP));

    if (!__VUEPRESS_SSR__) {
      const DataV = await import('../../es');
      app.use(DataV.default);
    }
  },
});
