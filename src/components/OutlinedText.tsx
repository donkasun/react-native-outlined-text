import React from 'react';
import { View, ViewProps } from 'react-native';
import Svg, { Text as SvgText } from 'react-native-svg';

export interface OutlinedTextProps extends ViewProps {
  text: string;
  width: number;
  height: number;
  fontSize?: number;
  strokeColor?: string;
  strokeWidth?: number;
  fillColor?: string;
  shadowColor?: string;
  x?: number;
  y?: number;
  textAnchor?: 'start' | 'middle' | 'end';
  verticalOffset?: number;
  fontFamily?: string;
}

const OutlinedText: React.FC<OutlinedTextProps> = ({
  text,
  width,
  height,
  fontSize = 26,
  strokeColor = 'black',
  strokeWidth = 1,
  fillColor = 'white',
  shadowColor = '#000000',
  x,
  y,
  textAnchor = 'middle',
  verticalOffset = 0,
  fontFamily = 'Nunito-Regular',
  style,
  ...props
}) => {
  // Calculate center position if x and y are not provided
  const centerX = x ?? width / 2;
  const centerY = y ?? height / 2 + verticalOffset;

  return (
    <View style={[{ justifyContent: 'center', alignItems: 'center' }, style]} {...props}>
      <Svg height={height} width={width}>
        {/* Shadow text - positioned slightly offset */}
        <SvgText
          fill={shadowColor}
          fontSize={fontSize}
          x={centerX + 3}
          y={centerY + 3}
          textAnchor={textAnchor}
          fontFamily={fontFamily}
        >
          {text}
        </SvgText>
        {/* Stroke text - creates the outline effect */}
        <SvgText
          stroke={strokeColor}
          strokeWidth={strokeWidth * 2}
          fill="none"
          fontSize={fontSize}
          x={centerX}
          y={centerY}
          textAnchor={textAnchor}
          fontFamily={fontFamily}
        >
          {text}
        </SvgText>
        {/* Fill text - positioned on top */}
        <SvgText
          fill={fillColor}
          fontSize={fontSize}
          x={centerX}
          y={centerY}
          textAnchor={textAnchor}
          fontFamily={fontFamily}
        >
          {text}
        </SvgText>
      </Svg>
    </View>
  );
};

export default OutlinedText; 