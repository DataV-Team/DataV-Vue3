import { defineComponent } from 'vue';

import { useResize } from '../../hooks/useResize';
import { createBorderBoxCommonProps, mergeColor } from '../../utils/borderBox';
import { withInstall } from '../../utils/common';
import { styled } from '../../utils/styled';
import { BorderBoxContainer, BorderBoxContent } from '../styled/borderBox';

import type { BorderBoxCommonProps } from '../../utils/borderBox';

const defaultColor = ['rgba(255, 255, 255, 0.35)', 'gray'];

const BorderSvgContainer = styled.svg`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;

  & > polyline {
    fill: none;
    stroke-width: 1;
  }
`('border-svg-container');

export type BorderBox6Props = BorderBoxCommonProps;

export const BorderBox6 = /*#__PURE__*/ withInstall(
  defineComponent({
    name: 'BorderBox6',

    props: createBorderBoxCommonProps(),

    setup(props, { slots, expose }) {
      const { autoBindRef, refreshLayoutSize, domSize } = useResize();

      expose({ refreshLayoutSize });

      return () => {
        const { color, backgroundColor } = props;
        const { width, height } = domSize;
        const mergedColor = mergeColor(defaultColor, color);

        return (
          <BorderBoxContainer class={styled.getClassNameForBind('border-box-6')} ref={autoBindRef}>
            <BorderSvgContainer width={width} height={height}>
              <polygon
                fill={backgroundColor}
                points={`
              9, 7 ${width - 9}, 7 ${width - 9}, ${height - 7} 9, ${height - 7}`}
              />

              <circle fill={mergedColor[1]} cx="5" cy="5" r="2" />
              <circle fill={mergedColor[1]} cx={width - 5} cy="5" r="2" />
              <circle fill={mergedColor[1]} cx={width - 5} cy={height - 5} r="2" />
              <circle fill={mergedColor[1]} cx="5" cy={height - 5} r="2" />
              <polyline stroke={mergedColor[0]} points={`10, 4 ${width - 10}, 4`} />
              <polyline
                stroke={mergedColor[0]}
                points={`10, ${height - 4} ${width - 10}, ${height - 4}`}
              />
              <polyline stroke={mergedColor[0]} points={`5, 70 5, ${height - 70}`} />
              <polyline
                stroke={mergedColor[0]}
                points={`${width - 5}, 70 ${width - 5}, ${height - 70}`}
              />
              <polyline stroke={mergedColor[0]} points={`3, 10, 3, 50`} />
              <polyline stroke={mergedColor[0]} points={`7, 30 7, 80`} />
              <polyline stroke={mergedColor[0]} points={`${width - 3}, 10 ${width - 3}, 50`} />
              <polyline stroke={mergedColor[0]} points={`${width - 7}, 30 ${width - 7}, 80`} />
              <polyline stroke={mergedColor[0]} points={`3, ${height - 10} 3, ${height - 50}`} />
              <polyline stroke={mergedColor[0]} points={`7, ${height - 30} 7, ${height - 80}`} />
              <polyline
                stroke={mergedColor[0]}
                points={`${width - 3}, ${height - 10} ${width - 3}, ${height - 50}`}
              />
              <polyline
                stroke={mergedColor[0]}
                points={`${width - 7}, ${height - 30} ${width - 7}, ${height - 80}`}
              />
            </BorderSvgContainer>

            <BorderBoxContent>{slots.default?.()}</BorderBoxContent>
          </BorderBoxContainer>
        );
      };
    },
  })
);
