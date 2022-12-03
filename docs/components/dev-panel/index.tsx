import { defineComponent } from 'vue';
import './index.less';

import { BorderBox9 } from '../../../src/components/border-box-9';

export const DevPanel = /*#__PURE__*/ defineComponent({
  name: 'DevPanel',

  setup() {
    return () => {
      return (
        <div class="dev-panel">
          <BorderBox9 class="dev">BorderBox9</BorderBox9>
        </div>
      );
    };
  },
});
