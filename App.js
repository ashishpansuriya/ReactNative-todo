import React from "react";
import { View, Text, Button, StyleSheet, Alert,TextInput,FlatList } from "react-native";
import { useState } from "react";

export default function App() {
  const [output, setOutput] = useState("");
  const [course, setCourse] = useState([]);

  function inputMethod(enterText) {
    setOutput(enterText);
  }

  
  const addCourse = () => {
    setOutput("");
    setCourse((currentCourse) => [...course, output]);
  };

  function onDeleteCourse(position) {
    console.log(position);
    let _course = [...course];
    _course.splice(position,1);
    setCourse(_course);
  }

  const renderItem = ({ item,index }) => (
    <Item title={item} position = {index} />
  );

  const Item = ({ title,position }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Button style ={{alignItems :'center'}} title="Delete" onPress={()=> {onDeleteCourse(position)}}>
      </Button>
    </View>
  );

 


  return (
    <View style={{ padding: 50 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TextInput
          style={styles.input}
          placeholder="Course Goal"
          value={output}
          onChangeText={inputMethod}
        />
        <Button title="ADD" onPress={addCourse} />
      </View>

      <FlatList
        data={course}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
  
    </View>
  );


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  textVire: {
    borderColor: "black",
    padding: 10,
    backgroundColor: "#ccc",
    borderWidth: 1,
    marginHorizontal: 7,
    marginVertical: 7,
  },
  inputView: {
    backgroundColor: "rgba(0,0,0,0)",
    position: "absolute",
    top: 0,
    left: 5,
    right: 5,
    flexDirection: "column",
  },
  input: {
    width: "80%",
    height: "100%",
    borderColor: "#000",
    fontSize: 18,
    borderWidth: 1,
    padding: 10,
  },

  button: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    marginVertical: 8,
  },
});
