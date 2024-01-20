import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View, ScrollView, TextInput, FlatList } from 'react-native';
import { Button as PaperButton} from 'react-native-paper';

export default function App() {
  const [people, setPeople] = useState([
    {name: 'hatabasan', ID: '1'},
    {name: 'kerim', ID: '2'},
    {name: 'melda', ID: '3'},
    {name: 'turan', ID: '4'},
    {name: 'kamil', ID: '5'},
    {name: 'necmi', ID: '6'},
    {name: 'hikmet', ID: '7'},
    {name: 'ali', ID: '8'},
    {name: 'recep', ID: '9'},
  ])

return (
  <View style={styles.container}>

    <FlatList
      numColumns={2}
      keyExtractor={(item) => item.ID}
      data = {people}
      renderItem = {({ item }) => (
        <Text style={styles.item}> {item.name} </Text>
      )}
    />
    </View>
)
    
    {/* <ScrollView>
      {people.map(item => (
        
        <View key={item.key}>
          <Text style={styles.item}>
            {item.name}
          </Text>
        </View>
          
      ))}
    </ScrollView> */}
    

  
  // const [counter, setCounter] = useState(1);
  
  // const [name,setName] = useState("Ahmet");
  // const [age, setAge] = useState(47);

  // const increment =() => {
  //   setCounter(counter + 1)
  // }
  // const decrement =() => {
  //   setCounter(counter - 1)
  // }

  // const MyComponent = () => (
  //   <PaperButton icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
  //     Press me
  //   </PaperButton>
  // );

  // return (
  //   <View style={styles.container}>
  //     <View style={styles.header}>
  //       <Text style={styles.boldText}>Alisha's App</Text>
  //     </View>
  //     <StatusBar style="light" />
      
  //     <View style={styles.body}>
  //       <Button 
  //         title='UP UP UP'
  //         onPress={increment} 
  //       />
  //       <Text style={styles.text}>
  //         COUNTERkk: {counter}
  //       </Text>
        

  //       <Button 
  //         title='DOWN DOWN DOWN!!'
  //         onPress={decrement} 
  //       />
  //     </View>
      
  //     <View>
  //       <Text>Enter your name: </Text> 
  //       <TextInput 
  //         // multiline
  //         keyboardType='numeric'
  //         style={styles.input} 
  //         placeholder='ör. Ali Veli Deli' 
  //         onChangeText={(value)=>setName(value)}
  //       />
  //       <Text style={styles.text}>name: {name} and age: {age}</Text>
  //     </View>

  //     < MyComponent />
  //   </View>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
    marginHorizontal: 30,
    marginVertical: 30,
  },
  text: {
    color: 'black',
    backgroundColor: 'gray',
    fontSize: 36,
    padding: 10
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
