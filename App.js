import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './HomeScreen.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GradeCalculator from './GradeCalculator.js';
import Modules from './ModuleScreen.js'
import Filler1 from './FillerPage_1.js';
import Filler2 from './FillerPage_2.js';


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

                <Stack.Screen name="GradeCal" component={GradeCalculator} options={
                    {
                        title: 'GradeCalculator',
                        headerStyle: {
                            backgroundColor: 'white',
                        },
                    }
                }/>

                <Stack.Screen name="Modules" component={Modules} options={
                    {
                        title: 'Modules',
                        headerStyle: {
                            backgroundColor: 'white',
                        },
                    }
                }/>

                <Stack.Screen name="Filler1" component={Filler1} options={
                    {
                        title: 'Enter no. of modules',
                        headerStyle: {
                            backgroundColor: 'white',
                        },
                    }
                }/>

                <Stack.Screen name="Filler2" component={Filler2} options={
                    {
                        title: 'Enter no. of modules',
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
