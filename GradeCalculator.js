import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, FlatList, KeyboardAvoidingView, ImageBackground } from 'react-native';
import { useState, useEffect } from 'react';
import background from './assets/CAPCalculatorScreen.png';

export default function GradeCalculator({route, navigation}) {
    const [cap, setCap] = useState(0);

    function calculate(mods, mc) {
        const count = mods.length;
        var res = 0;
        var mcs = 0;
        for (var i=0; i<count; i++) {
            res = res + (parseFloat(mods[i]) * parseFloat(mc[i]));
            mcs = mcs + parseFloat(mc[i]);
        }
        res = res / mcs;
        setCap(res);
    }

    if (cap > 5) {
        setCap("Invalid");
    }

    const key = route.params.value;

    var DATA = [];

    for(var i=1; i<=key; i++) {
        DATA.push(i);
    }

    var state = {
        textInputs: [],
    };

    var mc = {
        MCs: [],
    }

    return (
        <ImageBackground source={background} style={styles.MainContainer}>

            <View style={styles.ResultWindow}>
                <Text style={styles.Result}>CAP: {cap}</Text>
            </View>

            <View style={styles.flatList}>
            <FlatList
                ListHeaderComponent={() =>
                    <Text style={{padding: 8, marginBottom: 10}}>Modular Grades</Text>
                }
                contentContainerStyle={{alignItems: 'center'}}
                data={DATA}
                renderItem={({ item, index }) => {
                    return(
                        <TextInput
                              style={styles.textInput}
                              onChangeText={text => {
                                let { textInputs } = state;
                                textInputs[index] = text;
                                state = {textInputs};
                              }}
                              value={state.textInputs[index]}
                        />
                    )
                }}
                keyExtractor={item=>item.id} />

                <FlatList
                    ListHeaderComponent={() =>
                        <Text style={{padding: 8, marginBottom: 10}}>Modular Credits</Text>
                    }
                    contentContainerStyle={{alignItems: 'center'}}
                    data={DATA}
                    renderItem={({ item, index }) => {
                        return(
                            <TextInput
                                  style={styles.textInput}
                                  onChangeText={text => {
                                    let { MCs } = mc;
                                    MCs[index] = text;
                                    mc = {MCs};
                                  }}
                                  value={mc.MCs[index]}
                            />
                        )
                    }}
                    keyExtractor={item=>item.id} />


            </View>

            <View style={styles.button}>
                <TouchableOpacity onPress={()=> calculate(state.textInputs, mc.MCs)}>
                    <Text style={styles.Cal}> What's my CAP? </Text>
                </TouchableOpacity>
            </View>

        </ImageBackground>
    );
}




const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        alignItems: 'center',
    },
    ResultWindow: {
        flex: 1,
        justifyContent: 'center'
    },
    Result: {
        padding: 30,
        fontSize: 30,
        color: 'black',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderRadius: 20,
        borderColor: 'royalblue',
        borderWidth: 2,
    },
    flatList: {
        flex: 1.9,
        flexDirection: 'row',
    },
    textInput: {
        height: 40,
        width: 100,
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: 'white',
        marginBottom: 10,
        borderRadius: 20
    },
    Cal: {
        backgroundColor: 'rgba(121, 148, 191, 0.5)',
        borderRadius: 20,
        borderWidth: 2,
        borderColor: 'grey',
        padding: 30
    },
    button: {
        flex: 1,
        justifyContent: 'center'
    }
})
