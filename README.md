# React Native Outlined Text

[![React Native](https://img.shields.io/badge/react%20native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://reactnative.dev/)
[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React Native SVG](https://img.shields.io/badge/react%20native%20svg-%23E23237.svg?style=for-the-badge&logo=svg&logoColor=white)](https://github.com/react-native-svg/react-native-svg)
[![Jest](https://img.shields.io/badge/jest-%23C21325.svg?style=for-the-badge&logo=jest&logoColor=white)](https://jestjs.io/)
[![ESLint](https://img.shields.io/badge/eslint-%234B32C3.svg?style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org/)

A React Native component for creating outlined text with customizable stroke effects and automatic text wrapping.

## Overview

React Native Outlined Text provides a flexible and performant solution for displaying text with outline effects in React Native applications. Built with TypeScript and optimized for cross-platform compatibility, this component offers advanced text styling capabilities including automatic text wrapping, dynamic height calculation, and customizable stroke effects.

## Project Status

✅ **Production Ready**: The library is fully configured for npm publishing with:
- Complete TypeScript build system
- Proper entry points and module resolution
- Metro bundler compatibility
- ESLint and code quality tools
- Automated build and publish workflow

🔄 **Testing**: Test infrastructure is in place and being improved for SVG component compatibility in React Native Testing Library environments.

## Features

- **Customizable Stroke Effects**: Adjustable stroke width and color for text outlines
- **Shadow Effects**: Enhanced visual appeal with customizable shadow colors
- **Cross-Platform Compatibility**: Works seamlessly on both iOS and Android
- **Lightweight and Performant**: Optimized for smooth rendering and minimal memory usage
- **TypeScript Support**: Full type safety and IntelliSense support
- **Production Ready**: Properly configured for npm publishing with build system
- **Precise Positioning**: Advanced positioning and alignment control
- **Multiple Text Effects**: Support for stroke, fill, and shadow combinations
- **Automatic Text Wrapping**: Intelligent text wrapping for long content
- **Dynamic Height Calculation**: Automatic height adjustment based on content
- **Component Variants**: Two component options for different use cases
- **Metro Compatible**: Configured for React Native bundler compatibility

## Installation

### Prerequisites

- React Native >= 0.60.0
- React >= 16.8.0
- react-native-svg >= 12.0.0

### Install Dependencies

```bash
npm install react-native-outlined-text react-native-svg
# or
yarn add react-native-outlined-text react-native-svg
```

### iOS Setup (if using CocoaPods)

```bash
cd ios && pod install
```

## Quick Start

### Basic Usage

```tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { OutlinedText } from 'react-native-outlined-text';

const App = () => {
  return (
    <View style={styles.container}>
      <OutlinedText 
        text="Hello World"
        width={200}
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

### Advanced Usage

```tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { OutlinedText, SvgTextOutlined } from 'react-native-outlined-text';

const AdvancedExample = () => {
  return (
    <View style={styles.container}>
      {/* Custom stroke with shadow */}
      <OutlinedText 
        text="Custom Stroke"
        width={200}
        strokeWidth={3}
        strokeColor="#ff0000"
        shadowColor="#cccccc"
        shadowOffset={4}
      />

      {/* Text with wrapping */}
      <SvgTextOutlined 
        text="This is a very long text that will automatically wrap to multiple lines when it exceeds the specified width"
        width={150}
        fontSize={16}
        strokeColor="#333"
        fillColor="#fff"
      />

      {/* Positioned text */}
      <OutlinedText 
        text="Positioned Text"
        width={200}
        x={50}
        y={50}
        textAnchor="start"
        fontSize={24}
      />

      {/* Text with custom shadow offset */}
      <OutlinedText 
        text="Shadow Offset"
        width={200}
        shadowColor="#666"
        shadowOffset={6}
        fontSize={20}
      />
    </View>
  );
};
```

## Components

### OutlinedText

The main component with backward compatibility. Extends `SvgTextOutlined` with additional styling options and View props support.

**Best for**: General use cases, when you need View styling capabilities.

### SvgTextOutlined

The core component with text wrapping functionality. Use this for maximum control over text rendering and performance.

**Best for**: Performance-critical applications, when you need precise control over text rendering.

## API Reference

### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `text` | `string` | - | Yes | Text content to display |
| `width` | `number` | - | Yes | Width of the SVG container |
| `height` | `number` | `undefined` | No | Height of the SVG container (auto-calculated if not provided) |
| `fontSize` | `number` | `26` | No | Font size of the text |
| `strokeWidth` | `number` | `1` | No | Width of the text outline |
| `strokeColor` | `string` | `'black'` | No | Color of the text outline |
| `fillColor` | `string` | `'white'` | No | Color of the text fill |
| `shadowColor` | `string` | `'black'` | No | Color of the shadow effect |
| `shadowOffset` | `number` | `0` | No | Offset distance for shadow effect |
| `x` | `number` | `width / 2` | No | X position of the text (auto-centered if not provided) |
| `y` | `number` | `height / 2` or `auto-calculated` | No | Y position of the text (auto-centered if not provided) |
| `textAnchor` | `'start' \| 'middle' \| 'end'` | `'middle'` | No | Text alignment anchor |
| `verticalOffset` | `number` | `0` | No | Vertical offset from center |
| `lineHeight` | `number` | `undefined` | No | Custom line height for wrapped text |
| `style` | `ViewStyle` | - | No | Additional container styles (OutlinedText only) |

### Text Anchor Values

- `'start'`: Aligns text to the left
- `'middle'`: Centers text horizontally
- `'end'`: Aligns text to the right

## Advanced Features

### Text Wrapping

The component automatically wraps long text into multiple lines based on the specified width:

```tsx
<SvgTextOutlined 
  text="This long text will wrap automatically to fit within the specified width"
  width={150}
  fontSize={16}
/>
```

### Dynamic Height

Height is now optional - the component calculates the required height based on content:

```tsx
// Height will be calculated automatically
<OutlinedText text="Hello World" width={200} />

// Or specify a fixed height
<OutlinedText text="Hello World" width={200} height={100} />
```

### Custom Positioning

Advanced positioning control with automatic centering:

```tsx
<OutlinedText 
  text="Custom Position"
  width={200}
  x={50}
  y={75}
  textAnchor="start"
  verticalOffset={10}
/>
```

## Development

### Prerequisites

- Node.js >= 14
- npm or yarn
- React Native development environment

### Setup

```bash
# Clone the repository
git clone https://github.com/donkasun/react-native-outlined-text.git

# Navigate to the project directory
cd react-native-outlined-text

# Install dependencies
npm install

# Build the library
npm run build

# Run tests
npm test

# Run linter
npm run lint
```

### Available Scripts

- `npm run build` - Build the TypeScript library
- `npm run dev` - Watch mode for development
- `npm run test` - Run tests (Note: Currently being improved)
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run clean` - Clean build directory
- `npm run prepublishOnly` - Clean and build before publishing

### Testing

The project includes test coverage for both components. Note that tests are currently being improved to handle SVG component testing in React Native environments:

```bash
# Run all tests
npm test

# Run tests with coverage
npm test -- --coverage

# Run tests in watch mode
npm test -- --watch
```

**Note**: Test infrastructure is in place, but SVG component testing in React Native Testing Library requires additional configuration. The library is fully functional and ready for production use.

## Performance Considerations

- **Text Wrapping**: The text wrapping algorithm uses character estimation for performance. For more accurate wrapping, consider using a text measurement library.
- **Rendering**: The component renders three SVG text elements (shadow, stroke, fill) for each line. For very long text, consider performance implications.
- **Memory Usage**: SVG elements are lightweight, but monitor memory usage with large amounts of text.

## Browser Support

This component is designed for React Native and requires `react-native-svg` for SVG rendering support.

## Contributing

We welcome contributions from the community! Here's how you can help:

### Reporting Issues

- Check existing issues before creating a new one
- Provide detailed reproduction steps
- Include device/OS information
- Share relevant code snippets

### Submitting Pull Requests

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass
6. Commit your changes (`git commit -m 'Add some amazing feature'`)
7. Push to the branch (`git push origin feature/amazing-feature`)
8. Open a Pull Request

### Development Guidelines

- Follow the existing code style
- Add TypeScript types for new features
- Include comprehensive tests
- Update documentation for new features
- Ensure cross-platform compatibility

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

### Getting Help

If you encounter any issues or have questions:

1. **Check the Documentation**: Review this README and the examples above
2. **Search Issues**: Look for similar issues in the [GitHub Issues](https://github.com/donkasun/react-native-outlined-text/issues)
3. **Create an Issue**: If you can't find a solution, create a new issue with detailed information

### Community

- **GitHub Issues**: [Report bugs and request features](https://github.com/donkasun/react-native-outlined-text/issues)
- **GitHub Discussions**: [Ask questions and share ideas](https://github.com/donkasun/react-native-outlined-text/discussions)

## Changelog

### v0.2.0
- Added automatic text wrapping functionality
- Made height prop optional with dynamic calculation
- Introduced SvgTextOutlined component for advanced use cases
- Improved text positioning and centering
- Enhanced shadow effects with new default color
- Added production-ready build system and infrastructure
- Configured Metro bundler compatibility
- Added proper TypeScript build configuration
- Set up npm publishing workflow

### v0.1.0
- Initial release
- Basic outlined text functionality
- Customizable stroke and fill colors
- Shadow effects
- Cross-platform compatibility

## Acknowledgments

- Built with [react-native-svg](https://github.com/react-native-svg/react-native-svg)
- Inspired by the need for better text styling in React Native applications
- Thanks to all contributors and the React Native community
- Production-ready infrastructure configured for reliable npm publishing 