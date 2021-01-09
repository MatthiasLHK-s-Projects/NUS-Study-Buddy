import React, { useState, useEffect } from 'react';
import { StyleSheet, View , FlatList, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import kitten from './assets/cutekitten1.png';
import background from './assets/ModuleTrackerPage.png';


export default function ModuleScreen({route, navigation}) {

    const key = route.params.value;

    var DATA = [];

    for(var i=1; i<=key; i++) {
        DATA.push(i);
    }

    var state = {
        textInputs: [],
    };

    return (
        <ImageBackground source={background} style={styles.container}>
          <View>
              <View style={[{transform: [{ translateY: 30 }]}]}>
                  <FlatList
                  style={styles.flatList}
                      ListHeaderComponent={() =>
                          <Text style={{padding: 8, marginBottom: 10}}>Modules</Text>
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
              </View>
              <View style={styles.button}>
              <TouchableOpacity style={styles.submit}>
                <Text> Save </Text>
              </TouchableOpacity>
              </View>
          </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    flatList: {
        width: "100%",
        height: 300,
        backgroundColor: 'rgba(255, 255, 255, 0.6)'
    },
    container: {
        flex: 1,
        alignItems: 'stretch',
    },
    module: {
        padding: 10,
        fontSize: 32,
        height: 56,
        flexDirection: 'row'
    },
    circle: {
        width: 256,
        height: 256,
        borderRadius: 256/2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cap: {
        fontSize: 88
    },
    image: {
        width: 200,
        height: 220
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
     submit: {
         backgroundColor: 'rgba(255, 132, 152, 0.5)',
         borderRadius: 20,
         padding: 20
     },
     button: {
         alignItems: 'center',
         top: 40,
     }
});

const FlatListBasics = (props) => {
    return (
      <View style={styles.flatList}>
        <FlatList
          data={[
            {name: 'Module 1', cap: '2'},
            {name: 'Module 2', cap: '4.5'},
            {name: 'Module 3', cap: '4.5'},
            {name: 'Module 4', cap: '4.5'},
            {name: 'Module 5', cap: '4.5'}
          ]}
        renderItem={({item}) => <Module name = {item.name} cap = {item.cap}/>}
      />
    </View>
  );
}

const Module = (props) => {
  return (
    <View style = {styles.module}>
      <TextInput>{props.name}</TextInput>
      <TextInput
      style={[{transform: [{ translateX: 288 }]}]}
      keyboardType = 'numeric' >{props.cap}</TextInput>
    </View>
  )
}
