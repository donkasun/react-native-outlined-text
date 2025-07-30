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

// Font weight mapping for better cross-platform support
const fontWeights = {
  thin: '100',
  '100': '100',
  light: '200',
  '200': '200',
  '300': '300',
  normal: '400',
  '400': '400',
  medium: '500',
  '500': '500',
  '600': '600',
  semibold: '600',
  bold: '700',
  '700': '700',
  '800': '800',
  heavy: '800',
  '900': '900',
  black: '900',
} as const;

// Font style options
const fontStyles = {
  normal: 'normal',
  italic: 'italic',
} as const;

// Helper function to validate font family
const validateFontFamily = (fontFamily?: string): boolean => {
  if (!fontFamily) return false;

  // Basic validation - check if it's a non-empty string
  if (typeof fontFamily !== 'string' || fontFamily.trim() === '') {
    return false;
  }

  // Check for common invalid font names
  const invalidNames = ['undefined', 'null', 'System', 'Default'];
  if (invalidNames.includes(fontFamily.trim())) {
    return false;
  }

  return true;
};

// Helper function to create font fallback chain
const createFontFallback = (fontFamily?: string): string => {
  if (!fontFamily || !validateFontFamily(fontFamily)) {
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
  fontWeight?: keyof typeof fontWeights | string; // Font weight (100-900, 'normal', 'bold', etc.)
  fontStyle?: keyof typeof fontStyles; // Font style ('normal', 'italic')
  letterSpacing?: number;
  textTransform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
  textDecoration?: 'none' | 'underline' | 'line-through';
  opacity?: number;
}

// Helper function to estimate text width with better accuracy
const estimateTextWidth = (
  text: string,
  fontSize: number,
  fontFamily?: string,
  fontWeight?: string,
  fontStyle?: string
): number => {
  // More accurate estimation based on font characteristics
  let charWidth = 0.6; // Default character width ratio

  // Adjust based on font weight
  if (fontWeight) {
    const weight = parseInt(fontWeight);
    if (weight >= 700) {
      charWidth = 0.65; // Bold fonts are wider
    } else if (weight <= 300) {
      charWidth = 0.55; // Light fonts are narrower
    }
  }

  // Adjust based on font style
  if (fontStyle === 'italic') {
    charWidth *= 1.05; // Italic fonts are slightly wider
  }

  // Adjust based on font family characteristics
  if (fontFamily) {
    const family = fontFamily.toLowerCase();
    if (family.includes('mono') || family.includes('courier')) {
      charWidth = 0.7; // Monospace fonts have consistent width
    } else if (family.includes('condensed') || family.includes('narrow')) {
      charWidth *= 0.85; // Condensed fonts are narrower
    } else if (family.includes('wide') || family.includes('extended')) {
      charWidth *= 1.15; // Wide fonts are broader
    }
  }

  // Calculate total width
  const baseWidth = text.length * fontSize * charWidth;

  // Add extra space for word spacing
  const wordCount = text.split(' ').length - 1;
  const wordSpacing = wordCount * fontSize * 0.1;

  return baseWidth + wordSpacing;
};

// Helper function to wrap text into lines
const wrapText = (
  text: string,
  maxWidth: number,
  fontSize: number,
  fontFamily?: string,
  fontWeight?: string,
  fontStyle?: string
): string[] => {
  const words = text.split(' ');
  const lines: string[] = [];
  let currentLine = '';

  for (const word of words) {
    const testLine = currentLine ? `${currentLine} ${word}` : word;
    const testWidth = estimateTextWidth(
      testLine,
      fontSize,
      fontFamily,
      fontWeight,
      fontStyle
    );

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
  fontSize = 16,
  strokeColor = '#000000',
  strokeWidth = 1,
  fillColor = '#FFFFFF',
  shadowColor = '#000000',
  shadowOffsetX = 0,
  shadowOffsetY = 0,
  shadowOpacity = 1,
  shadowBlur = 0,
  x,
  y,
  textAnchor = 'middle',
  fontFamily,
  fontWeight,
  fontStyle,
  letterSpacing,
  textTransform = 'none',
  textDecoration = 'none',
  opacity = 1,
}: SvgTextOutlinedProps) {
  // Use font fallback chain for better reliability
  const finalFontFamily = createFontFallback(fontFamily);

  // Process font weight
  const finalFontWeight = fontWeight
    ? fontWeights[fontWeight as keyof typeof fontWeights] || fontWeight
    : undefined;

  // Process font style
  const finalFontStyle = fontStyle || 'normal';

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
  const lines = wrapText(
    processedText,
    width,
    fontSize,
    finalFontFamily,
    finalFontWeight,
    finalFontStyle
  );

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
            fontWeight: finalFontWeight,
            fontStyle: finalFontStyle,
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

// Export font utilities for external use
export { fontWeights, fontStyles };

// Export types for external use
export type { SvgTextOutlinedProps };

// Keep the original interface for backward compatibility
export interface OutlinedTextProps extends SvgTextOutlinedProps {}

const OutlinedText = (props: OutlinedTextProps) => {
  return <SvgTextOutlined {...props} />;
};

export default OutlinedText;
