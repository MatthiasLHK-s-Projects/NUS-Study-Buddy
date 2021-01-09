import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet, FlatList, TextInput, ImageBackground } from 'react-native';
import { useState } from 'react';
import background from './assets/Filler_1.png';
import AsyncStorage from '@react-native-community/async-storage';

export default function FillerPage_2({navigation}) {
    const [value, setValue] = useState(0);
    // const [needToRender, setAns] = useState(true);
    //
    async function buttonPress() {
        try {
          await AsyncStorage.setItem('value', value);
          // await AsyncStorage.setItem('@filler2', 'false');
          // setAns(false);
          alert('Data successfully saved');
        } catch (e) {
          alert('Failed to save the data to the storage');
        }
        navigation.navigate('Modules', {value})
    }
    //
    // if (needToRender == false) {
    //     navigation.navigate('Modules', {value})
    // }
    //
    // async function getData() {
    //     try{
    //         const temp = await AsyncStorage.getItem('@filler2');
    //         if (temp != null && temp=='false') {
    //             setAns(temp);
    //         } else {
    //             alert('error');
    //         }
    //     } catch(e) {
    //         alert('failed');
    //     }
    // }

    return(
        <ImageBackground source={background} style={styles.container}>
            <TextInput
                keyboardType={'numeric'}
                placeholder={'       No. of modules taking'}
                onChangeText={text => setValue(text)}
                value={value}
                style={styles.textInput}
            />
            <TouchableOpacity style={styles.button} onPress={()=>buttonPress()}>
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
