
import { StyleSheet, Text, View } from 'react-native';
import StackLayout from './src/components/stackLayout';
import store from "./src/redux/store";
import {Provider} from "react-redux"
export default function App() {
  return (
    <Provider store= {store}> 
     <StackLayout />
    </Provider>
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
