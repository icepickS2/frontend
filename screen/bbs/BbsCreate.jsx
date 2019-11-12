import React from "react"
import BbsCreateComponent from "../../components/bbs/BbsCreate"
import { Header } from "react-native-elements"
import { AntDesign } from "@expo/vector-icons"
const BbsCreate = () => {
  return <BbsCreateComponent />
}

BbsCreate.navigationOptions = (screenProps) => ({
  header: (
    <Header
      placement="left"
      leftComponent={<AntDesign name="arrowleft" size={25} onPress={() => screenProps.navigation.navigate("Main")} />}
      centerComponent={{ text: "글쓰기", style: { color: "#111111" } }}
      containerStyle={{
        backgroundColor: "#fff",
        justifyContent: "center",
        borderBottomColor: "transparent",
      }}
    />
  ),
})
export default BbsCreate
