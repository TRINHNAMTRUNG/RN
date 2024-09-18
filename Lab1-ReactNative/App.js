import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FirstScreen from './src/components/firstScreen';
import Screen1a from './src/components/screen1a';
import Screen1b from './src/components/screen1b';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <FirstScreen /> */}
      {/* <Screen1a /> */}
      <Screen1b />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
