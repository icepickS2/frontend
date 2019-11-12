import React from "react"
import SettingListComponent from "../../components/setting/SettingList"

import { View } from "react-native"
import { Header, Text, SearchBar } from "react-native-elements"
import { Entypo, AntDesign } from "@expo/vector-icons"
const SettingList = ({}) => <SettingListComponent />
SettingList.navigationOptions = (screenProps) => ({
  header: (
    <Header
      placement="left"
      leftComponent={<AntDesign name="arrowleft" size={25} onPress={() => screenProps.navigation.navigate("Main")} />}
      centerComponent={
        <View style={{ flexDirection: "row" }}>
          <AntDesign name="search1" color="#444444" size={20} />
          <Text style={{ fontSize: 20, color: "#444444", marginLeft: 15 }}>Search</Text>
        </View>
      }
      containerStyle={{
        backgroundColor: "#fff",
        justifyContent: "center",
        borderBottomColor: "transparent",
      }}
    />
  ),
})
export default SettingList
