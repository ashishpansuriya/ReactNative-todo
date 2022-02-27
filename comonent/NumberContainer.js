import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../Constants/colors";

const NumberContainer = props => {
    return (
        <View style = 
        {styles.container}>
            <Text style = {styles.NumberContainer}> {props.children} </Text>
        </View>);
};

const styles = StyleSheet.create({
    container :{
        borderBottomColor: 'grey',
        borderBottomWidth : 1,
        padding :10,
        borderRadius : 10,
        marginVertical : 10,
        
        alignContent : 'center',
        justifyContent: 'center'
    },
    NumberContainer :
    {
        color : colors.accent,
        fontSize : 18,
        textAlign : 'center',
    }
});

export default NumberContainer;