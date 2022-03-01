import React, { useState , useRef} from "react";
import { View, Text, StyleSheet ,Button, Alert } from "react-native";

import NumberContainer from '../comonent/NumberContainer';
import Card from '../comonent/Card';


const genratedRandomNumber = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (min - max) + min);
    if (rndNum === exclude) {
        return genratedRandomNumber(min, max, exclude);
    }
    else {
        return rndNum;
    }
};
const GameScreen = props => {
    const [currentNumber, setCurrentNumber] = useState(genratedRandomNumber(1, 100, props.userChoise));
    const currentLow = useRef(1);
    const currentHigh = useRef(100);


    const nextGuessNumber = direction =>{
        if((direction === 'lower' && currentNumber < props.userChoise) || (direction === 'grater' && currentNumber > props.userChoise) ){
            Alert.alert('Dont\'t Lie ', 'You Know that this is wrong...' ,[{text : 'Sorry!', style :'cancel'}])
            return;
        }

        if (direction === 'lower'){
            currentHigh.current = currentNumber;
        }else{
            currentLow.current = currentNumber;
        }

        const  guessNumber = genratedRandomNumber(currentLow.current , currentHigh.current,currentNumber );
        setCurrentNumber(guessNumber);
    }
    return (
        <View style = {stles.screen}>
            <Text style = {{fontSize : 20 , textAlign : 'center' , padding : 20 }}>Opponent's Guess</Text>

            <NumberContainer >{currentNumber}</NumberContainer>
            
            <Card style = {stles.buttonContainer}>
                <Button  title="LOWER" onPress={nextGuessNumber.bind(this,'lower')} />
                <Button  title="GRETER" onPress={nextGuessNumber.bind(this,'grater')} />

            </Card>
        </View>
    );

};
const stles = StyleSheet.create({
    screen: {
        flex : 1,
        padding: 10,
        alignItems : 'center'
    },

    buttonContainer : {
        flexDirection : 'row',
        justifyContent : 'space-around',
        marginTop : 20,
        width : 300,
         maxWidth : '60%'
    },


    input: {
        width: '95%',
        borderRadius: 6,
        textAlign: 'center'
    }
});

export default GameScreen;