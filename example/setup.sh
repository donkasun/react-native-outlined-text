#!/bin/bash

# React Native Outlined Text Example App Setup Script

echo "🚀 Setting up React Native Outlined Text Example App..."

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

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo "✅ Dependencies installed successfully"

# Check if we're on macOS for iOS setup
if [[ "$OSTYPE" == "darwin"* ]]; then
    echo "🍎 macOS detected - checking for iOS setup..."
    
    # Check if Xcode is installed
    if ! command -v xcodebuild &> /dev/null; then
        echo "⚠️  Xcode not found. iOS development will not be available."
        echo "   Install Xcode from the App Store to enable iOS development."
    else
        echo "✅ Xcode found"
        
        # Check if CocoaPods is installed
        if ! command -v pod &> /dev/null; then
            echo "⚠️  CocoaPods not found. Installing CocoaPods..."
            sudo gem install cocoapods
        else
            echo "✅ CocoaPods found"
        fi
        
        # Install iOS dependencies
        if [ -d "ios" ]; then
            echo "📱 Installing iOS dependencies..."
            cd ios && pod install && cd ..
            echo "✅ iOS dependencies installed"
        else
            echo "⚠️  iOS directory not found. Run 'npx react-native init' first."
        fi
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
echo "   • iOS:     npm run ios"
echo "   • Android: npm run android"
echo "   • Metro:   npm start"
echo ""
echo "📚 Check the README.md file for more detailed instructions."
echo ""
echo "Happy coding! 🚀" 