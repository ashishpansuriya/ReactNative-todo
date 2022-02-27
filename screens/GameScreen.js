import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

const genratedRandomNumber = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (min - max) + min);
    if (rndNum === exclude) {
        return genratedRandomNumber(min, max, exclude);
    }
    else {
        return rndNum;
    }
};
const GameScreen = props => {
    const [currentNumber, setCurrentNumber] = useState(genratedRandomNumber(1, 100, props.userChoise));

};
const stles = StyleSheet.create({});

export default GameScreen;