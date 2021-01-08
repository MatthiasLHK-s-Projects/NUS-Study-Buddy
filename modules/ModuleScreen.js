import React, { useState, useEffect } from 'react';
import { StyleSheet, View , FlatList, Text, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import kitten from '../assets/cutekitten1.png';


export default function ModuleScreen() {
    return (
        <View style={styles.container}>
          <View>
            <Image
             source = {kitten}
             style = {styles.image}
            />
          </View>
            <View style={[{transform: [{ translateY: 75 }]}]}>
                <FlatListBasics/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    flatList: {
        width: "100%",
        height: 300,
        backgroundColor: "#fc5c65"
    },
    container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
        backgroundColor: 'cornflowerblue'
    },
    module: {
        padding: 10,
        fontSize: 32,
        height: 56,
        backgroundColor: "#fc5c65",
        flexDirection: 'row' 
    },
    circle: {
      width: 256,
      height: 256,
      borderRadius: 256/2,
      backgroundColor: "#fc5c65",
      alignItems: 'center',
      justifyContent: 'center'
   },
   cap: {
     fontSize: 88
   },
   image: {
     width: 200,
     height: 220
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
