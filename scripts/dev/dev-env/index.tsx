import { createApp } from 'vue';

import LogoImg from '../assets/logo.png';
import { BorderBox1 } from '../src';

import './index.less';

function WelcomeDevDataV() {
  return (
    <BorderBox1 class="welcome-box">
      <img class="logo" src={LogoImg} alt="logo" />

      <div class="title">Welcome</div>
      <div class="desc">
        Modify this file for development <span class="path">DATAV-VUE3/.dev/index.tsx</span>
      </div>
    </BorderBox1>
  );
}

createApp(<WelcomeDevDataV />).mount('#app');
