import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { OutlinedText, SvgTextOutlined } from '@donkasun/react-native-outlined-text';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Outlined Text Examples</Text>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Basic OutlinedText</Text>
          <OutlinedText
            text="Hello World!"
            fontSize={24}
            strokeWidth={2}
            strokeColor="#000"
            fillColor="#fff"
            width={200}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Colored Outlined Text</Text>
          <OutlinedText
            text="Colorful Text"
            fontSize={28}
            strokeWidth={3}
            strokeColor="#ff6b6b"
            fillColor="#4ecdc4"
            width={250}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Large Outlined Text</Text>
          <OutlinedText
            text="BIG TEXT"
            fontSize={36}
            strokeWidth={4}
            strokeColor="#2c3e50"
            fillColor="#e74c3c"
            width={300}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>SvgTextOutlined Component</Text>
          <SvgTextOutlined
            text="SVG Text"
            fontSize={20}
            strokeWidth={1.5}
            strokeColor="#8e44ad"
            fillColor="#f39c12"
            width={150}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Thin Stroke</Text>
          <OutlinedText
            text="Thin Outline"
            fontSize={22}
            strokeWidth={1}
            strokeColor="#34495e"
            fillColor="#ecf0f1"
            width={180}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContainer: {
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#2c3e50',
  },
  section: {
    marginBottom: 30,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
    color: '#34495e',
  },
});
