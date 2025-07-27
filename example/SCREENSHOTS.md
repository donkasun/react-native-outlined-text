# Screenshots

This directory will contain screenshots of the example app demonstrating various features.

## 📸 Screenshot Guidelines

When taking screenshots for the example app, please follow these guidelines:

### 📱 Device Requirements
- **iOS**: iPhone 14 Pro or similar (390x844 points)
- **Android**: Pixel 6 or similar (412x915 points)
- **Format**: PNG or JPEG, high quality

### 🎯 Screenshots to Capture

1. **Main App Interface**
   - Full app screen showing navigation
   - Example counter and feature list visible

2. **Basic Outlined Text**
   - Simple "Hello World" example
   - Clean, minimal styling

3. **Custom Colors**
   - Colorful text with custom stroke and fill
   - Vibrant color combinations

4. **Shadow Effects**
   - Text with visible shadow offset
   - Shadow opacity clearly visible

5. **Blur Shadow**
   - Soft shadow effect with blur
   - Multiple shadow layers visible

6. **Text Wrapping**
   - Long text wrapped to multiple lines
   - Proper line breaking demonstrated

7. **Text Anchors**
   - Three text examples (start, middle, end)
   - Clear alignment differences

8. **Advanced Shadow**
   - Complex shadow with blur and offset
   - Combined effects visible

9. **Custom Positioning**
   - Text positioned at specific coordinates
   - Multiple text elements in different positions

10. **Multiple Effects**
    - Combined stroke, fill, and shadow
    - Full range of styling options

### 📋 Naming Convention
```
screenshot-{feature}-{platform}.png
```

Examples:
- `screenshot-basic-ios.png`
- `screenshot-shadow-android.png`
- `screenshot-blur-ios.png`

### 🎨 Screenshot Tips
- Use light backgrounds for better visibility
- Ensure text is clearly readable
- Capture the full component area
- Include some context (navigation, etc.)
- Maintain consistent lighting and quality

### 📁 File Structure
```
example/
├── screenshots/
│   ├── ios/
│   │   ├── screenshot-basic-ios.png
│   │   ├── screenshot-shadow-ios.png
│   │   └── ...
│   └── android/
│       ├── screenshot-basic-android.png
│       ├── screenshot-shadow-android.png
│       └── ...
└── SCREENSHOTS.md
```

## 🚀 How to Take Screenshots

### iOS Simulator
1. Run the example app: `npm run ios`
2. Navigate to the desired example
3. Press `Cmd + S` to take a screenshot
4. Screenshots are saved to Desktop by default

### Android Emulator
1. Run the example app: `npm run android`
2. Navigate to the desired example
3. Use Android Studio's screenshot tool
4. Or use `adb shell screencap` command

### Physical Devices
1. Run the app on a physical device
2. Navigate to the desired example
3. Use device screenshot function
4. Transfer screenshots to your computer

## 📝 Contributing Screenshots

When contributing screenshots:
1. Follow the naming convention
2. Ensure high quality and clarity
3. Include both iOS and Android versions
4. Update this file with new screenshots
5. Optimize file sizes for web viewing

---

**Note**: Screenshots will be added as the example app is developed and tested on different devices. 