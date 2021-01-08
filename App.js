import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './HomeScreen.js';

export default function App() {
  return (
    <View flex={1}>
      <HomeScreen />
      <StatusBar style="auto" />
    </View>
  );
}
