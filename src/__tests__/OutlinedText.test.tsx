import React from 'react';
import { render } from '@testing-library/react-native';
import OutlinedText from '../components/OutlinedText';

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
      <OutlinedText text="Hello World" width={200} height={100} />
    );
    
    expect(getByText('Hello World')).toBeTruthy();
  });

  it('renders with custom stroke properties', () => {
    const { getByText } = render(
      <OutlinedText 
        text="Custom Stroke" 
        width={200} 
        height={100}
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
        height={100}
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
        height={100}
        x={50}
        y={50}
        textAnchor="start"
      />
    );
    
    expect(getByText('Positioned Text')).toBeTruthy();
  });
}); 