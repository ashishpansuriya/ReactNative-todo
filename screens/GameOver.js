import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import MyButton from '../comonent/MyButton';
import colors from '../Constants/colors';

const GameOver = props => {
    return (
        <View style={styles.screen} >
            <Text style={{  alignItems: 'center', textAlign: 'center',fontSize : 30 ,fontStyle:'italic' }}>The Game Is Over..</Text>
            <View style={styles.imageContainer} >
                <Image fadeDuration={9000} source={require('../assets/success.png')} resizeMode="cover" style={styles.imagestyle} />
            </View>

            <Text style={{ margin: 20, alignItems: 'center', textAlign: 'center',fontSize : 20 }}>Your phone needed <Text style={{ color: colors.primary }}> {props.roundsNumber}</Text>  Rounds to Guess the Number <Text style={{ color: colors.primary }} >{props.userNum}</Text>. </Text>

            <MyButton  onPress={props.onRestart}>START AGAIN</MyButton>
        </View>);
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imagestyle: {
        width: '100%',
        height : '100%'
    },
    imageContainer : {
        width: 200,
        height : 200,
        justifyContent : 'center',
        alignContent: 'center',
        marginVertical : 40,
        shadowColor: 'black',
        overflow :'hidden',
        borderColor: 'grey',
        borderWidth : 3,
        borderRadius : 100,

    }
});

export default GameOver;