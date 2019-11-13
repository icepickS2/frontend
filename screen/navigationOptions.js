import React from "react";
import { Dimensions } from "react-native";
import { Icon } from "react-native-elements";
import Sidebar from "../components/app/sidebar/SidebarContainer";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
export const Options = {
  MainTab: {
    main: {
      tabBarOptions: {
        showLabel: false,
        activeTintColor: "#fff",
        inactiveTintColor: "#00AAF0",
        style: {
          backgroundColor: "#fff"
        }
      }
    },
    member: {
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <AntDesign name="idcard" size={30} color={tintColor} />
        )
      })
    },
    schedule: {
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <AntDesign name="clockcircleo" size={30} color={tintColor} />
        )
      })
    },
    chat: {
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-chatbubbles" size={30} color={tintColor} />
        )
      })
    },
    bbs: {
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <MaterialIcons name="dashboard" size={30} color={tintColor} />
        )
      })
    }
  },

  Drawer: {
    main: {
      initialRouteName: "Main",
      contentOptions: {
        activeTintColor: "#111",
        activeBackgroundColor: "transparent",
        inactiveTintColor: "#ffffff",
        inactiveBackgroundColor: "transparent", //
        labelStyle: {
          fontSize: 15,
          marginLeft: 0
        }
      },
      drawerWidth: Math.min(Dimensions.get("window").width * 0.8, 300),
      contentComponent: Sidebar
    }
  },

  AppStack: {
    mode: "modal",
    headerMode: "none"
  },

  AuthStack: {
    navigationOptions: {
      header: null
    }
  }
};

export default Options;
