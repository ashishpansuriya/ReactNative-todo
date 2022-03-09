import React, { useState } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView
} from "react-native";
import  Header  from "./comonent/Header";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";
import GameOver from "./screens/GameOver";



export default function App() {

  const [userNumber, setUserNumber] = useState();
  const[guessRound , setGuessRound]= useState(0);
  const [dataLoaded , setDataLoaded] = useState(false);
if( !dataLoaded){
 }

const configureGameHandler = ()=> {
  setGuessRound(0);
  setUserNumber(null);
};

  const startHandler = slectNumber => {
    setUserNumber (slectNumber);
    setGuessRound(0);
  };

  const gameOverHandler = numOfRounds =>{
      setGuessRound (numOfRounds);   
  };

  let content = <StartGameScreen  onStartGame = {startHandler} />;

if(userNumber && guessRound <= 0 ){
  content =  <GameScreen  userChoise ={userNumber} onGameOver = {gameOverHandler} /> ;
}else if(guessRound > 0){
  content = <GameOver roundsNumber  = {guessRound} userNum = {userNumber} onRestart = {configureGameHandler}/>
}

  return (
    <SafeAreaView style={styles.screen}>
     <Header title ="Guess The Number" />

    {content}

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1 }
});
