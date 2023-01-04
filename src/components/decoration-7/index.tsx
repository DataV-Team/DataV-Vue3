import { defineComponent } from 'vue';

import { useResize } from '../../hooks/useResize';
import { withInstall, mergeColor } from '../../utils/common';
import { createColorProps } from '../../utils/decoration';
import { styled } from '../../utils/styled';

const DecorationContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`('decoration-7');

const defaultColor = ['#1dc1f5', '#1dc1f5'];

export type Decoration7Props = ReturnType<typeof createColorProps>;

export const Decoration7 = /*#__PURE__*/ withInstall(
  defineComponent({
    name: 'Decoration7',

    props: createColorProps(),

    setup(props, { slots, expose }) {
      const { autoBindRef, refreshLayoutSize } = useResize();

      expose({ refreshLayoutSize });

      return () => {
        const { color } = props;
        const mergedColor = mergeColor(defaultColor, color);

        return (
          <DecorationContainer ref={autoBindRef}>
            <svg width="21px" height="20px">
              <polyline
                stroke-width="4"
                fill="transparent"
                stroke={mergedColor[0]}
                points="10, 0 19, 10 10, 20"
              />
              <polyline
                stroke-width="2"
                fill="transparent"
                stroke={mergedColor[1]}
                points="2, 0 11, 10 2, 20"
              />
            </svg>
            {slots.default?.()}
            <svg width="21px" height="20px">
              <polyline
                stroke-width="4"
                fill="transparent"
                stroke={mergedColor[0]}
                points="11, 0 2, 10 11, 20"
              />
              <polyline
                stroke-width="2"
                fill="transparent"
                stroke={mergedColor[1]}
                points="19, 0 10, 10 19, 20"
              />
            </svg>
          </DecorationContainer>
        );
      };
    },
  })
);
