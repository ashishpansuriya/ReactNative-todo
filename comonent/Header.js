import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = props => {
    return (
        <View style={styles.header} >
            <Text style={styles.headerTitle}>{props.title} </Text>
        </View>
    ); 
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 25,
        backgroundColor: '#F7287B',
        alignItems: 'center',
        justifyContent: 'center'
    },

    headerTitle: {
        color: 'white',
        fontSize: 18,
    }

});

export default Header;