import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useState, useEffect } from 'react';
import Moment from 'moment';
import cal from './assets/baseline_calculate_white_18dp.png';
import gr from './assets/baseline_book_white_18dp.png';



export default function HomeScreen() {

    var num = Moment().format('H:mm:ss');
    var date = Moment().format('dd MMM uuuu');

    const [time, setTime] = useState(num);
    const [getDate, setDate] = useState(date);

    useEffect(() => {
        var timerID = setInterval( () => tick(), 1000 );

        return function cleanup() {
            clearInterval(timerID);
        };
    });

    function tick() {
        setDate(Moment().format('D MMM yyyy'));
        setTime(Moment().format('h:mm:ss a'));
    }

    return (
        <View style={styles.container}>
            <View style={styles.clockBox}>
                <Text style={styles.date}> {getDate} </Text>
                <Text style={styles.clock}> {time} </Text>
            </View>
            <View style={styles.calculatorView}>
            <TouchableOpacity style={styles.calculator} onPress={()=> alert("calculator pressed!")}>
                <Image source={cal} style={styles.cal} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.grade} onPress={()=> alert("grades pressed!")}>
                <Image source={gr} style={styles.gr} />
            </TouchableOpacity>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center', // left right
        //justifyContent: 'center', // up down
        top: 150,
    },
    clock: {
        color: 'white',
        fontSize: 30,
        fontStyle: 'italic',
    },
    date: {
        color: 'white',
        fontSize: 30,
        fontStyle: 'italic',
    },
    clockBox: {
        backgroundColor: 'grey',
        padding: 50,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    calculator: {
        height: 80,
        width: 80,
        backgroundColor: 'darkblue',
        borderRadius: 20,
        marginRight: 70
    },
    cal: {
        height: 80,
        width: 80
    },
    grade: {
        height: 80,
        width: 80,
        backgroundColor: 'darkblue',
        borderRadius: 20
    },
    gr: {
        height: 80,
        width: 80
    },
    calculatorView: {
        flexDirection: 'row',
        top: 180,
    }
})
