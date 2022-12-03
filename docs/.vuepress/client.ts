import { defineClientConfig } from '@vuepress/client';
import { Components } from '../components';

export default defineClientConfig({
  enhance({ app }) {
    Components.forEach((CMP) => app.component(CMP.name, CMP));
  },
});
