import React, { useState } from "react"
import { View, Text, Image, ScrollView } from "react-native"
import { Card, ListItem, Button, Icon } from "react-native-elements"
import BbsListItem_photo from "./item/BbsListItem_photo"
import BbsListItem_general from "./item/BbsListItem_general"
import { Foundation } from "@expo/vector-icons"
import { Fab } from "native-base"
import BbsListHeader from "./header/BbsListHeader"
const BbsList = ({ navigation }) => {
  const [active, setActive] = useState(true)
  return (
    <>
      <BbsListHeader navigation={navigation} />
      <ScrollView>
        <BbsListItem_photo />
        <BbsListItem_general navigation={navigation} />
      </ScrollView>

      <Fab active={active} direction="up" containerStyle={{}} style={{ backgroundColor: "#5067FF" }} position="bottomRight" onPress={() => navigation.navigate("BbsCreate")}>
        <Foundation name="pencil" />
      </Fab>
    </>
  )
}

export default BbsList
