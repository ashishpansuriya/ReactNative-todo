import React, { useState , useRef , useEffect} from "react";
import { View, Text, StyleSheet, Button, Alert, Dimensions, FlatList, ScrollView } from "react-native";

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
    const [pastGuess, setPastGuess] = useState([initialGuess.toString()]);
    const currentLow = useRef(1);
    const currentHigh = useRef(100);
    const [availableWidth , setAvailableWidth] = useState(Dimensions.get('window').width);
    const [availableHeight , setAvailableHeight] = useState(Dimensions.get('window').height);

    const {userChoise , onGameOver} = props;

    useEffect(()=>{
        const styleButton = () => {
            setAvailableWidth(Dimensions.get('window').width);
            setAvailableHeight(Dimensions.get('window').height);
        };

        Dimensions.addEventListener('change',styleButton);

        return ()=>{
            Dimensions.removeEventListener('change',styleButton);
        };
    });

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
        setPastGuess(curPastGuess => [guessNumber.toString(), ...curPastGuess]);
    }

    const randerListItem = (numOfRounds, itemData) => (
        <View style={stles.listItems}>
            <Text>#{numOfRounds - itemData.index}</Text>
            <Text>
                {itemData.item}
            </Text>
        </View>);


    let checkStyle = stles.listStyle;
    if (availableWidth < 400) {
        checkStyle = stles.listStyleSmall;
    }

    if (availableHeight < 500) {
        return (
            <ScrollView>
                <View style={stles.screen}>
                    <Text style={{ fontSize: 20, textAlign: 'center', padding: 20 }}>Opponent's Guess</Text>

                    <View style ={stles.controls}>
                        <Button title="LOWER" onPress={nextGuessNumber.bind(this, 'lower')} />

                        <NumberContainer >{currentNumber}</NumberContainer>

                        <Button title="GRETER" onPress={nextGuessNumber.bind(this, 'grater')} />
                    </View>

                    <View style={checkStyle}>
                        {/* <ScrollView contentContainerStyle ={{flexGrow : 1}}>
                    {pastGuess.map((guess ,index) => randerListItem(guess ,pastGuess.length - index  ))}
    
                </ScrollView> */}

                        <FlatList keyExtractor={(item) => item} data={pastGuess} renderItem={randerListItem.bind(this, pastGuess.length)} />
                    </View>
                </View>
            </ScrollView>
        );
    }


    return (
        <ScrollView>
             <View style = {stles.screen}>
            <Text style = {{fontSize : 20 , textAlign : 'center' , padding : 20 }}>Opponent's Guess</Text>

            <NumberContainer >{currentNumber}</NumberContainer>
            
            <Card style = {stles.buttonContainer}>
                <Button  title="LOWER" onPress={nextGuessNumber.bind(this,'lower')} />
                <Button title="GRETER" onPress={nextGuessNumber.bind(this, 'grater')} />
            </Card>

                <View style={stles.listStyle}>
                    {/* <ScrollView contentContainerStyle ={{flexGrow : 1}}>
                {pastGuess.map((guess ,index) => randerListItem(guess ,pastGuess.length - index  ))}

            </ScrollView> */}

                    <FlatList style={{ flexGrow: 1 }} keyExtractor={(item) => item} data={pastGuess} renderItem={randerListItem.bind(this, pastGuess.length)} />
            </View>
        </View> 
        </ScrollView>
    );

};
const stles = StyleSheet.create({
    screen: {
        flex : 1,
        padding: 10,
        alignItems : 'center'
    },

    controls :{
        flexDirection : 'row',
        justifyContent : 'space-around',
        width : '80%',
        alignItems : 'center',
    },

    listStyle: {
        flex: 1,
        width: 200,
        marginTop: 10,
        justifyContent: 'center',
    },

    listStyleSmall: {
        width: '100%',
        justifyContent: 'center',

    },

    buttonContainer : {
        flexDirection : 'row',
        justifyContent : 'space-around',
        marginTop: Dimensions.get('window').height > 300 ? 20 : 10,
        width: 300,
        maxWidth: '90%'
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