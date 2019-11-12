import React from "react"
import MemberListComponent from "../../components/member/MemberList"
import { View } from "react-native"
import { Header, Text } from "react-native-elements"
import { Entypo, AntDesign } from "@expo/vector-icons"

const MemberList = ({ navigation }) => {
  return <MemberListComponent navigation={navigation} />
}

MemberList.navigationOptions = (screenProps) => ({
  header: (
    <Header
      placement="left"
      leftComponent={{ icon: "menu", color: "#111111", onPress: () => screenProps.navigation.openDrawer() }}
      centerComponent={
        <View style={{ flexDirection: "row" }}>
          <Entypo name="address" color="#444444" size={20} />
          <Text style={{ fontSize: 20, color: "#444444", marginLeft: 15 }}>Adress</Text>
        </View>
      }
      rightComponent={
        <View style={{ flexDirection: "row" }}>
          <View>
            <AntDesign name="plus" color="#444444" size={24} onPress={() => screenProps.navigation.navigate("MemberCreate")} />
          </View>
          <View style={{ paddingLeft: 20, paddingRight: 10 }}>
            <AntDesign name="search1" color="#444444" size={24} onPress={() => screenProps.navigation.navigate("MemberSearch")} />
          </View>
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
export default MemberList
