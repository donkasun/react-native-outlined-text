#!/bin/bash

# React Native Outlined Text Example App Setup Script (Expo)

echo "🚀 Setting up React Native Outlined Text Example App (Expo)..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js >= 16 first."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 16 ]; then
    echo "❌ Node.js version 16 or higher is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ npm version: $(npm -v)"

# Check if Expo CLI is installed
if ! command -v expo &> /dev/null; then
    echo "📱 Installing Expo CLI..."
    npm install -g @expo/cli
    if [ $? -ne 0 ]; then
        echo "❌ Failed to install Expo CLI"
        exit 1
    fi
    echo "✅ Expo CLI installed"
else
    echo "✅ Expo CLI found"
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo "✅ Dependencies installed successfully"

# Check for iOS Simulator (macOS only)
if [[ "$OSTYPE" == "darwin"* ]]; then
    echo "🍎 macOS detected - checking for iOS Simulator..."
    
    if command -v xcrun &> /dev/null; then
        echo "✅ Xcode command line tools found"
        echo "📱 iOS Simulator available"
    else
        echo "⚠️  Xcode command line tools not found."
        echo "   Install Xcode from the App Store to enable iOS development."
    fi
else
    echo "🖥️  Non-macOS system detected. iOS development not available."
fi

# Check for Android setup
if command -v adb &> /dev/null; then
    echo "🤖 Android SDK found"
else
    echo "⚠️  Android SDK not found. Install Android Studio to enable Android development."
fi

echo ""
echo "🎉 Setup completed successfully!"
echo ""
echo "📱 To run the example app:"
echo "   • Start Expo:     npm start"
echo "   • iOS:           npm run ios"
echo "   • Android:       npm run android"
echo "   • Web:           npm run web"
echo ""
echo "📱 Alternative ways to run:"
echo "   • Scan QR code with Expo Go app on your phone"
echo "   • Press 'i' for iOS Simulator"
echo "   • Press 'a' for Android Emulator"
echo "   • Press 'w' for web browser"
echo ""
echo "📚 Check the README.md file for more detailed instructions."
echo ""
echo "Happy coding! 🚀" 