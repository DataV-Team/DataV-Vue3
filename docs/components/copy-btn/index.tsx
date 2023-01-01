import cx from 'classnames';
import { defineComponent, reactive } from 'vue';

import { copy } from '../utils';
import './index.less';

export const CopyBtn = /*#__PURE__*/ defineComponent({
  name: 'CopyBtn',

  props: {
    info: {
      type: String,
      default: '',
    },
  },

  setup(props) {
    const state = reactive({ coping: false });

    return () => {
      const { coping } = state;
      const { info } = props;

      const copyInfo = () => {
        if (coping) return;

        copy(info);

        state.coping = true;
        setTimeout(() => {
          state.coping = false;
        }, 1000);
      };

      return (
        <div class="copy-btn-container">
          <span class="copy-btn" onClick={copyInfo}>
            <span class={cx({ coping })}>点击复制</span>
            <span>复制成功</span>
          </span>
        </div>
      );
    };
  },
});
