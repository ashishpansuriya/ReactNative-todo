import React from "react";
import {
  View,
  StyleSheet,
} from "react-native";
import  Header  from "./comonent/Header";

export default function App() {

  return (
    <View style={styles.screen}>
       {/* <StatusBar   
       hidden={route.statusBarHidden} />  */}
     <Header title ="Guess The Number" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1 }
});
