import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import colors from "../Constants/colors";

const MyButton = props => {

    return (

        <TouchableOpacity onPress={props.onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{props.children}</Text>
            </View>
        </TouchableOpacity>

    );
};

const styles = StyleSheet.create({

   
    button: {
        backgroundColor: colors.primary,
        paddingHorizontal: 30,
        paddingVertical: 12,
        borderRadius: 25,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16
    }
});

export default MyButton;