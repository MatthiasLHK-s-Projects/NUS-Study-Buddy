import React from 'react';
import { StyleSheet, View , TextInput, FlatList, Text} from 'react-native';

export default function ModuleScreen() {
    return (
        <View style={styles.container}>
            <View style ={styles.loginButton}>
                <FlatListBasics/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    loginButton: {
        width: "100%",
        height: 300,
        backgroundColor: "#fc5c65",
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        fontSize: 14,
        textAlign: 'justify',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
        backgroundColor: "#fc5c65",
      },
});

const FlatListBasics = () => {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {key: 'Module 1'},
            {key: 'Module 2'},
            {key: 'Module 3'},
            {key: 'Module 4'},
            {key: 'Module 5'}
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    );
  }