import React from "react"
import { View, Image, Dimensions, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native"
import { DrawerNavigatorItems } from "react-navigation-drawer"
import { ListItem, Avatar, Icon } from "react-native-elements"
import Sidebar_team from "./Sidebar_team"
import SidebarItem from "./SidebarItem"
import SidebarItemHeader from "./SidebarItemHeader"
import SidebarProfile from "./SidebarProfile"
const Sidebar = ({ props }) => {
  const { navigation } = props
  return (
    <ScrollView>
      <SidebarProfile username={"히히히"} userEmail={"이메일잉ㅇ닝당"} userProfile={"https://scontent-lhr3-1.cdninstagram.com/vp/e9f78b9120306d3d8a22981db637f03b/5E3AB8AD/t51.2885-15/e35/32951951_184081422311588_2240660081563664384_n.jpg?_nc_ht=scontent-lhr3-1.cdninstagram.com&_nc_cat=108&ig_cache_key=MTc5MTEzMjgwOTgzOTE5ODAwMw%3D%3D.2"} />

      <Sidebar_team navigation={navigation} teamList={"히히"} />

      <View style={styles.etcContainer}>
        <SidebarItemHeader title="ETC" />
        <SidebarItem title="활동기록" handleOnPress={() => navigation.navigate("Activity")} iconName={"dashboard"} />
        <SidebarItem title="즐겨찾기" handleOnPress={() => navigation.navigate("Setting")} iconName={"star"} />
        <SidebarItem title="Settings" handleOnPress={() => navigation.navigate("Setting")} iconName={"setting"} />
      </View>
    </ScrollView>
  )
}
export default Sidebar

const styles = StyleSheet.create({
  etcContainer: { borderTopWidth: 0.2, color: "#C7C6C8", paddingTop: 10 },
})
