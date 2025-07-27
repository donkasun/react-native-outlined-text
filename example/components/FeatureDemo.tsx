import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import OutlinedText, { SvgTextOutlined } from '../../src/components/OutlinedText';

interface FeatureDemoProps {
  title: string;
  description: string;
  children: React.ReactNode;
  codeExample?: string;
}

const FeatureDemo: React.FC<FeatureDemoProps> = ({
  title,
  description,
  children,
  codeExample,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      
      <View style={styles.demoContainer}>
        {children}
      </View>
      
      {codeExample && (
        <View style={styles.codeContainer}>
          <Text style={styles.codeLabel}>Code Example:</Text>
          <Text style={styles.codeText}>{codeExample}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    marginVertical: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2d3436',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#636e72',
    marginBottom: 16,
    lineHeight: 20,
  },
  demoContainer: {
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 100,
    marginBottom: 16,
  },
  codeContainer: {
    backgroundColor: '#2d3436',
    borderRadius: 8,
    padding: 16,
  },
  codeLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#74b9ff',
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  codeText: {
    fontSize: 12,
    color: '#ffffff',
    fontFamily: 'monospace',
    lineHeight: 18,
  },
});

export default FeatureDemo;

// Pre-built demo components for common use cases
export const BasicDemo = () => (
  <FeatureDemo
    title="Basic Outlined Text"
    description="Simple outlined text with default styling"
    codeExample={`<OutlinedText
  text="Hello World"
  width={200}
  fontSize={24}
/>`}
  >
    <OutlinedText
      text="Hello World"
      width={200}
      fontSize={24}
      strokeColor="#000000"
      fillColor="#ffffff"
    />
  </FeatureDemo>
);

export const ShadowDemo = () => (
  <FeatureDemo
    title="Shadow Effects"
    description="Text with custom shadow offset and opacity"
    codeExample={`<OutlinedText
  text="Shadow Text"
  width={200}
  shadowColor="#ff6b6b"
  shadowOffsetX={3}
  shadowOffsetY={3}
  shadowOpacity={0.8}
/>`}
  >
    <OutlinedText
      text="Shadow Text"
      width={200}
      fontSize={24}
      shadowColor="#ff6b6b"
      shadowOffsetX={3}
      shadowOffsetY={3}
      shadowOpacity={0.8}
    />
  </FeatureDemo>
);

export const BlurDemo = () => (
  <FeatureDemo
    title="Blur Shadow"
    description="Advanced shadow with blur effect"
    codeExample={`<OutlinedText
  text="Blur Shadow"
  width={200}
  shadowColor="#6c5ce7"
  shadowBlur={6}
  shadowOffsetX={2}
  shadowOffsetY={2}
/>`}
  >
    <OutlinedText
      text="Blur Shadow"
      width={200}
      fontSize={24}
      shadowColor="#6c5ce7"
      shadowBlur={6}
      shadowOffsetX={2}
      shadowOffsetY={2}
    />
  </FeatureDemo>
);

export const WrappingDemo = () => (
  <FeatureDemo
    title="Text Wrapping"
    description="Automatic text wrapping for long content"
    codeExample={`<OutlinedText
  text="This is a long text that will wrap..."
  width={150}
  fontSize={16}
/>`}
  >
    <OutlinedText
      text="This is a long text that will wrap to multiple lines automatically when it exceeds the specified width"
      width={150}
      fontSize={16}
      strokeColor="#2d3436"
      fillColor="#74b9ff"
    />
  </FeatureDemo>
);

export const AnchorDemo = () => (
  <FeatureDemo
    title="Text Anchors"
    description="Different text alignment options"
    codeExample={`<OutlinedText text="Start" textAnchor="start" />
<OutlinedText text="Middle" textAnchor="middle" />
<OutlinedText text="End" textAnchor="end" />`}
  >
    <View style={styles.anchorContainer}>
      <OutlinedText
        text="Start"
        width={200}
        fontSize={20}
        textAnchor="start"
        strokeColor="#e17055"
        fillColor="#fdcb6e"
      />
      <OutlinedText
        text="Middle"
        width={200}
        fontSize={20}
        textAnchor="middle"
        strokeColor="#00b894"
        fillColor="#55a3ff"
      />
      <OutlinedText
        text="End"
        width={200}
        fontSize={20}
        textAnchor="end"
        strokeColor="#6c5ce7"
        fillColor="#fd79a8"
      />
    </View>
  </FeatureDemo>
);

const anchorContainerStyle = StyleSheet.create({
  anchorContainer: {
    width: 200,
    height: 80,
    justifyContent: 'space-between',
  },
}); 