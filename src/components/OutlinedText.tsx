import React from 'react';
import { View, Platform } from 'react-native';
import Svg, { Text as SvgText } from 'react-native-svg';

// Platform-specific default fonts
const getDefaultFontFamily = (): string => {
  if (Platform.OS === 'ios') {
    return 'System';
  } else if (Platform.OS === 'android') {
    return 'Roboto';
  }
  return 'Arial'; // Web fallback
};

// Helper function to create font fallback chain
const createFontFallback = (fontFamily?: string): string => {
  if (!fontFamily) {
    return getDefaultFontFamily();
  }
  
  // If user provides a font family, create a fallback chain
  const fallbacks = [];
  
  // Add the user's font family
  fallbacks.push(fontFamily);
  
  // Add platform-specific fallbacks
  if (Platform.OS === 'ios') {
    fallbacks.push('System', 'Helvetica Neue', 'Helvetica');
  } else if (Platform.OS === 'android') {
    fallbacks.push('Roboto', 'Noto Sans', 'sans-serif');
  } else {
    fallbacks.push('Arial', 'Helvetica', 'sans-serif');
  }
  
  return fallbacks.join(', ');
};

interface SvgTextOutlinedProps {
  text: string;
  width: number;
  height?: number;
  fontSize?: number;
  strokeColor?: string;
  strokeWidth?: number;
  fillColor?: string;
  shadowColor?: string;
  shadowOffsetX?: number;
  shadowOffsetY?: number;
  shadowOpacity?: number;
  shadowBlur?: number;
  x?: number;
  y?: number;
  textAnchor?: 'start' | 'middle' | 'end';
  fontFamily?: string; // Font family name. If not provided, uses platform-specific defaults with fallbacks
  letterSpacing?: number;
  textTransform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
  textDecoration?: 'none' | 'underline' | 'line-through';
  opacity?: number;
}

// Helper function to estimate text width
const estimateTextWidth = (text: string, fontSize: number): number => {
  // Rough estimation: each character is approximately 0.6 * fontSize wide
  // This is a simplified approach - for more accuracy, you'd need a proper text measurement library
  return text.length * fontSize * 0.6;
};

// Helper function to wrap text into lines
const wrapText = (
  text: string,
  maxWidth: number,
  fontSize: number
): string[] => {
  const words = text.split(' ');
  const lines: string[] = [];
  let currentLine = '';

  for (const word of words) {
    const testLine = currentLine ? `${currentLine} ${word}` : word;
    const testWidth = estimateTextWidth(testLine, fontSize);

    if (testWidth <= maxWidth) {
      currentLine = testLine;
    } else {
      if (currentLine) {
        lines.push(currentLine);
        currentLine = word;
      } else {
        // If a single word is too long, we have to break it
        lines.push(word);
      }
    }
  }

  if (currentLine) {
    lines.push(currentLine);
  }

  return lines;
};

// Helper function to generate blur layers
const generateBlurLayers = (
  shadowBlur: number
): Array<{ offsetX: number; offsetY: number; opacity: number }> => {
  if (shadowBlur <= 0) return [];

  const layers: Array<{ offsetX: number; offsetY: number; opacity: number }> =
    [];
  const maxLayers = Math.min(Math.floor(shadowBlur / 2), 8); // Limit to 8 layers for performance

  for (let i = 1; i <= maxLayers; i++) {
    const progress = i / maxLayers;
    const offset = (shadowBlur * progress) / 2;
    const opacity = (1 - progress) * 0.3; // Fade out as we go further

    // Create multiple offset positions around the main shadow
    const angles = [0, 45, 90, 135, 180, 225, 270, 315];
    angles.forEach(angle => {
      const rad = (angle * Math.PI) / 180;
      layers.push({
        offsetX: Math.cos(rad) * offset,
        offsetY: Math.sin(rad) * offset,
        opacity: opacity / angles.length,
      });
    });
  }

  return layers;
};

