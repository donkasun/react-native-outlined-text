import React from 'react';
import { render } from '@testing-library/react-native';
import OutlinedText from '../components/OutlinedText';

describe('OutlinedText', () => {
  it('renders correctly with default props', () => {
    const { getByText } = render(
      <OutlinedText>Hello World</OutlinedText>
    );
    
    expect(getByText('Hello World')).toBeTruthy();
  });

  it('renders with custom stroke properties', () => {
    const { getByText } = render(
      <OutlinedText strokeWidth={3} strokeColor="#ff0000">
        Custom Stroke
      </OutlinedText>
    );
    
    expect(getByText('Custom Stroke')).toBeTruthy();
  });

  it('applies custom styles', () => {
    const { getByText } = render(
      <OutlinedText style={{ fontSize: 20, color: '#fff' }}>
        Styled Text
      </OutlinedText>
    );
    
    expect(getByText('Styled Text')).toBeTruthy();
  });
}); 