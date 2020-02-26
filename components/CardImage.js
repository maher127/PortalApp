import React from "react";

import { Ionicons } from "@expo/vector-icons";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  TouchableNativeFeedback,
  Image
} from "react-native";

const CardImage = props => {
  let TouchableCmp = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <View style={styles.gridItem}>
      <TouchableCmp style={{ flex: 1 }} onPress={props.onSelect}>
        <View style={styles.container}>
          <Image
            source={{ uri: "https://facebook.github.io/react/logo-og.png" }}
            style={{ width: "90%", height: "90%" }}
          />
        </View>
      </TouchableCmp>
    </View>
  );
};
const styles = StyleSheet.create({
  gridItem: {
    margin: 5,
    padding: 10,
    height: 150,
    width: 200,
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
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CardImage;
