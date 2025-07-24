import React from 'react';
import { render } from '@testing-library/react-native';
import OutlinedText, { SvgTextOutlined } from '../components/OutlinedText';

// Mock react-native-svg
jest.mock('react-native-svg', () => {
  const React = require('react');
  return {
    Svg: ({ children, ...props }: any) => React.createElement('Svg', props, children),
    Text: ({ children, ...props }: any) => React.createElement('Text', props, children),
  };
});

describe('OutlinedText', () => {
  it('renders correctly with default props', () => {
    const { getByText } = render(
      <OutlinedText text="Hello World" width={200} />
    );
    
    expect(getByText('Hello World')).toBeTruthy();
  });

  it('renders with custom stroke properties', () => {
    const { getByText } = render(
      <OutlinedText 
        text="Custom Stroke" 
        width={200}
        strokeWidth={3} 
        strokeColor="#ff0000" 
      />
    );
    
    expect(getByText('Custom Stroke')).toBeTruthy();
  });

  it('renders with custom colors', () => {
    const { getByText } = render(
      <OutlinedText 
        text="Colored Text" 
        width={200}
        fillColor="#ffffff"
        strokeColor="#000000"
        shadowColor="#cccccc"
      />
    );
    
    expect(getByText('Colored Text')).toBeTruthy();
  });

  it('renders with custom positioning', () => {
    const { getByText } = render(
      <OutlinedText 
        text="Positioned Text" 
        width={200}
        x={50}
        y={50}
        textAnchor="start"
      />
    );
    
    expect(getByText('Positioned Text')).toBeTruthy();
  });

  it('renders with optional height', () => {
    const { getByText } = render(
      <OutlinedText 
        text="Text without height" 
        width={200}
      />
    );
    
    expect(getByText('Text without height')).toBeTruthy();
  });
});

describe('SvgTextOutlined', () => {
  it('renders correctly with default props', () => {
    const { getByText } = render(
      <SvgTextOutlined text="Hello World" width={200} />
    );
    
    expect(getByText('Hello World')).toBeTruthy();
  });

  it('handles text wrapping for long text', () => {
    const longText = "This is a very long text that should wrap to multiple lines when the width is limited";
    const { getByText } = render(
      <SvgTextOutlined text={longText} width={100} fontSize={16} />
    );
    
    // Should render the text (wrapped or not)
    expect(getByText(longText)).toBeTruthy();
  });

  it('renders with different text anchors', () => {
    const { getByText } = render(
      <SvgTextOutlined 
        text="Anchored Text" 
        width={200}
        textAnchor="end"
      />
    );
    
    expect(getByText('Anchored Text')).toBeTruthy();
  });
}); 