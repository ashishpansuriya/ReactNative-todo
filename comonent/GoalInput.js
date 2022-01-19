import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const GoalInput = (props) => {
  const [output, setOutput] = useState("");

  function inputMethod(enterText) {
    setOutput(enterText);
  }

  return (
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
      <Button
        title="ADD"
        onPress={(() =>  props.addCourse(output))}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: "80%",
    height: "100%",
    borderColor: "#000",
    fontSize: 18,
    borderWidth: 1,
    padding: 10,
  },
});

export default GoalInput;
