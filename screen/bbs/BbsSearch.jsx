import React from "react"
import { View } from "react-native"
import SearchInputTemplate from "../../components/app/template/SearchInputTemplate"
import BbsSearchComponent from "../../components/bbs/BbsSearch"
import { AntDesign } from "@expo/vector-icons"
import { Header } from "react-native-elements"

const BbsSearch = ({ navigation }) => {
  console.log(`gdgd`)

  return (
    <View>
      <SearchInputTemplate navigation={navigation} />
      <BbsSearchComponent navigation={navigation} />
    </View>
  )
}

BbsSearch.navigationOptions = (screenProps) => ({
  header: (
    <Header
      placement="left"
      leftComponent={<AntDesign name="arrowleft" size={25} onPress={() => screenProps.navigation.goBack()} />}
      centerComponent={{ text: "검색하기", style: { color: "#111111" } }}
      containerStyle={{
        backgroundColor: "#fff",
        justifyContent: "center",
        borderBottomColor: "transparent",
      }}
    />
  ),
})

export default BbsSearch
