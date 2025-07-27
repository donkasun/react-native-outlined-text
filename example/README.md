# React Native Outlined Text - Example App

This example app demonstrates all the features and capabilities of the `react-native-outlined-text` library.

## 🎯 Features Demonstrated

The example app showcases the following features:

### 📝 Basic Features
- **Basic Outlined Text**: Simple stroke and fill effects
- **Custom Colors**: Personalized stroke and fill colors
- **Text Wrapping**: Automatic text wrapping for long content
- **Text Anchors**: Different text alignment options (start, middle, end)

### 🌟 Advanced Features
- **Shadow Effects**: Customizable shadow with offset and opacity
- **Blur Shadow**: Advanced blur effects with multiple shadow layers
- **Custom Positioning**: Precise text positioning control
- **Multiple Effects**: Combined stroke, fill, and shadow effects
- **SvgTextOutlined Component**: Direct SVG component usage

### 🎨 Visual Effects
- **Stroke Width Control**: Adjustable outline thickness
- **Shadow Offset**: X and Y offset positioning
- **Shadow Opacity**: Transparency control for shadows
- **Shadow Blur**: Soft shadow effects with blur radius
- **Color Combinations**: Various color schemes and combinations

## 🚀 Getting Started

### Prerequisites

- Node.js >= 16
- React Native development environment
- iOS Simulator (for iOS) or Android Emulator (for Android)

### Installation

1. **Navigate to the example directory:**
   ```bash
   cd example
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Install iOS dependencies (iOS only):**
   ```bash
   cd ios && pod install && cd ..
   ```

### Running the App

#### iOS
```bash
npm run ios
```

#### Android
```bash
npm run android
```

#### Start Metro Bundler
```bash
npm start
```

## 📱 App Interface

The example app provides an interactive interface to explore all features:

### 🎮 Navigation
- **Previous/Next Buttons**: Navigate through different examples
- **Example Counter**: Shows current example number and total count
- **Feature List**: Scrollable list of all demonstrated features

### 🎨 Example Categories

1. **Basic Outlined Text**
   - Simple "Hello World" with default styling
   - Demonstrates basic stroke and fill functionality

2. **Custom Colors**
   - Colorful text with custom stroke and fill colors
   - Shows color customization capabilities

3. **Shadow Effects**
   - Text with shadow offset and opacity
   - Demonstrates shadow positioning and transparency

4. **Blur Shadow**
   - Advanced shadow with blur effect
   - Shows multiple shadow layers for soft effects

5. **Text Wrapping**
   - Long text that wraps automatically
   - Demonstrates automatic line breaking

6. **Different Anchors**
   - Three text examples with different alignments
   - Shows start, middle, and end text anchoring

7. **Advanced Shadow**
   - Complex shadow with blur and offset
   - Demonstrates combined shadow effects

8. **SvgTextOutlined Component**
   - Direct usage of the SVG component
   - Shows component-level control

9. **Custom Positioning**
   - Text positioned at specific coordinates
   - Demonstrates precise positioning control

10. **Multiple Effects**
    - Combined stroke, fill, and shadow effects
    - Shows the full range of styling options

## 🔧 Code Examples

### Basic Usage
```tsx
import OutlinedText from 'react-native-outlined-text';

<OutlinedText
  text="Hello World"
  width={200}
  fontSize={24}
  strokeColor="#000000"
  fillColor="#ffffff"
/>
```

### Advanced Shadow
```tsx
<OutlinedText
  text="Advanced Shadow"
  width={200}
  fontSize={24}
  shadowColor="#000000"
  shadowOffsetX={4}
  shadowOffsetY={4}
  shadowOpacity={0.6}
  shadowBlur={8}
  strokeColor="#2d3436"
  fillColor="#ffffff"
/>
```

### Text Wrapping
```tsx
<OutlinedText
  text="This is a long text that will wrap to multiple lines automatically when it exceeds the specified width"
  width={150}
  fontSize={16}
  strokeColor="#2d3436"
  fillColor="#74b9ff"
/>
```

## 📸 Screenshots

The app provides a visual showcase of all features with:
- Clean, modern UI design
- Interactive navigation between examples
- Real-time rendering of all effects
- Comprehensive feature documentation

## 🛠️ Development

### Project Structure
```
example/
├── App.tsx              # Main app component
├── index.js             # App entry point
├── package.json         # Dependencies and scripts
├── metro.config.js      # Metro bundler configuration
├── babel.config.js      # Babel configuration
├── tsconfig.json        # TypeScript configuration
├── app.json             # App metadata
└── README.md            # This file
```

### Customization
You can modify the examples in `App.tsx` to:
- Add new feature demonstrations
- Change colors and styling
- Test different text content
- Experiment with new combinations

### Building for Production
```bash
# iOS
npx react-native run-ios --configuration Release

# Android
npx react-native run-android --variant=release
```

## 🤝 Contributing

Feel free to:
- Add new examples
- Improve the UI/UX
- Add more interactive features
- Create additional demonstration scenarios

## 📄 License

This example app is part of the `react-native-outlined-text` project and follows the same MIT license.

## 🆘 Support

If you encounter any issues:
1. Check the main library documentation
2. Review the example code in `App.tsx`
3. Open an issue on the main repository
4. Check the troubleshooting section in the main README

---

**Happy coding! 🎉** 