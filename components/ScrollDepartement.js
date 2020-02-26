import React from "react";
import { View, ScrollView } from "react-native";

import CategoryGridTitle from "./GridTitleCategories";
const ScrollDepartement = () => {
  return (
    <View style={{ marginTop: 20 }}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <CategoryGridTitle title="Technologie" icon="md-tv" color="red" />
        <CategoryGridTitle title="Technologie" icon="md-tv" color="green" />
        <CategoryGridTitle title="Technologie" icon="md-tv" color="blue" />
        <CategoryGridTitle title="Technologie" icon="md-tv" color="red" />
      </ScrollView>
    </View>
  );
};

export default ScrollDepartement;
