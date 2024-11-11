
import { StyleSheet, Text, View } from 'react-native';
import StackLayout from './src/components/stackLayout';

export default function App() {
  return (
    <StackLayout />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
