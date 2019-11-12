import React, { useState } from "react"
import { StyleSheet, Dimensions, View } from "react-native"
import { Header } from "react-native-elements"
import { AntDesign } from "@expo/vector-icons"
import BbsListsOverlay from "./BbsListsOverlay"
const SCREEN_WIDTH = Dimensions.get("window").width
const BbsListHeader = ({ navigation }) => {
  const [overlay, setoverlay] = useState(false)
  return (
    <>
      <Header
        placement="left"
        leftComponent={{ icon: "menu", color: "#111111", onPress: () => navigation.openDrawer() }}
        centerComponent={{ text: "MY TITLE", style: { color: "#111111" } }}
        rightComponent={
          <View style={{ flexDirection: "row" }}>
            <View>
              <AntDesign name="bars" color="#444444" size={24} onPress={() => setoverlay(!overlay)} />
            </View>
            <View style={{ paddingLeft: 20, paddingRight: 10 }}>
              <AntDesign name="search1" color="#444444" size={24} onPress={() => navigation.navigate("BbsSearch")} />
            </View>
          </View>
        }
        containerStyle={{
          backgroundColor: "#fff",
          justifyContent: "center",
          borderBottomColor: "transparent",
        }}
      />
      {overlay && <BbsListsOverlay overlay={overlay} setoverlay={setoverlay} />}
    </>
  )
}

export default BbsListHeader
styles = StyleSheet.create({
  subtitleView: {
    flexDirection: "row",
    paddingLeft: 10,
    paddingTop: 5,
  },
  ratingImage: {
    height: 19.21,
    width: 100,
  },
  ratingText: {
    paddingLeft: 10,
    color: "grey",
  },
})
