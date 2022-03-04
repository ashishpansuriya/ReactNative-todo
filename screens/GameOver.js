import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

const GameOver = props => {
    return (
        <View style={styles.screen} >
            <Text>The Game Is Over..</Text>

<View style ={styles.imageContainer} >
<Image source={require('../assets/success.png')} resizeMode ="cover"  style ={styles.imagestyle}/>
</View>
           

            <Text>Number Of Rounds : {props.roundsNumber}</Text>
            <Text>Number Was : {props.userNum}</Text>

            <Button title='START AGAIN ' onPress={props.onRestart} />
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
        overflow :'hidden',
        borderColor: 'grey',
        borderWidth : 3,
        borderRadius : 100,

    }
});

export default GameOver;