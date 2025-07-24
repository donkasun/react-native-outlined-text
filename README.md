# React Native Outlined Text

A React Native component for creating outlined text with customizable stroke effects.

## Features

- 🎨 Customizable stroke width and color
- 📱 Cross-platform compatibility (iOS & Android)
- ⚡ Lightweight and performant
- 🔧 TypeScript support
- 🧪 Comprehensive test coverage

## Installation

```bash
npm install react-native-outlined-text
# or
yarn add react-native-outlined-text
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
      <OutlinedText style={styles.text}>
        Hello World
      </OutlinedText>

      {/* Custom stroke */}
      <OutlinedText 
        style={styles.text}
        strokeWidth={3}
        strokeColor="#ff0000"
      >
        Red Outline
      </OutlinedText>

      {/* With custom styles */}
      <OutlinedText 
        style={[styles.text, { fontSize: 24, color: '#fff' }]}
        strokeWidth={2}
        strokeColor="#000"
      >
        White Text with Black Outline
      </OutlinedText>
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
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});

export default App;
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `strokeWidth` | `number` | `2` | Width of the text outline |
| `strokeColor` | `string` | `'#000'` | Color of the text outline |
| `children` | `React.ReactNode` | **Required** | Text content to display |
| `style` | `TextStyle` | - | Additional text styles |
| `...TextProps` | - | - | All standard React Native Text props |

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