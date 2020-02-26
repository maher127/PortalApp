import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CardImage from "./CardImage";

const ItemsGrid = () => {
  return (
    <View>
      <CardImage />
      <View style={styles.container}>
        <Text style={styles.header}>Appel Mac</Text>
        <Text style={styles.title}>Desktop Computer</Text>
        <Text numberOfLines={2} style={styles.description}>
          Apple iMac desktop computer with intel I7 core processor ultra hd
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 2,
    width: 200
  },
  header: {
    fontSize: 28,
    fontFamily: "ubuntu-bold",
    color: "rgb(104,104,104)",
    paddingVertical: 2,
    paddingLeft: 4
  },
  title: {
    fontSize: 18,
    color: "#ee793c",
    fontFamily: "ubuntu-regular",
    paddingVertical: 1,
    paddingLeft: 4
  },
  description: {
    width: "100%",
    paddingLeft: 4
  }
});

export default ItemsGrid;
