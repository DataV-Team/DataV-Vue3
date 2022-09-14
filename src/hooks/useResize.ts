import { debounce } from 'lodash-es';
import { reactive, ref, onMounted, onUnmounted } from 'vue';

function observerDomResize(dom: HTMLElement, callback: () => void) {
  const observer = new MutationObserver(callback);

  observer.observe(dom, { attributes: true, attributeFilter: ['class', 'style'], attributeOldValue: true });

  return observer;
}

function updateDomSize(dom: HTMLElement, target: { width: number; height: number }) {
  const { clientWidth = 0, clientHeight = 0 } = dom || {};

  if (!dom) {
    console.warn('DataV: Failed to get dom node, component rendering may be abnormal!');
  } else if (!clientWidth || !clientHeight) {
    console.warn('DataV: Component width or height is 0px, rendering abnormality may occur!');
  }

  target.width = clientWidth;
  target.height = clientHeight;
}

export function useResize() {
  const domRef = ref<HTMLDivElement>();
  const domSizeEffectDisposer: (() => void)[] = [];

  const domSize = reactive({
    width: 0,
    height: 0,
  });

  const handleRomSizeChange = () => {
    updateDomSize(domRef.value, domSize);
  };

  const debouncedDomSizeChangeHandler = debounce(handleRomSizeChange, 100);

  onMounted(() => {
    handleRomSizeChange();

    const observer = observerDomResize(domRef.value, debouncedDomSizeChangeHandler);
    window.addEventListener('resize', debouncedDomSizeChangeHandler);

    domSizeEffectDisposer.push(
      () => {
        observer.disconnect();
      },
      () => {
        window.removeEventListener('resize', debouncedDomSizeChangeHandler);
      }
    );
  });

  onUnmounted(() => {
    domSizeEffectDisposer.forEach((disposer) => disposer());
  });

  return {
    domRef,
    domSize,
  };
}
