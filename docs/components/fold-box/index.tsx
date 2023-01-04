import { defineComponent, reactive } from 'vue';
import './index.less';

export const FoldBox = /*#__PURE__*/ defineComponent({
  name: 'FoldBox',

  props: {
    title: {
      type: String,
      default: '',
    },
  },

  setup(props, { slots }) {
    const state = reactive({ fold: true });

    const changeFoldStatus = () => {
      state.fold = !state.fold;
    };

    return () => {
      return (
        <div class="fold-box">
          <div class="fold-btn" onClick={changeFoldStatus}>
            {props.title || '点击以展开或折叠'}
          </div>

          <div class={`fold-container ${state.fold && 'fold'}`}>{slots.default?.()}</div>
        </div>
      );
    };
  },
});
