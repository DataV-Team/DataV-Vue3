import { defineComponent } from 'vue';

import { withInstall } from '../../utils/common';
import { styled } from '../../utils/styled';

const LoadingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .loading-tip {
    font-size: 15px;
  }
`('loading');

export const Loading = /*#__PURE__*/ withInstall(
  defineComponent({
    name: 'Loading',

    setup(_, { slots }) {
      return () => {
        return (
          <LoadingContainer>
            <svg width="50px" height="50px">
              <circle
                cx="25"
                cy="25"
                r="20"
                fill="transparent"
                stroke-width="3"
                stroke-dasharray="31.415, 31.415"
                stroke="#02bcfe"
                stroke-linecap="round"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  values="0, 25 25;360, 25 25"
                  dur="1.5s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="stroke"
                  values="#02bcfe;#3be6cb;#02bcfe"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </circle>

              <circle
                cx="25"
                cy="25"
                r="10"
                fill="transparent"
                stroke-width="3"
                stroke-dasharray="15.7, 15.7"
                stroke="#3be6cb"
                stroke-linecap="round"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  values="360, 25 25;0, 25 25"
                  dur="1.5s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="stroke"
                  values="#3be6cb;#02bcfe;#3be6cb"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </circle>
            </svg>

            <div class="loading-tip">{slots.default?.()}</div>
          </LoadingContainer>
        );
      };
    },
  })
);
