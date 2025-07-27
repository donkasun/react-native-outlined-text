import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import OutlinedText, { SvgTextOutlined } from '../src/components/OutlinedText';

const { width: screenWidth } = Dimensions.get('window');

const App = () => {
  const [currentExample, setCurrentExample] = useState(0);

  const examples = [
    {
      title: 'Basic Outlined Text',
      component: (
        <OutlinedText
          text="Hello World"
          width={200}
          fontSize={24}
          strokeColor="#000000"
          fillColor="#ffffff"
        />
      ),
    },
    {
      title: 'Custom Colors',
      component: (
        <OutlinedText
          text="Colorful Text"
          width={200}
          fontSize={24}
          strokeColor="#ff6b6b"
          fillColor="#4ecdc4"
          strokeWidth={2}
        />
      ),
    },
    {
      title: 'Shadow Effects',
      component: (
        <OutlinedText
          text="Shadow Text"
          width={200}
          fontSize={24}
          shadowColor="#ff6b6b"
          shadowOffsetX={3}
          shadowOffsetY={3}
          shadowOpacity={0.8}
        />
      ),
    },
    {
      title: 'Blur Shadow',
      component: (
        <OutlinedText
          text="Blur Shadow"
          width={200}
          fontSize={24}
          shadowColor="#6c5ce7"
          shadowBlur={6}
          shadowOffsetX={2}
          shadowOffsetY={2}
        />
      ),
    },
    {
      title: 'Text Wrapping',
      component: (
        <OutlinedText
          text="This is a long text that will wrap to multiple lines automatically when it exceeds the specified width"
          width={150}
          fontSize={16}
          strokeColor="#2d3436"
          fillColor="#74b9ff"
        />
      ),
    },
    {
      title: 'Different Anchors',
      component: (
        <View style={styles.anchorContainer}>
          <OutlinedText
            text="Start"
            width={200}
            fontSize={20}
            textAnchor="start"
            strokeColor="#e17055"
            fillColor="#fdcb6e"
          />
          <OutlinedText
            text="Middle"
            width={200}
            fontSize={20}
            textAnchor="middle"
            strokeColor="#00b894"
            fillColor="#55a3ff"
          />
          <OutlinedText
            text="End"
            width={200}
            fontSize={20}
            textAnchor="end"
            strokeColor="#6c5ce7"
            fillColor="#fd79a8"
          />
        </View>
      ),
    },
    {
      title: 'Advanced Shadow',
      component: (
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
      ),
    },
    {
      title: 'SvgTextOutlined Component',
      component: (
        <SvgTextOutlined
          text="SVG Component"
          width={200}
          fontSize={24}
          strokeColor="#e84393"
          fillColor="#00cec9"
          strokeWidth={3}
        />
      ),
    },
    {
      title: 'Custom Positioning',
      component: (
        <View style={styles.positionContainer}>
          <OutlinedText
            text="Top Left"
            width={200}
            fontSize={18}
            x={20}
            y={30}
            textAnchor="start"
            strokeColor="#fd79a8"
            fillColor="#fdcb6e"
          />
          <OutlinedText
            text="Bottom Right"
            width={200}
            fontSize={18}
            x={180}
            y={70}
            textAnchor="end"
            strokeColor="#6c5ce7"
            fillColor="#a29bfe"
          />
        </View>
      ),
    },
    {
      title: 'Multiple Effects',
      component: (
        <OutlinedText
          text="Multiple Effects"
          width={200}
          fontSize={24}
          strokeColor="#2d3436"
          strokeWidth={3}
          fillColor="#00b894"
          shadowColor="#e17055"
          shadowOffsetX={3}
          shadowOffsetY={3}
          shadowOpacity={0.7}
          shadowBlur={4}
        />
      ),
    },
  ];

  const nextExample = () => {
    setCurrentExample((prev) => (prev + 1) % examples.length);
  };

  const prevExample = () => {
    setCurrentExample((prev) => (prev - 1 + examples.length) % examples.length);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Text style={styles.title}>React Native Outlined Text</Text>
        <Text style={styles.subtitle}>Example App</Text>
      </View>

      <View style={styles.exampleContainer}>
        <Text style={styles.exampleTitle}>{examples[currentExample].title}</Text>
        <View style={styles.componentContainer}>
          {examples[currentExample].component}
        </View>
      </View>

      <View style={styles.navigation}>
        <TouchableOpacity style={styles.navButton} onPress={prevExample}>
          <Text style={styles.navButtonText}>← Previous</Text>
        </TouchableOpacity>
        <Text style={styles.counter}>
          {currentExample + 1} / {examples.length}
        </Text>
        <TouchableOpacity style={styles.navButton} onPress={nextExample}>
          <Text style={styles.navButtonText}>Next →</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.featuresList}>
        <Text style={styles.featuresTitle}>Features Demonstrated:</Text>
        <Text style={styles.feature}>• Basic outlined text with stroke and fill</Text>
        <Text style={styles.feature}>• Custom colors and stroke widths</Text>
        <Text style={styles.feature}>• Shadow effects with offset and opacity</Text>
        <Text style={styles.feature}>• Blur shadow effects</Text>
        <Text style={styles.feature}>• Automatic text wrapping</Text>
        <Text style={styles.feature}>• Text alignment (start, middle, end)</Text>
        <Text style={styles.feature}>• Custom positioning</Text>
        <Text style={styles.feature}>• Multiple shadow layers</Text>
        <Text style={styles.feature}>• SvgTextOutlined component</Text>
        <Text style={styles.feature}>• Combined effects</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2d3436',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: '#636e72',
  },
  exampleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  exampleTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2d3436',
    marginBottom: 20,
    textAlign: 'center',
  },
  componentContainer: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    minHeight: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#e9ecef',
  },
  navButton: {
    backgroundColor: '#6c5ce7',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  navButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  counter: {
    fontSize: 16,
    color: '#636e72',
    fontWeight: '500',
  },
  featuresList: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#e9ecef',
  },
  featuresTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2d3436',
    marginBottom: 10,
  },
  feature: {
    fontSize: 14,
    color: '#636e72',
    marginBottom: 5,
    lineHeight: 20,
  },
  anchorContainer: {
    width: 200,
    height: 80,
    justifyContent: 'space-between',
  },
  positionContainer: {
    width: 200,
    height: 100,
    position: 'relative',
  },
});

export default App; 