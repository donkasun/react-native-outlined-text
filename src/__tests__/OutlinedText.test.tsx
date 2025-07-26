import React from 'react';
import { render } from '@testing-library/react-native';
import OutlinedText, { SvgTextOutlined } from '../components/OutlinedText';

// Mock react-native-svg
jest.mock('react-native-svg', () => {
  const React = require('react');
  return {
    Svg: ({ children, ...props }: any) => React.createElement('View', { ...props, testID: 'svg' }, children),
    Text: ({ children, ...props }: any) => React.createElement('Text', { ...props, testID: 'svg-text' }, children),
  };
});

describe('OutlinedText', () => {
  it('renders correctly with default props', () => {
    expect(() => {
      render(<OutlinedText text="Hello World" width={200} />);
    }).not.toThrow();
  });

  it('renders with custom stroke properties', () => {
    expect(() => {
      render(
        <OutlinedText 
          text="Custom Stroke" 
          width={200}
          strokeWidth={3} 
          strokeColor="#ff0000" 
        />
      );
    }).not.toThrow();
  });

  it('renders with custom colors', () => {
    expect(() => {
      render(
        <OutlinedText 
          text="Colored Text" 
          width={200}
          fillColor="#ffffff"
          strokeColor="#000000"
          shadowColor="#cccccc"
        />
      );
    }).not.toThrow();
  });

  it('renders with custom positioning', () => {
    expect(() => {
      render(
        <OutlinedText 
          text="Positioned Text" 
          width={200}
          x={50}
          y={50}
          textAnchor="start"
        />
      );
    }).not.toThrow();
  });

  it('renders with optional height', () => {
    expect(() => {
      render(
        <OutlinedText 
          text="Text without height" 
          width={200}
        />
      );
    }).not.toThrow();
  });
});

describe('SvgTextOutlined', () => {
  it('renders correctly with default props', () => {
    expect(() => {
      render(<SvgTextOutlined text="Hello World" width={200} />);
    }).not.toThrow();
  });

  it('handles text wrapping for long text', () => {
    const longText = "This is a very long text that should wrap to multiple lines when the width is limited";
    expect(() => {
      render(<SvgTextOutlined text={longText} width={100} fontSize={16} />);
    }).not.toThrow();
  });

  it('renders with different text anchors', () => {
    expect(() => {
      render(
        <SvgTextOutlined 
          text="Anchored Text" 
          width={200}
          textAnchor="end"
        />
      );
    }).not.toThrow();
  });
}); 