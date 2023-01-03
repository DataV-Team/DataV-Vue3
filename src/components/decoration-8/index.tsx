import { defineComponent } from 'vue';

import { useResize } from '../../hooks/useResize';
import { withInstall, mergeColor } from '../../utils/common';
import { createReverseProps, createColorProps } from '../../utils/decoration';
import { styled } from '../../utils/styled';

const defaultColor = ['#3f96a5', '#3f96a5'];

function createDecoration8Props() {
  return {
    ...createColorProps(),
    ...createReverseProps(),
  };
}

const DecorationContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`('decoration-8');

export type Decoration8Props = ReturnType<typeof createDecoration8Props>;

export const Decoration8 = /*#__PURE__*/ withInstall(
  defineComponent({
    name: 'Decoration8',

    props: createDecoration8Props(),

    setup(props) {
      const { autoBindRef, domSize } = useResize();
      return () => {
        const { color, reverse } = props;
        const { width, height } = domSize;

        const xPos = (pos: number) => {
          if (!reverse) return pos;

          return width - pos;
        };

        const mergedColor = mergeColor(defaultColor, color);

        return (
          <DecorationContainer ref={autoBindRef}>
            <svg width={width} height={height}>
              <polyline
                stroke={mergedColor[0]}
                stroke-width="2"
                fill="transparent"
                points={`${xPos(0)}, 0 ${xPos(30)}, ${height / 2}`}
              />

              <polyline
                stroke={mergedColor[0]}
                stroke-width="2"
                fill="transparent"
                points={`${xPos(20)}, 0 ${xPos(50)}, ${height / 2} ${xPos(width)}, ${height / 2}`}
              />

              <polyline
                stroke={mergedColor[1]}
                fill="transparent"
                stroke-width="3"
                points={`${xPos(0)}, ${height - 3}, ${xPos(200)}, ${height - 3}`}
              />
            </svg>
          </DecorationContainer>
        );
      };
    },
  })
);
