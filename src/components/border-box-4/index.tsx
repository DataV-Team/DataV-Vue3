import cx from 'classnames';
import { defineComponent } from 'vue';

import { useResize } from '../../hooks/useResize';
import { createBorderBoxCommonProps, mergeColor } from '../../utils/borderBox';
import { withInstall } from '../../utils/common';
import { styled } from '../../utils/styled';
import { BorderBoxContainer, BorderBoxContent } from '../styled/borderBox';

const defaultColor = ['red', 'rgba(0,0,255,0.8)'];

const BorderSvgContainer = styled.svg`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;

  & > polyline {
    fill: none;
  }

  &.reverse {
    transform: rotate(180deg);
  }

  .stroke-width1 {
    stroke-width: 1;
  }

  .stroke-width3 {
    stroke-width: 3px;
    stroke-linecap: round;
  }
`('border-svg-container');

const borderBox4Props = () => ({
  ...createBorderBoxCommonProps(),
  reverse: {
    type: Boolean,
    default: false,
  },
});

export type BorderBox4Props = ReturnType<typeof borderBox4Props>;

export const BorderBox4 = /*#__PURE__*/ withInstall(
  defineComponent({
    name: 'BorderBox4',

    props: borderBox4Props(),

    setup(props, { slots }) {
      const { autoBindRef, domSize } = useResize();

      return () => {
        const { color, backgroundColor, reverse } = props;
        const { width, height } = domSize;
        const mergedColor = mergeColor(defaultColor, color);

        return (
          <BorderBoxContainer class={styled.getClassNameForBind('border-box-4')} ref={autoBindRef}>
            <BorderSvgContainer class={cx({ reverse })} width={width} height={height}>
              <polygon
                fill={backgroundColor}
                points={`${width - 15}, 22 170, 22 150, 7 40, 7 28, 21 32, 24
                16, 42 16, ${height - 32} 41, ${height - 7} ${width - 15}, ${height - 7}`}
              />

              <polyline
                class="stroke-width1"
                stroke={mergedColor[0]}
                points={`145, ${height - 5} 40, ${height - 5} 10, ${
                  height - 35
                } 10, 40 40, 5 150, 5 170, 20 ${width - 15}, 20`}
              />

              <polyline
                stroke={mergedColor[1]}
                class="stroke-width1"
                points={`245, ${height - 1} 36, ${height - 1} 14, ${height - 23} 14, ${
                  height - 100
                }`}
              />

              <polyline
                class="stroke-width3"
                stroke={mergedColor[0]}
                points={`7, ${height - 40} 7, ${height - 75}`}
              />

              <polyline
                class="stroke-width3"
                stroke={mergedColor[0]}
                points={`28, 24 13, 41 13, 64`}
              />

              <polyline class="stroke-width1" stroke={mergedColor[0]} points={`5, 45 5, 140`} />

              <polyline class="stroke-width1" stroke={mergedColor[1]} points={`14, 75 14, 180`} />

              <polyline
                class="stroke-width1"
                stroke={mergedColor[1]}
                points={`55, 11 147, 11 167, 26 250, 26`}
              />

              <polyline class="stroke-width3" stroke={mergedColor[1]} points={`158, 5 173, 16`} />

              <polyline
                class="stroke-width3"
                style={{ strokeDasharray: '100 250' }}
                stroke={mergedColor[0]}
                points={`200, 17 ${width - 10}, 17`}
              />

              <polyline
                class="stroke-width1"
                style={{ strokeDasharray: '80 270' }}
                stroke={mergedColor[1]}
                points={`385, 17 ${width - 10}, 17`}
              />
            </BorderSvgContainer>

            <BorderBoxContent>{slots.default?.()}</BorderBoxContent>
          </BorderBoxContainer>
        );
      };
    },
  })
);
