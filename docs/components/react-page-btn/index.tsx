import { defineComponent } from 'vue';
import './index.less';

function navigateToReactPage() {
  const { pathname } = location;

  window.open(`http://datav-react.jiaminghi.com${pathname}`);
}

export const ReactPageBtn = /*#__PURE__*/ defineComponent({
  name: 'ReactPageBtn',

  setup() {
    return () => {
      return (
        <span>
          （
          <span class="react-page-btn" onClick={navigateToReactPage}>
            React版
            <ExternalLinkIcon />
          </span>
          ）
        </span>
      );
    };
  },
});
