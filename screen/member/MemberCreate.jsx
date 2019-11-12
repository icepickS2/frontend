import React from "react"
import { View } from "react-native"
import MemberCreateComponent from "../../components/member/MemberCreate"
import { Header, Text } from "react-native-elements"
import { Entypo, AntDesign } from "@expo/vector-icons"

const MemberCreate = ({ params }) => <MemberCreateComponent />
MemberCreate.navigationOptions = (screenProps) => ({
  header: (
    <Header
      placement="left"
      leftComponent={<AntDesign name="arrowleft" size={25} onPress={() => screenProps.navigation.goBack()} />}
      centerComponent={
        <View style={{ flexDirection: "row" }}>
          <Entypo name="address" color="#444444" size={20} />
          <Text style={{ fontSize: 20, color: "#444444", marginLeft: 15 }}>Adress</Text>
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
export default MemberCreate
