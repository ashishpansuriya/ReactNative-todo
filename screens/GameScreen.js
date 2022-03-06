import React, { useState , useRef , useEffect} from "react";
import { View, Text, StyleSheet, Button, Alert, ScrollView } from "react-native";

import NumberContainer from '../comonent/NumberContainer';
import Card from '../comonent/Card';

const genratedRandomNumber = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return genratedRandomNumber(min, max, exclude);
    }
    else {
        return rndNum;
    }
};

const GameScreen = props => {

    const initialGuess = genratedRandomNumber(1, 100, props.userChoise);
    const [currentNumber, setCurrentNumber] = useState(initialGuess);
    // const [rounds, setRounds] = useState(0);
    const [pastGuess, setPastGuess] = useState([initialGuess]);
    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    const {userChoise , onGameOver} = props;

    useEffect(()=>{
        if( currentNumber == props.userChoise){
            props.onGameOver(pastGuess.length);
        }
    }, [currentNumber , userChoise , onGameOver]);

    const nextGuessNumber = direction =>{
        if((direction === 'lower' && currentNumber < props.userChoise) || (direction === 'grater' && currentNumber > props.userChoise) ){
            Alert.alert('Dont\'t Lie ', 'You Know that this is wrong...' ,[{text : 'Sorry!', style :'cancel'}])
            return;
        }

        if (direction === 'lower'){
            currentHigh.current = currentNumber;
        }else{
            currentLow.current = currentNumber + 1;
        }

        const  guessNumber = genratedRandomNumber(currentLow.current , currentHigh.current,currentNumber );
        setCurrentNumber(guessNumber);
        // setRounds(curRounds => curRounds +1);
        setPastGuess(curPastGuess => [guessNumber, ...curPastGuess]);
    }

    const randerListItem = (value, numOfRounds) => (
        <View key={value} style ={stles.listItems}>
            <Text>#{numOfRounds}</Text>
            <Text>
                {value}
            </Text>
        </View>);


    return (
        <View style = {stles.screen}>
            <Text style = {{fontSize : 20 , textAlign : 'center' , padding : 20 }}>Opponent's Guess</Text>

            <NumberContainer >{currentNumber}</NumberContainer>
            
            <Card style = {stles.buttonContainer}>
                <Button  title="LOWER" onPress={nextGuessNumber.bind(this,'lower')} />
                <Button title="GRETER" onPress={nextGuessNumber.bind(this, 'grater')} />
            </Card>

            <View style = {{width : 250,justifyContent :'center'  }}>
            <ScrollView contentContainerStyle ={{flexGrow : 1}}>
                {pastGuess.map((guess ,index) => randerListItem(guess ,pastGuess.length - index  ))}

            </ScrollView>
            </View>
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
    },

    listItems:{
        maxWidth : 250,
        width : '100%',
        borderColor : '#ccc',
        borderWidth : 1,
        padding : 15,
        marginTop : 15,
        flex :1,
        alignContent: 'center',
        justifyContent :'space-between',
        backgroundColor : 'white',
        flexDirection :'row',
        borderRadius : 10,
    }
});

export default GameScreen;