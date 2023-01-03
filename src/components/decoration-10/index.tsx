import { defineComponent } from 'vue';

import { useResize } from '../../hooks/useResize';
import { useUuid } from '../../hooks/useUuid';
import { withInstall, mergeColor } from '../../utils/common';
import { createColorProps } from '../../utils/decoration';
import { styled } from '../../utils/styled';

const DecorationContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`('decoration-10');

const defaultColor = ['#00c2ff', 'rgba(0, 194, 255, 0.3)'];

export type Decoration10Props = ReturnType<typeof createColorProps>;

export const Decoration10 = /*#__PURE__*/ withInstall(
  defineComponent({
    name: 'Decoration10',

    props: createColorProps(),

    setup(props) {
      const { autoBindRef, domSize } = useResize();

      const uuid = useUuid();

      const animationId1 = `d10ani${uuid.id}1`;
      const animationId2 = `d10ani${uuid.id}2`;
      const animationId3 = `d10ani${uuid.id}3`;
      const animationId4 = `d10ani${uuid.id}4`;
      const animationId5 = `d10ani${uuid.id}5`;
      const animationId6 = `d10ani${uuid.id}6`;
      const animationId7 = `d10ani${uuid.id}7`;

      return () => {
        const { width, height } = domSize;

        const { color } = props;

        const mergedColor = mergeColor(defaultColor, color);

        return (
          <DecorationContainer ref={autoBindRef}>
            <svg width={width} height={height}>
              <polyline
                stroke={mergedColor[1]}
                stroke-width="2"
                points={`0, ${height / 2} ${width}, ${height / 2}`}
              />

              <polyline
                stroke={mergedColor[0]}
                stroke-width="2"
                points={`5, ${height / 2} ${width * 0.2 - 3}, ${height / 2}`}
                stroke-dasharray={`0, ${width * 0.2}`}
                fill="freeze"
              >
                <animate
                  id={animationId2}
                  attributeName="stroke-dasharray"
                  values={`0, ${width * 0.2};${width * 0.2}, 0;`}
                  dur="3s"
                  begin={`${animationId1}.end`}
                  fill="freeze"
                />
                <animate
                  attributeName="stroke-dasharray"
                  values={`${width * 0.2}, 0;0, ${width * 0.2}`}
                  dur="0.01s"
                  begin={`${animationId7}.end`}
                  fill="freeze"
                />
              </polyline>

              <polyline
                stroke={mergedColor[0]}
                stroke-width="2"
                points={`${width * 0.2 + 3}, ${height / 2} ${width * 0.8 - 3}, ${height / 2}`}
                stroke-dasharray={`0, ${width * 0.6}`}
              >
                <animate
                  id={animationId4}
                  attributeName="stroke-dasharray"
                  values={`0, ${width * 0.6};${width * 0.6}, 0`}
                  dur="3s"
                  begin={`${animationId3}.end + 1s`}
                  fill="freeze"
                />
                <animate
                  attributeName="stroke-dasharray"
                  values={`${width * 0.6}, 0;0, ${width * 0.6}`}
                  dur="0.01s"
                  begin={`${animationId7}.end`}
                  fill="freeze"
                />
              </polyline>

              <polyline
                stroke={mergedColor[0]}
                stroke-width="2"
                points={`${width * 0.8 + 3}, ${height / 2} ${width - 5}, ${height / 2}`}
                stroke-dasharray={`0, ${width * 0.2}`}
              >
                <animate
                  id={animationId6}
                  attributeName="stroke-dasharray"
                  values={`0, ${width * 0.2};${width * 0.2}, 0`}
                  dur="3s"
                  begin={`${animationId5}.end + 1s`}
                  fill="freeze"
                />
                <animate
                  attributeName="stroke-dasharray"
                  values={`${width * 0.2}, 0;0, ${width * 0.3}`}
                  dur="0.01s"
                  begin={`${animationId7}.end`}
                  fill="freeze"
                />
              </polyline>

              <circle cx="2" cy={height / 2} r="2" fill={mergedColor[1]}>
                <animate
                  id={animationId1}
                  attributeName="fill"
                  values={`${mergedColor[1]};${mergedColor[0]}`}
                  begin={`0s;${animationId7}.end`}
                  dur="0.3s"
                  fill="freeze"
                />
              </circle>

              <circle cx={width * 0.2} cy={height / 2} r="2" fill={mergedColor[1]}>
                <animate
                  id={animationId3}
                  attributeName="fill"
                  values={`${mergedColor[1]};${mergedColor[0]}`}
                  begin={`${animationId2}.end`}
                  dur="0.3s"
                  fill="freeze"
                />
                <animate
                  attributeName="fill"
                  values={`${mergedColor[1]};${mergedColor[1]}`}
                  dur="0.01s"
                  begin={`${animationId7}.end`}
                  fill="freeze"
                />
              </circle>

              <circle cx={width * 0.8} cy={height / 2} r="2" fill={mergedColor[1]}>
                <animate
                  id={animationId5}
                  attributeName="fill"
                  values={`${mergedColor[1]};${mergedColor[0]}`}
                  begin={`${animationId4}.end`}
                  dur="0.3s"
                  fill="freeze"
                />
                <animate
                  attributeName="fill"
                  values={`${mergedColor[1]};${mergedColor[1]}`}
                  dur="0.01s"
                  begin={`${animationId7}.end`}
                  fill="freeze"
                />
              </circle>

              <circle cx={width - 2} cy={height / 2} r="2" fill={mergedColor[1]}>
                <animate
                  id={animationId7}
                  attributeName="fill"
                  values={`${mergedColor[1]};${mergedColor[0]}`}
                  begin={`${animationId6}.end`}
                  dur="0.3s"
                  fill="freeze"
                />
                <animate
                  attributeName="fill"
                  values={`${mergedColor[1]};${mergedColor[1]}`}
                  dur="0.01s"
                  begin={`${animationId7}.end`}
                  fill="freeze"
                />
              </circle>
            </svg>
          </DecorationContainer>
        );
      };
    },
  })
);
