import React from "react";
import { View, ScrollView } from "react-native";
import ItemsGrid from "./ItemsGrid";
const ItemsScroll = () => {
  return (
    <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <ItemsGrid />
        <ItemsGrid />
        <ItemsGrid />
        <ItemsGrid />
      </ScrollView>
    </View>
  );
};

export default ItemsScroll;
