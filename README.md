# React Native Outlined Text

A React Native component for creating outlined text with customizable stroke effects.

## Features

- 🎨 Customizable stroke width and color
- 🌟 Shadow effects for enhanced visual appeal
- 📱 Cross-platform compatibility (iOS & Android)
- ⚡ Lightweight and performant
- 🔧 TypeScript support
- 🧪 Comprehensive test coverage
- 🎯 Precise positioning and alignment control
- 🎨 Multiple text effects (stroke, fill, shadow)

## Installation

```bash
npm install react-native-outlined-text react-native-svg
# or
yarn add react-native-outlined-text react-native-svg
```

## Usage

```tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { OutlinedText } from 'react-native-outlined-text';

const App = () => {
  return (
    <View style={styles.container}>
      {/* Basic usage */}
      <OutlinedText 
        text="Hello World"
        width={200}
        height={100}
      />

      {/* Custom stroke */}
      <OutlinedText 
        text="Red Outline"
        width={200}
        height={100}
        strokeWidth={3}
        strokeColor="#ff0000"
      />

      {/* With custom colors and positioning */}
      <OutlinedText 
        text="White Text with Black Outline"
        width={200}
        height={100}
        fontSize={24}
        fillColor="#ffffff"
        strokeColor="#000000"
        strokeWidth={2}
        textAnchor="middle"
      />

      {/* With shadow effect */}
      <OutlinedText 
        text="Text with Shadow"
        width={200}
        height={100}
        fontSize={20}
        fillColor="#ffffff"
        strokeColor="#000000"
        shadowColor="#cccccc"
        strokeWidth={1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
});

export default App;
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | `string` | **Required** | Text content to display |
| `width` | `number` | **Required** | Width of the SVG container |
| `height` | `number` | **Required** | Height of the SVG container |
| `fontSize` | `number` | `26` | Font size of the text |
| `strokeWidth` | `number` | `1` | Width of the text outline |
| `strokeColor` | `string` | `'black'` | Color of the text outline |
| `fillColor` | `string` | `'white'` | Color of the text fill |
| `shadowColor` | `string` | `'#BFC1F9'` | Color of the shadow effect |
| `x` | `number` | `width / 2` | X position of the text (auto-centered if not provided) |
| `y` | `number` | `height / 2` | Y position of the text (auto-centered if not provided) |
| `textAnchor` | `'start' \| 'middle' \| 'end'` | `'middle'` | Text alignment anchor |
| `verticalOffset` | `number` | `0` | Vertical offset from center |
| `fontFamily` | `string` | `'Nunito-Regular'` | Font family to use |
| `style` | `ViewStyle` | - | Additional container styles |
| `...ViewProps` | - | - | All standard React Native View props |

## Development

### Prerequisites

- Node.js >= 14
- npm or yarn

### Setup

```bash
# Install dependencies
npm install

# Build the library
npm run build

# Run tests
npm test

# Run linter
npm run lint
```

### Scripts

- `npm run build` - Build the TypeScript library
- `npm run dev` - Watch mode for development
- `npm run test` - Run tests
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run clean` - Clean build directory

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you encounter any issues or have questions, please [open an issue](https://github.com/donkasun/react-native-outlined-text/issues) on GitHub. 