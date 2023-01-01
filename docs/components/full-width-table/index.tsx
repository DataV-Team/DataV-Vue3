import { defineComponent } from 'vue';
import './index.less';

export const FullWidthTable = /*#__PURE__*/ defineComponent({
  name: 'FullWidthTable',

  setup(_, { slots }) {
    return () => {
      return <div class="full-width-table">{slots.default?.()}</div>;
    };
  },
});
