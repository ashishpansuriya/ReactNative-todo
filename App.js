import React from "react";
import {
  View,
  StyleSheet,
} from "react-native";
import  Header  from "./comonent/Header";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {

  return (
    <View style = {styles.screen}>
     <Header title ="Guess The Number" />

      <StartGameScreen />

    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1 }
});
