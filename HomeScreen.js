import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { useState, useEffect } from 'react';
import Moment from 'moment';
import cal from './assets/baseline_calculate_black_18dp.png';
import gr from './assets/baseline_school_black_18dp.png';
import background from './assets/HomeScreen.png';



export default function HomeScreen({navigation}) {

    var num = Moment().format('H:mm');
    var date = Moment().format('dd MMM - dddd');
    var apm = Moment().format('a');

    const [time, setTime] = useState(num);
    const [getDate, setDate] = useState(date);
    const [getApm, setApm] = useState(apm);

    useEffect(() => {
        var timerID = setInterval( () => tick(), 1000 );

        return function cleanup() {
            clearInterval(timerID);
        };
    });

    function tick() {
        setDate(Moment().format('D MMM - dddd'));
        setTime(Moment().format('h:mm'));
        setApm(Moment().format('a'));
    }

    return (
        <ImageBackground source={background} style={styles.container}>
            <View style={styles.clockBox}>
                <Text style={styles.date}> {getDate} </Text>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.clock}> {time} </Text>
                    <Text style={styles.apm}> {getApm} </Text>
                </View>
            </View>

            <View style={styles.calculatorView}>

                <TouchableOpacity style={styles.grade} onPress={()=> navigation.navigate('Filler2')}>
                    <Image source={gr} style={styles.gr} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.calculator} onPress={()=> navigation.navigate('Filler1')}>
                    <Image source={cal} style={styles.cal} />
                </TouchableOpacity>

            </View>
        </ImageBackground>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center', // left right
        //justifyContent: 'center', // up down
        backgroundColor: 'cornflowerblue'
    },
    clock: {
        color: 'black',
        fontSize: 96,
    },
    apm: {
        fontSize:36,
        color: 'black',
        top: 64
    },
    date: {
        color: 'black',
        fontSize: 30,
        fontStyle: 'italic',
    },
    clockBox: {
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        padding: 30,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        top: 100
    },
    calculator: {
        flex: 1,
        height: 80,
        width: 80,
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        borderRadius: 20,
        marginLeft: 55,
        marginRight: 55
    },
    cal: {
        height: 80,
        width: 80
    },
    grade: {
        flex: 1,
        height: 80,
        width: 80,
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        borderRadius: 20,
        marginLeft: 55,
        marginRight: 55
    },
    gr: {
        height: 80,
        width: 80
    },
    calculatorView: {
        flexDirection: 'row',
        top: 300,
        justifyContent: 'space-around',
    }
})
