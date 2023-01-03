import { fade } from '@jiaminghi/color';
import { defineComponent } from 'vue';

import { useResize } from '../../hooks/useResize';
import { withInstall, mergeColor } from '../../utils/common';
import { createColorProps } from '../../utils/decoration';
import { styled } from '../../utils/styled';

const DecorationContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
`('decoration-11');

const DecorationContentContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`('decoration-content');

const defaultColor = ['#1a98fc', '#2cf7fe'];

export type Decoration11Props = ReturnType<typeof createColorProps>;

export const Decoration11 = /*#__PURE__*/ withInstall(
  defineComponent({
    name: 'Decoration11',

    props: createColorProps(),

    setup(props, { slots }) {
      const { autoBindRef, domSize } = useResize();

      return () => {
        const { width, height } = domSize;

        const { color } = props;

        const mergedColor = mergeColor(defaultColor, color);

        return (
          <DecorationContainer ref={autoBindRef}>
            <svg width={width} height={height}>
              <polygon
                fill={fade(mergedColor[1] || defaultColor[1], 10)}
                stroke={mergedColor[1]}
                points="20 10, 25 4, 55 4 60 10"
              />

              <polygon
                fill={fade(mergedColor[1] || defaultColor[1], 10)}
                stroke={mergedColor[1]}
                points={`20 ${height - 10}, 25 ${height - 4}, 55 ${height - 4} 60 ${height - 10}`}
              />

              <polygon
                fill={fade(mergedColor[1] || defaultColor[1], 10)}
                stroke={mergedColor[1]}
                points={`${width - 20} 10, ${width - 25} 4, ${width - 55} 4 ${width - 60} 10`}
              />

              <polygon
                fill={fade(mergedColor[1] || defaultColor[1], 10)}
                stroke={mergedColor[1]}
                points={`${width - 20} ${height - 10}, ${width - 25} ${height - 4}, ${width - 55} ${
                  height - 4
                } ${width - 60} ${height - 10}`}
              />

              <polygon
                fill={fade(mergedColor[0] || defaultColor[0], 20)}
                stroke={mergedColor[0]}
                points={`
        20 10, 5 ${height / 2} 20 ${height - 10}
        ${width - 20} ${height - 10} ${width - 5} ${height / 2} ${width - 20} 10
      `}
              />

              <polyline
                fill="transparent"
                stroke={fade(mergedColor[0] || defaultColor[0], 70)}
                points={`25 18, 15 ${height / 2} 25 ${height - 18}`}
              />

              <polyline
                fill="transparent"
                stroke={fade(mergedColor[0] || defaultColor[0], 70)}
                points={`${width - 25} 18, ${width - 15} ${height / 2} ${width - 25} ${
                  height - 18
                }`}
              />
            </svg>

            <DecorationContentContainer>{slots.default?.()}</DecorationContentContainer>
          </DecorationContainer>
        );
      };
    },
  })
);
