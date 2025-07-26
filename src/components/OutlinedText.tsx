import React from "react";
import { View } from "react-native";
import Svg, { Text as SvgText } from "react-native-svg";

const typography = {
  fontFamily: {
    regular: 'Nunito-Regular',
    medium: 'Nunito-Medium',
    semiBold: 'Nunito-SemiBold',
    bold: 'Nunito-Bold',
  },
} as const;

interface SvgTextOutlinedProps {
  text: string;
  width: number;
  height?: number;
  fontSize?: number;
  strokeColor?: string;
  strokeWidth?: number;
  fillColor?: string;
  shadowColor?: string;
  x?: number;
  y?: number;
  textAnchor?: "start" | "middle" | "end";
  fontFamily?: keyof typeof typography.fontFamily;
  fontWeight?: keyof typeof typography.fontFamily;
  letterSpacing?: number;
  textTransform?: "none" | "uppercase" | "lowercase" | "capitalize";
  textDecoration?: "none" | "underline" | "line-through";
  opacity?: number;
}

// Helper function to estimate text width
const estimateTextWidth = (text: string, fontSize: number): number => {
  // Rough estimation: each character is approximately 0.6 * fontSize wide
  // This is a simplified approach - for more accuracy, you'd need a proper text measurement library
  return text.length * fontSize * 0.6;
};

// Helper function to wrap text into lines
const wrapText = (text: string, maxWidth: number, fontSize: number): string[] => {
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

export function SvgTextOutlined({
  text,
  width,
  height,
  fontSize = 26,
  strokeColor = "black",
  strokeWidth = 1,
  fillColor = "white",
  shadowColor = "#BFC1F9",
  x,
  y,
  textAnchor = "middle",
  fontFamily = "medium",
  fontWeight,
  letterSpacing,
  textTransform = "none",
  textDecoration = "none",
  opacity = 1,
}: SvgTextOutlinedProps) {
  // Determine final font family
  const finalFontFamily = fontWeight || fontFamily;
  const finalFontFamilyValue = typography.fontFamily[finalFontFamily];
  
  // Apply text transformations
  const processedText = (() => {
    let result = text;
    switch (textTransform) {
      case "uppercase":
        result = text.toUpperCase();
        break;
      case "lowercase":
        result = text.toLowerCase();
        break;
      case "capitalize":
        result = text.replace(/\b\w/g, (char) => char.toUpperCase());
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
  const startY = centerY - (totalHeight / 2) + (totalLineHeight / 2) + (fontSize * 0.2);

  return (
    <View style={{backgroundColor: "transparent"}}>
      <Svg height={Math.max(height ?? 0, totalHeight)} width={width}>
        {lines.map((line, index) => {
          const lineY = startY + (index * totalLineHeight);
          
          // Calculate the actual x position based on textAnchor
          const textX = textAnchor === "start" ? 0 : 
                       textAnchor === "end" ? width : 
                       centerX;
          
          // Common text properties
          const commonTextProps = {
            fontSize,
            x: textX,
            y: lineY,
            textAnchor,
            fontFamily: finalFontFamilyValue,
            opacity,
            ...(letterSpacing && { letterSpacing }),
          };
          
          // Handle text decoration separately due to TypeScript constraints
          const textDecorationProps = textDecoration === "underline" || textDecoration === "line-through" 
            ? { textDecoration } 
            : {};
          
          return (
            <React.Fragment key={index}>
              {/* Shadow text - positioned slightly offset */}
              <SvgText
                {...commonTextProps}
                {...textDecorationProps}
                fill={shadowColor}
                x={textX + 4}
                y={lineY + 4}
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

// Export the typography object for external use if needed
export { typography };

// Export types for external use
export type { SvgTextOutlinedProps };

// Keep the original interface for backward compatibility
export interface OutlinedTextProps extends SvgTextOutlinedProps {}

const OutlinedText: React.FC<OutlinedTextProps> = (props) => {
  return <SvgTextOutlined {...props} />;
};

export default OutlinedText; 