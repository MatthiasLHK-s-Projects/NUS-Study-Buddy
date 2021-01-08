import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet, FlatList, TextInput, ImageBackground } from 'react-native';
import { useState } from 'react';
import background from './assets/Filler_1.png'

export default function FillerPage_1({navigation}) {
    const [value, setValue] = useState(0);
    return(
        <ImageBackground source={background} style={styles.container}>
            <TextInput
                keyboardType={'numeric'}
                placeholder={'       No. of modules taking'}
                onChangeText={text => setValue(text)}
                value={value}
                style={styles.textInput}
            />
            <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('GradeCal', {value})}>
                <Text style={styles.text}> Next </Text>
            </TouchableOpacity>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    textInput: {
        height: 40,
        width: 200,
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: 'white',
        top: 100,
        borderRadius: 40
    },
    button: {
        alignItems: 'center',
        padding: 20,
        borderRadius: 20,
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: 'black',
        top: 140
    }
})