export function SvgTextOutlined({
  text,
  width,
  height,
  fontSize = 26,
  strokeColor = 'black',
  strokeWidth = 1,
  fillColor = 'white',
  shadowColor = '#000000',
  shadowOffsetX = 0,
  shadowOffsetY = 0,
  shadowOpacity = 1,
  shadowBlur = 0,
  x,
  y,
  textAnchor = 'middle',
  fontFamily,
  letterSpacing,
  textTransform = 'none',
  textDecoration = 'none',
  opacity = 1,
}: SvgTextOutlinedProps) {
  // Use font fallback chain for better reliability
  const finalFontFamily = createFontFallback(fontFamily);

  // Apply text transformations
  const processedText = (() => {
    let result = text;
    switch (textTransform) {
      case 'uppercase':
        result = text.toUpperCase();
        break;
      case 'lowercase':
        result = text.toLowerCase();
        break;
      case 'capitalize':
        result = text.replace(/\b\w/g, char => char.toUpperCase());
        break;
      default:
        result = text;
    }
    return result;
  })();

  // Wrap text into lines
  const lines = wrapText(processedText, width, fontSize);

  // Calculate total height needed for all lines
  const totalLineHeight = fontSize * 1.2;
  const totalHeight = lines.length * totalLineHeight;

  // Calculate center position if x and y are not provided
  const centerX = x ?? width / 2;
  const centerY = y ?? (height ? height / 2 : totalHeight / 2);

  // Calculate starting Y position to center all lines vertically
  // For SVG text, y represents the baseline, so we need to account for text that extends above it
  // Add a small offset to prevent text from being cut off at the top
  const startY =
    centerY - totalHeight / 2 + totalLineHeight / 2 + fontSize * 0.2;

  return (
    <View style={{ backgroundColor: 'transparent' }}>
      <Svg height={Math.max(height ?? 0, totalHeight)} width={width}>
        {lines.map((line, index) => {
          const lineY = startY + index * totalLineHeight;

          // Calculate the actual x position based on textAnchor
          const textX =
            textAnchor === 'start' ? 0 : textAnchor === 'end' ? width : centerX;

          // Common text properties
          const commonTextProps = {
            fontSize,
            x: textX,
            y: lineY,
            textAnchor,
            fontFamily: finalFontFamily,
            opacity,
            ...(letterSpacing && { letterSpacing }),
          };

          // Handle text decoration separately due to TypeScript constraints
          const textDecorationProps =
            textDecoration === 'underline' || textDecoration === 'line-through'
              ? { textDecoration }
              : {};

          // Generate blur layers
          const blurLayers = generateBlurLayers(shadowBlur);

          return (
            <React.Fragment key={index}>
              {/* Blur shadow layers */}
              {blurLayers.map((layer, layerIndex) => (
                <SvgText
                  key={`blur-${layerIndex}`}
                  {...commonTextProps}
                  {...textDecorationProps}
                  fill={shadowColor}
                  opacity={shadowOpacity * layer.opacity}
                  x={textX + shadowOffsetX + layer.offsetX}
                  y={lineY + shadowOffsetY + layer.offsetY}
                >
                  {line}
                </SvgText>
              ))}

              {/* Main shadow text - positioned with dynamic x and y offsets */}
              <SvgText
                {...commonTextProps}
                {...textDecorationProps}
                fill={shadowColor}
                opacity={shadowOpacity}
                x={textX + shadowOffsetX}
                y={lineY + shadowOffsetY}
              >
                {line}
              </SvgText>
              {/* Stroke text - creates the outline effect */}
              <SvgText
                {...commonTextProps}
                {...textDecorationProps}
                stroke={strokeColor}
                strokeWidth={strokeWidth * 2}
                fill="none"
              >
                {line}
              </SvgText>
              {/* Fill text - positioned on top */}
              <SvgText
                {...commonTextProps}
                {...textDecorationProps}
                fill={fillColor}
              >
                {line}
              </SvgText>
            </React.Fragment>
          );
        })}
      </Svg>
    </View>
  );
}

// Export types for external use
export type { SvgTextOutlinedProps };

// Keep the original interface for backward compatibility
export interface OutlinedTextProps extends SvgTextOutlinedProps {}

const OutlinedText = (props: OutlinedTextProps) => {
  return <SvgTextOutlined {...props} />;
};

export default OutlinedText;
