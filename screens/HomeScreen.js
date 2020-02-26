import React from "react";
import { View, StyleSheet, ScrollView, FlatList } from "react-native";
import ScrollDepartement from "../components/ScrollDepartement";
import TitleItems from "../components/TitleItems";
import CategoriesItem from "../components/CategoriesItem";
import ItemsScroll from "../components/ItemsScroll";
import { Searchbar } from "react-native-paper";
import ImageArrd from "../components/ImageArrd";
import Search from "../components/Search";
export class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flexDirection: "column", marginTop: 40 }}>
        <View style={{ height: 80 }}>
          <Search />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ flexDirection: "column" }}>
            <ScrollDepartement />
          </View>
          <View>
            <TitleItems title="Categories" />
            <View style={styles.list}>
              <CategoriesItem title="order Hardware" icon="md-code" />
              <CategoriesItem title="order Hardware" icon="md-code" />
              <CategoriesItem title="order Hardware" icon="md-code" />
              <CategoriesItem title="order Hardware" icon="md-code" />
              <CategoriesItem title="order Hardware" icon="md-code" />
              <CategoriesItem title="order Hardware" icon="md-code" />
            </View>
            <View style={{ minHeight: 400 }}>
              <TitleItems title="Popular Items" />
              <ItemsScroll />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  list: {
    marginTop: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 10
  }
});
export default HomeScreen;
