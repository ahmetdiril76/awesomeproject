import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
import { Button as PaperButton} from 'react-native-paper';

export default function App() {
  const [counter, setCounter] = useState(1);
  const [name,setName] = useState("Ahmet");
  const [age, setAge] = useState(47);

  const increment =() => {
    setCounter(counter + 1)
  }
  const decrement =() => {
    setCounter(counter - 1)
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
      
      <View>
        <Text>Enter your name: </Text> 
        <TextInput style={styles.input} placeholder='ör. Ali Veli Deli' />
        <Text>name: {name} and age: {age}</Text>
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
    justifyContent: 'center'
  },
  text: {
    color: 'black',
    fontSize: 36
  },
  boldText: {
    fontWeight: 'bold'
  },
  input: {
    borderWidth: 1,
    borderColor: 'red',
    color: 'white',
    
    padding: 8,
    margin: 10,
    width: 200
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
