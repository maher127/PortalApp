import React from "react";
import { Avatar } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  TouchableNativeFeedback
} from "react-native";

const CategoriesItem = props => {
  let TouchableCmp = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <View style={styles.gridItem}>
      <TouchableCmp style={{ flex: 1 }} onPress={props.onSelect}>
        <View style={styles.container}>
          <Text numberOfLines={2} style={styles.title}>
            {props.title}
          </Text>
          <View style={styles.icon}>
            <Ionicons name={props.icon} size={32} color="white" />
          </View>
        </View>
      </TouchableCmp>
    </View>
  );
};
const styles = StyleSheet.create({
  gridItem: {
    margin: 5,
    padding: 15,
    height: 110,
    width: "30%",
    borderRadius: 10,
    backgroundColor: "white",
    overflow:
      Platform.OS === "android" && Platform.Version >= 21
        ? "hidden"
        : "visible",
    elevation: 5
  },
  container: {
    height: "100%",
    justifyContent: "space-between"
  },
  title: {
    fontSize: 21,
    color: "rgb(121,121,121)"
  },
  icon: {
    marginLeft: "auto",
    height: 30,
    width: 30,
    borderRadius: 50,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default CategoriesItem;
