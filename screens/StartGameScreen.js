import React from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";

const StartGameScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={{ textAlign: 'center', fontSize: 20, color: 'black', marginVertical: 20 }}>Start The Game</Text>

            <View style={styles.inputContainer}>
                <Text>Select A Number ! </Text>

                <TextInput />

                <View style={styles.buttonContainer}>

                    <Button title='Reset' onPress={() => { }} />

                    <Button title='Conform' onPress={() => { }} />

                </View>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
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
        alignItems: 'center',
        shadowColor: 'black',
        shadowOpacity: 0.26,
        padding:20,
        shadowOffset: { height: 2, width: 0 },
        shadowRadius: 6,
        borderRadius:16,
        elevation : 6,
        backgroundColor : 'white'
    }
});

export default StartGameScreen;