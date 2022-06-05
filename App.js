import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Alert} from 'react-native';
import React, {useState} from 'react';
import Header from './components/header';
import Todo from './components/Todo';
import Addtodo from './components/addtodo';

export default function App() {

  const [todos, setTodos] = useState('');

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key)
    })
  }

  const submitHandler = (textVal) => {
    if (textVal > 3) {
      setTodos((prevTodos) => {
        return [
          {text: textVal, key: Math.random().toString()},
          ...prevTodos
        ]
      })
    } else {
      Alert.alert('A task shorter than 3 letters?', 'If life was that easy!', [
        {text: 'Understood', onPress: () => console.log('alert closed')}
      ])
    }
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Addtodo 
          submitHandler={submitHandler}
        /> 
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem= {({item}) => (
              <Todo
                item={item}
                pressHandler = {pressHandler}
              />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  content: {
    padding: 40,
  },
});
