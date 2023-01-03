import { fade } from '@jiaminghi/color';
import { defineComponent } from 'vue';

import { useResize } from '../../hooks/useResize';
import { useUuid } from '../../hooks/useUuid';
import { withInstall, mergeColor } from '../../utils/common';
import { createColorProps } from '../../utils/decoration';
import { styled } from '../../utils/styled';

const DecorationContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
`('decoration-12');

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

const defaultColor = ['#2783ce', '#2cf7fe'];

const segment = 30;
const sectorAngle = Math.PI / 3;
const ringNum = 3;
const ringWidth = 1;

const calcPathColor = (color, segment) => {
  const colorGap = 100 / (segment - 1);

  return new Array(segment).fill(color).map((_, i) => fade(color, 100 - i * colorGap));
};

function createDecoration12Props() {
  return {
    ...createColorProps(),
    scanDuration: {
      type: Number,
      default: 3,
    },
    haloDuration: {
      type: Number,
      default: 2,
    },
  };
}

const getCircleRadianPoint = (x, y, radius, radian) => {
  return [x + Math.cos(radian) * radius, y + Math.sin(radian) * radius];
};

const calcPathD = ({
  x,
  y,
  width,
  segment,
  sectorAngle,
}: {
  x: number;
  y: number;
  width: number;
  segment: number;
  sectorAngle: number;
}) => {
  const startAngle = -Math.PI / 2;
  const angleGap = sectorAngle / segment;
  const r = width / 4;
  let lastEndPoints = getCircleRadianPoint(x, y, r, startAngle);

  return new Array(segment).fill('').map((_, i) => {
    const endPoints = getCircleRadianPoint(x, y, r, startAngle - (i + 1) * angleGap).map((_) =>
      _.toFixed(5)
    );
    const d = `M${lastEndPoints.join(',')} A${r}, ${r} 0 0 0 ${endPoints.join(',')}`;
    lastEndPoints = endPoints;

    return d;
  });
};

const calcCircleR = ({
  ringNum,
  width,
  ringWidth,
}: {
  ringNum: number;
  width: number;
  ringWidth: number;
}) => {
  const radiusGap = (width / 2 - ringWidth / 2) / ringNum;

  return new Array(ringNum).fill(0).map((_, i) => radiusGap * (i + 1));
};

const calcSplitLinePoints = ({ x, y, width }: { x: number; y: number; width: number }) => {
  const angleGap = Math.PI / 6;
  const r = width / 2;

  return new Array(6).fill('').map((_, i) => {
    const startAngle = angleGap * (i + 1);
    const endAngle = startAngle + Math.PI;
    const startPoint = getCircleRadianPoint(x, y, r, startAngle);
    const endPoint = getCircleRadianPoint(x, y, r, endAngle);

    return `${startPoint.join(',')} ${endPoint.join(',')}`;
  });
};

const calcArcD = ({ x, y, width }: { x: number; y: number; width: number }) => {
  const angleGap = Math.PI / 6;
  const r = width / 2 - 1;

  return new Array(4).fill('').map((_, i) => {
    const startAngle = angleGap * (3 * i + 1);
    const endAngle = startAngle + angleGap;
    const startPoint = getCircleRadianPoint(x, y, r, startAngle);
    const endPoint = getCircleRadianPoint(x, y, r, endAngle);

    return `M${startPoint.join(',')} A${x}, ${y} 0 0 1 ${endPoint.join(',')}`;
  });
};

export type Decoration12Props = ReturnType<typeof createDecoration12Props>;

export const Decoration12 = /*#__PURE__*/ withInstall(
  defineComponent({
    name: 'Decoration12',

    props: createDecoration12Props(),

    setup(props, { slots }) {
      const { autoBindRef, domSize } = useResize();

      const uuid = useUuid();

      return () => {
        const { width, height } = domSize;

        const centerX = width / 2;
        const centerY = height / 2;

        const { color, scanDuration, haloDuration } = props;

        const gId = `decoration-12-g-${uuid.id}`;
        const gradientId = `decoration-12-gradient-${uuid.id}`;

        const mergedColor = mergeColor(defaultColor, color);

        const pathColor = calcPathColor(mergedColor[0], segment);

        const pathD = calcPathD({ x: centerX, y: centerY, width, segment, sectorAngle });

        const circleR = calcCircleR({ ringNum, ringWidth, width });

        const splitLinePoints = calcSplitLinePoints({ x: centerX, y: centerY, width });

        const arcD = calcArcD({ x: centerX, y: centerY, width });

        return (
          <DecorationContainer ref={autoBindRef}>
            <svg width={width} height={height}>
              <defs>
                <g id={gId}>
                  {pathD.map((d, k) => (
                    <path
                      stroke={pathColor[k]}
                      stroke-width={width / 2}
                      fill="transparent"
                      key={d}
                      d={d}
                    />
                  ))}
                </g>

                <radialGradient id={gradientId} cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stop-color="transparent" stop-opacity="1" />
                  <stop
                    offset="100%"
                    stop-color={fade(mergedColor[1] || defaultColor[1], 30)}
                    stop-opacity="1"
                  />
                </radialGradient>
              </defs>

              {circleR.map((r) => (
                <circle
                  r={r}
                  cx={centerX}
                  cy={centerY}
                  stroke={mergedColor[1]}
                  stroke-width="0.5"
                  fill="transparent"
                />
              ))}

              <circle
                r="1"
                cx={centerX}
                cy={centerY}
                stroke="transparent"
                fill={`url(#${gradientId})`}
              >
                <animate
                  attributeName="r"
                  values={`1;${width / 2}`}
                  dur={`${haloDuration}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="1;0"
                  dur={`${haloDuration}s`}
                  repeatCount="indefinite"
                />
              </circle>

              <circle r="2" cx={centerX} cy={centerY} fill={mergedColor[1]} />

              <g>
                {splitLinePoints.map((p) => (
                  <polyline
                    key={p}
                    points={p}
                    stroke={mergedColor[1]}
                    stroke-width="0.5"
                    opacity="0.5"
                  />
                ))}
              </g>

              {arcD.map((d) => (
                <path key={d} d={d} stroke={mergedColor[1]} stroke-width="2" fill="transparent" />
              ))}

              <use xlinkHref={`#${gId}`}>
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  values={`0, ${centerX} ${centerY};360, ${centerX} ${centerY}`}
                  dur={`${scanDuration}s`}
                  repeatCount="indefinite"
                />
              </use>
            </svg>

            <DecorationContentContainer>{slots.default?.()}</DecorationContentContainer>
          </DecorationContainer>
        );
      };
    },
  })
);
