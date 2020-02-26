import React from "react";
import { View, Text } from "react-native";

const Test = () => {
  return (
    <View style={{ flex: 1, paddingTop: 20, position: "absolute", top: 20 }}>
      <View
        style={{
          height: 80,
          backgroundColor: "#74C7ED",
          justifyContent: "center",
          paddingHorizontal: 5
        }}
      >
        <View style={{ height: 50, backgroundColor: "white" }} />
      </View>
    </View>
  );
};

export default Test;
