import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [counter, set_counter] = useState(1);

  const increment =() => {
    set_counter(counter + 1)
  }
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <Button 
        title='This is a butoohn! press it'
        onPress={increment} 
      />
      <Text style={styles.text}>
        COUNTER: {counter}
      </Text>
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
