import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './HomeScreen.js';
import ModuleScreen from './modules/ModuleScreen.js';

export default function App() {
  return (
    <View style={styles.container}>
      <ModuleScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
        backgroundColor: 'cornflowerblue'
    }
})
