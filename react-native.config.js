module.exports = {
  project: {
    ios: {},
    android: {},
  },
  assets: ['./assets/fonts/'],
  dependencies: {
    'react-native-svg': {
      platforms: {
        android: null, // disable Android platform, other platforms will still autolink
      },
    },
  },
}; 