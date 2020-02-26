import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TitleItems = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{props.title}</Text>
      <Text style={styles.title}>See All</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 40,
    marginTop: 5,
    alignItems: "center",
    padding: 10
  },
  header: {
    fontSize: 28,
    fontFamily: "ubuntu-bold",
    color: "rgb(104,104,104)"
  },
  title: {
    fontSize: 18,
    fontFamily: "ubuntu-medium",

    color: "rgb(222,222,222)"
  }
});
export default TitleItems;
