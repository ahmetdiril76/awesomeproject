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
      <View style={styles.header}>
        <Text style={styles.boldText}>Alisha's App</Text>
      </View>
      <StatusBar style="light" />
      
      <View style={styles.body}>
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
      </View>

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
    color: 'black',
    fontSize: 36
  },
  boldText: {
    fontWeight: 'bold'
  },
  header: {
    backgroundColor: 'pink',
    padding: 20
  },
  body: {
    backgroundColor: 'yellow',
    padding: 30
  }
});
