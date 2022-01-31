import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const Header = props => {
    return (
        <View style={styles.header} >
            <Text style = {styles.headerTitle}>props.title </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '90',
        backgroundColor: '#F7287B',
        alignItems: 'center',
        justifyContent: 'center',
    },

    headerTitle: {
        
        color: 'black',
        fontSize: '18',
    }









});

export default Header;