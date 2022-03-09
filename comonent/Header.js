import React, { useState } from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import colors from "../Constants/colors";
const Header = props => {
    return (
        <View style={{...styles.headerBase , ...Platform.select({ios : styles.headerIOS , android : styles.headerAndroid})}} >
            <Text style={styles.headerTitle}>{props.title} </Text>
        </View>
    ); 
};

const styles = StyleSheet.create({
    headerBase: {
        width: '100%',
        height: 90,
        paddingTop: 25,
       
        alignItems: 'center',
        justifyContent: 'center',
      
    },

    headerIOS: {
        backgroundColor: 'white',
        borderBottomColor:  '#ccc',
        borderBottomWidth:  1,
        borderRadius: 10
    },
    headerAndroid: {
        backgroundColor: colors.primary,
    },

    headerTitle: {
        color: Platform.OS === 'ios' ? colors.primary : 'white',
        fontSize: 18,
        fontFamily: 'OpenSans-Bold'
    }

});

export default Header;