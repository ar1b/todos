import React, {useState} from 'react';
import { Text, StyleSheet, TextInput, View, Button } from 'react-native';


export default function Addtodo({submitHandler}) {

    const [text, setText] = useState('');

    const changeHandler = (textVal) => {
        setText(textVal)
    }
    return(
        <View>
            <TextInput
                placeholder='Spearhead a task!'
                onChangeText={changeHandler}
                style={styles.input}
            />

            <Button
                onPress={()=> submitHandler(text)}
                title='+'
                color='coral'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        marginHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    }
})