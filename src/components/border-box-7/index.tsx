import { defineComponent } from 'vue';

import { useResize } from '../../hooks/useResize';
import { createBorderBoxCommonProps, mergeColor } from '../../utils/borderBox';
import { withInstall } from '../../utils/common';
import { styled } from '../../utils/styled';
import { BorderBoxContainer, BorderBoxContent } from '../styled/borderBox';

import type { BorderBoxCommonProps } from '../../utils/borderBox';

const defaultColor = ['rgba(128,128,128,0.3)', 'rgba(128,128,128,0.5)'];

const BorderSvgContainer = styled.svg`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;

  & > polyline {
    fill: none;
    stroke-linecap: round;
  }

  .stroke-width2 {
    stroke-width: 2px;
  }

  .stroke-width5 {
    stroke-width: 5px;
  }
`('border-svg-container');

export type BorderBox7Props = BorderBoxCommonProps;

export const BorderBox7 = /*#__PURE__*/ withInstall(
  defineComponent({
    name: 'BorderBox7',

    props: createBorderBoxCommonProps(),

    setup(props, { slots }) {
      const { autoBindRef, domSize } = useResize();

      return () => {
        const { color, backgroundColor } = props;
        const { width, height } = domSize;
        const mergedColor = mergeColor(defaultColor, color);

        return (
          <BorderBoxContainer
            class={styled.getClassNameForBind('border-box-7')}
            ref={autoBindRef}
            style={{
              boxShadow: `inset 0 0 40px ${mergedColor[0]}`,
              border: `1px solid ${mergedColor[0]}`,
              backgroundColor: backgroundColor,
            }}
          >
            <BorderSvgContainer width={width} height={height}>
              <polyline class="stroke-width2" stroke={mergedColor[0]} points={`0, 25 0, 0 25, 0`} />
              <polyline
                class="stroke-width2"
                stroke={mergedColor[0]}
                points={`${width - 25}, 0 ${width}, 0 ${width}, 25`}
              />
              <polyline
                class="stroke-width2"
                stroke={mergedColor[0]}
                points={`${width - 25}, ${height} ${width}, ${height} ${width}, ${height - 25}`}
              />
              <polyline
                class="stroke-width2"
                stroke={mergedColor[0]}
                points={`0, ${height - 25} 0, ${height} 25, ${height}`}
              />
              <polyline class="stroke-width5" stroke={mergedColor[1]} points={`0, 10 0, 0 10, 0`} />
              <polyline
                class="stroke-width5"
                stroke={mergedColor[1]}
                points={`${width - 10}, 0 ${width}, 0 ${width}, 10`}
              />
              <polyline
                class="stroke-width5"
                stroke={mergedColor[1]}
                points={`${width - 10}, ${height} ${width}, ${height} ${width}, ${height - 10}`}
              />
              <polyline
                class="stroke-width5"
                stroke={mergedColor[1]}
                points={`0, ${height - 10} 0, ${height} 10, ${height}`}
              />
            </BorderSvgContainer>

            <BorderBoxContent>{slots.default?.()}</BorderBoxContent>
          </BorderBoxContainer>
        );
      };
    },
  })
);
