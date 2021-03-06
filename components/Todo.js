import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function Todo({item, pressHandler}) {
    return(
        <TouchableOpacity onPress={()=>pressHandler(item.key)}>
            <Text style={styles.todoItem}>{item.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    todoItem: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
    },
})