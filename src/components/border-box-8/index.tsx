import { computed, defineComponent } from 'vue';

import { useResize } from '../../hooks/useResize';
import { useUuid } from '../../hooks/useUuid';
import { createBorderBoxCommonProps, mergeColor } from '../../utils/borderBox';
import { withInstall } from '../../utils/common';

import './index.less';

const defaultColor = ['#235fa7', '#4fd2dd'];

const borderBox8Props = () => ({
  ...createBorderBoxCommonProps(),
  dur: {
    type: Number,
    default: 3,
  },
  reverse: {
    type: Boolean,
    default: false,
  },
});

export type BorderBox8Props = ReturnType<typeof borderBox8Props>;

export const BorderBox8 = /*#__PURE__*/ withInstall(
  defineComponent({
    name: 'BorderBox8',

    props: borderBox8Props(),

    setup(props, { slots }) {
      const { domRef, domSize } = useResize();
      const uuid = useUuid();

      return () => {
        const { color, backgroundColor, dur, reverse } = props;
        const { width, height } = domSize;
        const mergedColor = mergeColor(defaultColor, color);

        const path = `border-box-8-path-${uuid.id}`;
        const gradient = `border-box-8-gradient-${uuid.id}`;
        const mask = `border-box-8-mask-${uuid.id}`;

        const pathD = computed(() =>
          reverse
            ? `M 2.5, 2.5 L 2.5, ${height - 2.5} L ${width - 2.5}, ${height - 2.5} L ${width - 2.5}, 2.5 L 2.5, 2.5`
            : `M2.5, 2.5 L${width - 2.5}, 2.5 L${width - 2.5}, ${height - 2.5} L2.5, ${height - 2.5} L2.5, 2.5`
        ).value;

        return (
          <div class="dv-border-box-8" ref={domRef}>
            <svg class="dv-border-svg-container" width={width} height={height}>
              <defs>
                <path id={path} d={pathD} fill="transparent" />
                <radialGradient id={gradient} cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stop-color="#fff" stop-opacity="1" />
                  <stop offset="100%" stop-color="#fff" stop-opacity="0" />
                </radialGradient>

                <mask id={mask}>
                  <circle cx="0" cy="0" r="150" fill={`url(#${gradient})`}>
                    <animateMotion dur={`${dur}s`} path={pathD} rotate="auto" repeatCount="indefinite" />
                  </circle>
                </mask>
              </defs>

              <polygon fill={backgroundColor} points={`5, 5 ${width - 5}, 5 ${width - 5} ${height - 5} 5, ${height - 5}`} />

              <use stroke={mergedColor[0]} stroke-width="1" xlinkHref={`#${path}`} />

              <use stroke={mergedColor[1]} stroke-width="3" xlinkHref={`#${path}`} mask={`url(#${mask})`}>
                <animate attributeName="stroke-dasharray" from={`0, ${length}`} to={`${length}, 0`} dur={`${dur}s`} repeatCount="indefinite" />
              </use>
            </svg>

            <div class="border-box-content">{slots.default?.()}</div>
          </div>
        );
      };
    },
  })
);

export const Test = () => {
  return <BorderBox8 style={{ width: '100%', height: '300px' }}>123</BorderBox8>;
};
