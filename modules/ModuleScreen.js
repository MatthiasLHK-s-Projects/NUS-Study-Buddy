import React from 'react';
import { StyleSheet, View , FlatList, Text} from 'react-native';

export default function ModuleScreen() {
    return (
        <View style={styles.container}>
          <View>
            <CapDisplay cap = {4.5}/>
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
        fontSize: 26,
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
   }
});

const FlatListBasics = () => {
    return (
      <View style={styles.flatList}>
        <FlatList
          data={[
            {name: 'Module 1', cap: '4.5'},
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
      <Text>{props.name}</Text>
      <Text style={[{transform: [{ translateX: 288 }]}]}>{props.cap}</Text>
    </View>
  )
}

const CapDisplay = (props) => {
  return (
    <View style = {styles.circle} >
      <Text>Your CAP is</Text>
      <Text style = {styles.cap}>{props.cap}</Text>
    </View>
  )
}