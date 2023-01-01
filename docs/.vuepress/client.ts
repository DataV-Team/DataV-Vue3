import { defineClientConfig } from '@vuepress/client';
import { Components } from '../components';

export default defineClientConfig({
  async enhance({ app }) {
    Components.forEach((CMP) => app.component(CMP.name, CMP));

    if (!__VUEPRESS_SSR__) {
      const DataV = await import('../../es');
      const DataVComponents = [
        DataV.BorderBox1,
        DataV.BorderBox2,
        DataV.BorderBox3,
        DataV.BorderBox4,
        DataV.BorderBox5,
        DataV.BorderBox6,
        DataV.BorderBox7,
        DataV.BorderBox8,
        DataV.BorderBox9,
        DataV.BorderBox10,
        DataV.BorderBox11,
        DataV.BorderBox12,
        DataV.BorderBox13,
        DataV.Decoration1,
        DataV.Decoration2,
        DataV.Decoration3,
        DataV.Decoration4,
        DataV.Decoration5,
        DataV.Loading,
      ];
      DataVComponents.forEach((CMP) => app.component(CMP.name, CMP));
    }
  },
});
