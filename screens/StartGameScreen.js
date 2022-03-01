import React, { useState } from "react";
import { Text, View, StyleSheet, Button, TouchableWithoutFeedback, Keyboard ,Alert} from "react-native";
import Card from "../comonent/Card";
import Input from "../comonent/Input";
import NumberContainer from "../comonent/NumberContainer";
import colors from "../Constants/colors";

const StartGameScreen = props => {

    const [enteredValue, setEnterValue] = useState('');
    const [confirmed,setConfirmed] = useState(false);
    const [selectNumer, setSelectNumer] = useState();

    const numberInputHandler = inputText => {
        setEnterValue(inputText.replace(/[^0-9]/g, ''));
    };

    const resetInputHandler = () => {
        setEnterValue('');
        setConfirmed(false);
    };

    const confirmHandler = () =>{

        const chooseNumber = parseInt(enteredValue);
        if(isNaN(chooseNumber)  || chooseNumber <= 0 || chooseNumber > 99){
            Alert.alert('Invalid Number !' , 'Number has to be a number between 1  and 99. ' ,[{text : 'okay' ,style : 'destructive',onPress : resetInputHandler   }]);  
            return;
        }

        setConfirmed(true);
        setSelectNumer(chooseNumber);
        setEnterValue('');
        Keyboard.dismiss();
    };

    let confirmedOutPut;
    if(confirmed){ 
        confirmedOutPut =
            (<Card style={{ marginVertical: 20, width: '80%' }}>
                <Text style = {{textAlign : 'center'}}>You selected</Text>

                <NumberContainer> {selectNumer}</NumberContainer>

                <Button title="START GAME" onPress={() => props.onStartGame(selectNumer) } />
            </Card>);

    }

    return (
        <TouchableWithoutFeedback
            onPress={() => { Keyboard.dismiss(); }}>

        <View style={styles.screen}>
                <Text style={styles.heading}>Start The Game</Text>

            <Card style={styles.inputContainer}>
                
                <Text>Select A Number !</Text>

                    <Input
                        style={styles.input}
                        keyboardType={"number-pad"}
                        maxLength='2'
                        blurOnSubmit
                        onChangeText={numberInputHandler}
                        value={enteredValue} />

                <View style={styles.buttonContainer}>
                        <View style={styles.buttons}>
                            <Button title='Reset' onPress={ resetInputHandler} color={colors.accent} />
                        </View>

                        <View style={styles.buttons}>
                            <Button title='Confirm' onPress={confirmHandler} color={colors.primary} />
                        </View>

                </View>
            </Card>
            {confirmedOutPut}
        </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({

    heading: {
        textAlign: 'center',
        fontSize: 20, color: 'black',
        marginVertical: 20
    },

    screen: {
        flex: 1,
        alignItems: 'center',
        padding: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },
    inputContainer: {
        maxWidth: '80%',
        width: 300,
        alignItems: 'center'
    },
    buttons: {
        width: 100,
        alignItems: 'center'
    },
    input: {
        width: '95%',
        borderRadius: 6,
        textAlign: 'center'
    }
});

export default StartGameScreen;