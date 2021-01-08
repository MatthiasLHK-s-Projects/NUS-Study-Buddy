import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text> Hackathon 2021 </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})
