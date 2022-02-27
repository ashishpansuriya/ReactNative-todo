import React, { useState } from "react";
import { Text, View, StyleSheet, Button, TouchableWithoutFeedback, Keyboard } from "react-native";
import Card from "../comonent/Card";
import Input from "../comonent/Input";
import colors from "../Constants/colors";

const StartGameScreen = props => {

    const [enteredValue, setEnterValue] = useState('');

    const numberInputHandler = inputText => {
        setEnterValue(inputText.replace(/[^0-9]/g, ''));
    };

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
                            <Button title='Reset' onPress={() => { setEnterValue = "" }} color={colors.accent} />
                        </View>

                        <View style={styles.buttons}>
                            <Button title='Conform' onPress={() => { }} color={colors.primary} />
                        </View>

                </View>
            </Card>
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