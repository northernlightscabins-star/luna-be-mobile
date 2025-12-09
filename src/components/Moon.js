import React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';
import { useWindowDimensions } from 'react-native';

export default function Moon({ illumination }) {
  const { width } = useWindowDimensions();
  const r = width * 0.35;
  const k = 2 * r * (1 - illumination);
  const d = `M ${r} 0 A ${r} ${r} 0 1 1 ${r} ${2 * r} A ${k} ${r} 0 1 1 ${r} 0`;
  return (
    <Svg width={r * 2} height={r * 2}>
      <Circle cx={r} cy={r} r={r} fill="#111" />
      <Path d={d} fill="#eee" />
    </Svg>
  );
}
