import React from "react";
import colors from "../constants/Color";
import { Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ItemsScreen from "../screens/ItemsScreen";
import MenuScreen from "../screens/MenuScreen";
import ChatScreen from "../screens/ChatScreen";
import AnswersScreen from "../screens/AnswersScreen";

import { MaterialCommunityIcons } from "react-native-vector-icons";
import { Colors } from "react-native/Libraries/NewAppScreen";

const Tab = createBottomTabNavigator();
const Tab2 = createMaterialBottomTabNavigator();

function PortalTabNavigatoir() {
  if (Platform.OS === "ios")
    return (
      <Tab.Navigator
        activeColor={"white"}
        barStyle={{ backgroundColor: rgb(249, 249, 249) }}
        tabBarColor="white"
        shifting={true}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            tabBarColor: colors.primaryColor,
            tabBarIcon: ({ color }) => (
              <Ionicons name="ios-restaurant" size={25} color={color} />
            )
          }}
        />
        <Tab.Screen
          name="Items"
          component={ItemsScreen}
          options={{
            tabBarLabel: "My Items",
            tabBarColor: colors.accentColor,
            tabBarIcon: ({ color }) => (
              <Ionicons name="ios-star" size={25} color={color} />
            )
          }}
        />

        <Tab.Screen
          name="Answers"
          component={AnswersScreen}
          options={{
            tabBarLabel: "Answers",
            tabBarColor: colors.accentColor,
            tabBarIcon: ({ color }) => (
              <Ionicons name="ios-star" size={25} color={color} />
            )
          }}
        />
        <Tab.Screen
          name="Chat"
          component={ChatScreen}
          options={{
            tabBarLabel: "Chat",
            tabBarColor: colors.accentColor,
            tabBarIcon: ({ color }) => (
              <Ionicons name="ios-star" size={25} color={color} />
            )
          }}
        />
        <Tab.Screen
          name="Menu"
          component={MenuScreen}
          options={{
            tabBarLabel: "Menu",
            tabBarColor: colors.accentColor,
            tabBarIcon: ({ color }) => (
              <Ionicons name="ios-star" size={25} color={color} />
            )
          }}
        />
      </Tab.Navigator>
    );
  else {
    return (
      <Tab2.Navigator
        initialRouteName="Home"
        activeColor={Colors.green}
        barStyle={{ backgroundColor: "rgb(249, 249, 249)" }}
      >
        <Tab2.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={23} />
            )
          }}
        />
        <Tab2.Screen
          name="My Items"
          component={ItemsScreen}
          options={{
            tabBarLabel: "My Items",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="bell" color={color} size={23} />
            )
          }}
        />

        <Tab2.Screen
          name="Chat"
          component={ChatScreen}
          options={{
            tabBarLabel: "chat",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="chat" color={color} size={23} />
            )
          }}
        />
        <Tab2.Screen
          name="Answer"
          component={AnswersScreen}
          options={{
            tabBarLabel: "My Answers",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="book-open"
                color={color}
                size={23}
              />
            )
          }}
        />
        <Tab2.Screen
          name="Menu"
          component={MenuScreen}
          options={{
            tabBarLabel: "Menu",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="menu" color={color} size={23} />
            )
          }}
        />
      </Tab2.Navigator>
    );
  }
}

export default PortalTabNavigatoir;
