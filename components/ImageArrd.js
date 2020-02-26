import React from "react";
import { View, Image } from "react-native";

const ImageArrd = props => {
  return (
    <View>
      <Image
        style={{ width: 30, height: 30, marginTop: 3 }}
        source={{ uri: props.source }}
        borderRadius={50}
      />
    </View>
  );
};

export default ImageArrd;
