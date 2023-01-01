import { defineComponent } from 'vue';

import { useResize } from '../../hooks/useResize';
import { createBorderBoxCommonProps, mergeColor } from '../../utils/borderBox';
import { withInstall } from '../../utils/common';
import { styled } from '../../utils/styled';
import { BorderBoxContainer, BorderBoxContent } from '../styled/borderBox';

import type { BorderBoxCommonProps } from '../../utils/borderBox';

const defaultColor = ['#1d48c4', '#d3e1f8'];

const border = ['left-top', 'right-top', 'left-bottom', 'right-bottom'] as const;

const BorderSvgContainer = styled.svg`
  position: absolute;
  display: block;

  &.right-top {
    right: 0px;
    transform: rotateY(180deg);
  }

  &.left-bottom {
    bottom: 0px;
    transform: rotateX(180deg);
  }

  &.right-bottom {
    right: 0px;
    bottom: 0px;
    transform: rotateX(180deg) rotateY(180deg);
  }
`('border-svg-container');

export type BorderBox10Props = BorderBoxCommonProps;

export const BorderBox10 = /*#__PURE__*/ withInstall(
  defineComponent({
    name: 'BorderBox10',

    props: createBorderBoxCommonProps(),

    setup(props, { slots }) {
      const { autoBindRef, domSize } = useResize();

      return () => {
        const { width, height } = domSize;
        const { backgroundColor, color } = props;
        const mergedColor = mergeColor(defaultColor, color);

        return (
          <BorderBoxContainer
            class={styled.getClassNameForBind('border-box-10')}
            ref={autoBindRef}
            style={{ boxShadow: `inset 0 0 25px 3px ${mergedColor[0]}` }}
          >
            <BorderSvgContainer width={width} height={height}>
              <polygon
                fill={backgroundColor}
                points={`
                  4, 0 ${width - 4}, 0 ${width}, 4 ${width}, ${height - 4} ${width - 4}, ${height}
                  4, ${height} 0, ${height - 4} 0, 4
                `}
              />
            </BorderSvgContainer>

            {border.map((item) => {
              return (
                <BorderSvgContainer width="150px" height="150px" key={item} class={item}>
                  <polygon
                    fill={mergedColor[1]}
                    points="40, 0 5, 0 0, 5 0, 16 3, 19 3, 7 7, 3 35, 3"
                  />
                </BorderSvgContainer>
              );
            })}

            <BorderBoxContent>
              <slot>{slots.default?.()}</slot>
            </BorderBoxContent>
          </BorderBoxContainer>
        );
      };
    },
  })
);
