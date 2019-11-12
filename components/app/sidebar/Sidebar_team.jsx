import React from "react"
import { View, TouchableOpacity } from "react-native"
import { ListItem, Text } from "react-native-elements"
import { Feather, FontAwesome, AntDesign } from "@expo/vector-icons"
import SidebarItemHeader from "./SidebarItemHeader"
import SidebarItem from "./SidebarItem"
const orgTest = [
  {
    title: "test1",
    onPress: () => {
      console.log(11)
    },
  },
  {
    title: "test2",
    handleOnPress: () => {
      console.log(11)
    },
  },
]

const Sidebar_team = ({ navigation }) => {
  return (
    <View style={{ borderTopWidth: 0.2, color: "#C7C6C8", paddingTop: 10 }}>
      <SidebarItemHeader title="Team" />
      {orgTest && orgTest.map((v, k) => <SidebarItem {...v} key={k} iconName={"team"} />)}
      <SidebarItem title="Create Team" handleOnPress={() => navigation.navigate("TeamCreate")} iconName={"plus"} />
    </View>
  )
}

export default Sidebar_team
