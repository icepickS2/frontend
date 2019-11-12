import React from "react"
import MemberSearchComponent from "../../components/member/MemberSearch"
import { View } from "react-native"
import { Header, Text } from "react-native-elements"
import { AntDesign } from "@expo/vector-icons"
const MemberSearch = ({ navigation }) => <MemberSearchComponent navigation={navigation} />

MemberSearch.navigationOptions = (screenProps) => ({
  header: (
    <Header
      placement="left"
      leftComponent={<AntDesign name="arrowleft" size={25} onPress={() => screenProps.navigation.goBack()} />}
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
export default MemberSearch
