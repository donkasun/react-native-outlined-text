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
            strokeWidth={1}
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
            strokeWidth={2}
            strokeColor="#ff6b6b"
            fillColor="#FFFFFF"
            width={250}
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
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#2c3e50',
  },
  section: {
    marginBottom: 10,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingTop: 5,
    width: '100%',
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '400',
    marginBottom: 15,
    color: '#34495e',
  },
});
