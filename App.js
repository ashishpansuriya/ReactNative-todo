import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
} from "react-native";
import { useState } from "react";
import GoalInput from "./comonent/GoalInput";

export default function App() {
  
  const [course, setCourse] = useState([]);

  const addCourse = addCourseItem => {
    setCourse((currentCourse) => [...course, addCourseItem]);
  };

  function onDeleteCourse(position) {
    console.log(position);
    let _course = [...course];
    _course.splice(position, 1);
    setCourse(_course);
  }

  const renderItem = ({ item, index }) => (
    <Item title={item} position={index} />
  );

  const Item = ({ title, position }) => (
    <View style={styles.listItem}>
      <Text style={styles.title}>{title}</Text>
      <Button
        style={{ alignItems: "center" }}
        title="Delete"
        onPress={() => {
          onDeleteCourse(position);
        }}
      ></Button>
    </View>
  );

  return (
    <View style={{ padding: 50 }}>

      <GoalInput addCourse = {addCourse}/>     

      <FlatList
        data={course}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderWidth: 1,
  },
});