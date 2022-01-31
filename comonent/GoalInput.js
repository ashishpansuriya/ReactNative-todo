import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalInput = (props) => {
  const [output, setOutput] = useState("");

  function inputMethod(enterText) {
    setOutput(enterText);
  }

  const outputHandler = () => {
    props.addCourse(output);
    setOutput("");
  };

  return (
    <Modal visible={props.visible} animationType="fade">
      <View style={styles.modalViewStyle}>
        <TextInput
          style={styles.input}
          placeholder="Course Goal"
          value={output}
          value = {}
          onChangeText={inputMethod}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.buttons}>

            <Button title="CANCEL" color={"red"} onPress={props.onCancel} />
          </View>

          <View style={styles.buttons}>
            <Button title="ADD" onPress={outputHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalViewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },

  input: {
    width: "80%",
    borderColor: "#000",
    fontSize: 18,
    borderWidth: 1,
    padding: 10,
    margin: 10,
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
  },

  buttons: {
    width: "40%",
  },
});

export default GoalInput;
