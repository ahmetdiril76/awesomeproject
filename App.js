import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Button as PaperButton} from 'react-native-paper';

export default function App() {
  const [counter, set_counter] = useState(1);

  const increment =() => {
    set_counter(counter + 1)
  }
  const decrement =() => {
    set_counter(counter - 1)
  }

  const MyComponent = () => (
    <PaperButton icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
      Press me
    </PaperButton>
  );

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <Button 
        title='UP UP UP'
        onPress={increment} 
      />
      <Text style={styles.text}>
        COUNTER: {counter}
      </Text>
      <Button 
        title='DOWN DOWN DOWN!!'
        onPress={decrement} 
      />

      < MyComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 36
  }
});
