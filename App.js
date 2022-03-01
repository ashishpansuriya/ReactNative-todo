import React, { useState } from "react";
import {
  View,
  StyleSheet,
} from "react-native";
import  Header  from "./comonent/Header";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {

  const [userNumber, setUserNumber] = useState();

  const startHandler = slectNumber => {
    setUserNumber (slectNumber);
  };

  let content = <StartGameScreen  onStartGame = {startHandler} />;

if(userNumber){
  content =  <GameScreen  userChoise ={userNumber} /> ;
}

  return (
    <View style = {styles.screen}>
     <Header title ="Guess The Number" />

    {content}

     
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1 }
});
