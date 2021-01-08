import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './HomeScreen.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {

    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} options={
                    {
                        title: 'HomeScreen',
                        headerStyle: {
                            backgroundColor: 'white',
                        },
                    }
                }/>
            </Stack.Navigator>
        </NavigationContainer>
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
