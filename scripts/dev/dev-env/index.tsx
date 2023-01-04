import { createApp, defineComponent } from 'vue';

import Logo from '../assets/logo.png';
import { BorderBox12 } from '../src';

import './index.less';

const WelcomeDevDataV = defineComponent({
  setup() {
    return () => {
      return (
        <div class="welcome-container">
          <img class="logo" src={Logo} />

          <div class="brand">@dataview/datav-vue3</div>

          <div class="brand-desc">Vite + TypeScript + Vue3</div>

          <div class="desc">Vue3 large screen data display component library</div>

          <BorderBox12
            class="dev-tip-container"
            color={['#647eff', '#42d392']}
            backgroundColor="#f1f1f1"
          >
            Modify DATAV-VUE3/.dev/index.tsx for Development
          </BorderBox12>
        </div>
      );
    };
  },
});
createApp(<WelcomeDevDataV />).mount('#app');
