import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Platform } from "react-native";

import colors from "../Constants/colors";

const MyButton = props => {

    let ButtonComponent = TouchableOpacity;

    if ( Platform.Version === 21) {
        ButtonComponent = TouchableNativeFeedback;
    }

    return (
        <View style = {styles.buttonContainer}>
            <ButtonComponent onPress={props.onPress}>
            <View style={styles.button}>
                <Text style ={styles.buttonText}>{props.children}</Text>
            </View>
            </ButtonComponent>

        </View>
    );
};

const styles = StyleSheet.create({

    buttonContainer:{ 
        borderRadius : 25,
        overflow : 'hidden'
    },
    button: {
        backgroundColor: colors.primary,
        paddingHorizontal: 30,
        paddingVertical: 12,
        borderRadius: 25,
    },
    buttonText: {
        color: 'white',
        textAlign:'center',
        fontSize: 16
    }
});

export default MyButton;