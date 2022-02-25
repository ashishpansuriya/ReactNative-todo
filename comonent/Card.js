import React from "react";
import { View, StyleSheet } from "react-native";

const Card = props => {
    return (
        <View
            style={{ ...styles.card, ...props.style }} >
                 {props.children}
        </View> 
    );
};

const styles = StyleSheet.create({

    card: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        padding: 20,
        shadowOffset: { height: 2, width: 0 },
        shadowRadius: 6,
        borderRadius: 16,
        elevation: 6,
        backgroundColor: 'white'
    }

});

export default Card;