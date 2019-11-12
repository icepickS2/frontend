import React, { useState } from "react"
import { Header, Text, Overlay, ListItem } from "react-native-elements"
import { Feather } from "@expo/vector-icons"
import { Button, View, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from "react-native"
import BbsType_listsItem from "./BbsType_listsItem"
const SCREEN_WIDTH = Dimensions.get("window").width
const BbsListsOverlay = ({ overlay, setoverlay }) => (
  <Overlay windowBackgroundColor="rgba(255, 255, 255, .5)" overlayBackgroundColor="white" width={SCREEN_WIDTH * 0.8} height={"auto"} onBackdropPress={() => setoverlay(!overlay)}>
    <ScrollView>
      <View>
        <BbsType_listsItem title={"글타입인데용"} type="photo" handleOnPress={() => {}} />
        <BbsType_listsItem title={"글타입인데용"} type="text" handleOnPress={() => {}} />
        <BbsType_listsItem title={"글타입인데용"} type="text" handleOnPress={() => {}} />
        <BbsType_listsItem title={"글타입인데용"} type="text" handleOnPress={() => {}} />
        <BbsType_listsItem title={"글타입인데용"} type="text" handleOnPress={() => {}} />
        <BbsType_listsItem title={"글타입인데용"} type="text" handleOnPress={() => {}} />
        <BbsType_listsItem title={"글타입인데용"} type="text" handleOnPress={() => {}} />
        <BbsType_listsItem title={"글타입인데용"} type="text" handleOnPress={() => {}} />
        <BbsType_listsItem title={"글타입인데용"} type="text" handleOnPress={() => {}} />
        <BbsType_listsItem title={"글타입인데용"} type="text" handleOnPress={() => {}} />
      </View>
    </ScrollView>
  </Overlay>
)

export default BbsListsOverlay
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
  Container: { flexDirection: "row", width: "100%", height: 40, padding: 10, backgroundColor: "#fff", justifyContent: "center", alignItems: "center" },
  icon: { flex: 1, justifyContent: "center", alignItems: "center" },
  heading: {
    color: "white",
    marginTop: 10,
    fontSize: 22,
    fontWeight: "bold",
  },
  titleText: { fontSize: 20, color: "#444444", paddingLeft: 15 },
  flex3: { flex: 3 },
})
