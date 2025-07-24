import React from 'react';
import { Text, TextProps, StyleSheet } from 'react-native';

export interface OutlinedTextProps extends TextProps {
  strokeWidth?: number;
  strokeColor?: string;
  children: React.ReactNode;
}

const OutlinedText: React.FC<OutlinedTextProps> = ({
  strokeWidth = 2,
  strokeColor = '#000',
  style,
  children,
  ...props
}) => {
  const textStyle = StyleSheet.flatten(style);
  
  // Create stroke effect using text shadow
  const strokeStyle = {
    textShadowColor: strokeColor,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 0,
    // Create multiple shadows to simulate stroke
    ...Array.from({ length: strokeWidth * 2 }, (_, i) => ({
      [`textShadow${i + 1}`]: `${strokeColor} ${Math.cos(i * Math.PI / (strokeWidth * 2)) * strokeWidth}px ${Math.sin(i * Math.PI / (strokeWidth * 2)) * strokeWidth}px 0px`
    })).reduce((acc, shadow) => ({ ...acc, ...shadow }), {})
  };

  return (
    <Text
      style={[textStyle, strokeStyle]}
      {...props}
    >
      {children}
    </Text>
  );
};

export default OutlinedText; 