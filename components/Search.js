import React, { useState } from "react";
import { View, StyleSheet, TextInput, ScrollView, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ImageArrd from "./ImageArrd";

const Search = () => {
  const [search, setSearch] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <View style={styles.searchIcon}>
          <Ionicons name="md-search" size={32} color={"rgb(178,178,178)"} />
        </View>

        <TextInput
          onChangeText={text => setSearch(text)}
          value={search}
          placeholder="Search the portal"
        />
        <View style={styles.microIcon}>
          <Ionicons name="md-microphone" size={32} color="white" />
        </View>
      </View>
      <View>
        <ImageArrd source="https://facebook.github.io/react/logo-og.png" />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 2
  },
  searchBar: {
    borderRadius: 50,
    backgroundColor: "rgb(222, 222, 222)",
    height: 50,
    flexDirection: "row",
    marginRight: 4,
    marginTop: 10,
    marginBottom: 0,
    paddingBottom: 0,
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%"
  },
  searchIcon: {
    marginHorizontal: 10,
    marginVertical: 4
  },
  microIcon: {
    marginLeft: "auto",
    marginRight: 10,
    marginVertical: 4
  }
});

export default Search;
