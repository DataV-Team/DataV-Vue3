import { defineComponent } from 'vue';
import './index.less';

export const DevPanel = /*#__PURE__*/ defineComponent({
  name: 'DevPanel',

  setup() {
    return () => {
      return <div class="dev-panel">Dev</div>;
    };
  },
});
