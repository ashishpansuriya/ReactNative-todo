import React from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";
import Card from "../comonent/Card";

const StartGameScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={{ textAlign: 'center', fontSize: 20, color: 'black', marginVertical: 20 }}>Start The Game</Text>

            <Card style={styles.inputContainer}>
                
                <Text>Select A Number !</Text>

                <TextInput />

                <View style={styles.buttonContainer}>

                    <Button title='Reset' onPress={() => { }} />

                    <Button title='Conform' onPress={() => { }} />

                </View>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
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
    }
});

export default StartGameScreen;