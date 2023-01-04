import { BorderBox1 } from '@dataview/datav-vue3';
import { defineComponent, ref } from 'vue';

import type { ExposeWithRefreshLayoutSize } from '@dataview/datav-vue3';
import type { ComponentPublicInstance } from 'vue';

export const App = /*#__PURE__*/ defineComponent({
  setup() {
    const borderBoxRef = ref<ComponentPublicInstance<{}, ExposeWithRefreshLayoutSize>>();

    // 按需使用 刷新组件宽高状态
    const refresh = () => {
      borderBoxRef.value?.refreshLayoutSize();
    };

    return () => {
      return <BorderBox1 ref={borderBoxRef}> Welcome </BorderBox1>;
    };
  },
});
