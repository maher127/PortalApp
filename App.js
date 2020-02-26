import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import PortalTabNavigation from "./navigation/PortalTabNavigation";

const fetchFonts = () => {
  return Font.loadAsync({
    "ubuntu-regular": require("./assets/Fonts/Ubuntu-Regular.ttf"),
    "ubuntu-bold": require("./assets/Fonts/Ubuntu-Bold.ttf"),
    "ubuntu-medium": require("./assets/Fonts/Ubuntu-Medium.ttf")
  });
};
export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={err => console.log(err)}
      />
    );
  }
  return (
    <NavigationContainer>
      <PortalTabNavigation />
    </NavigationContainer>
  );
}
