import React from "react"
import { Text, View } from "react-native"

const SidebarItemHeader = ({ title }) => (
  <View style={{ width: "100%", paddingLeft: 20, height: 40, padding: 10, backgroundColor: "#fff" }}>
    <Text style={{ fontWeight: "bold", fontSize: 20, color: "#444444" }}>{title}</Text>
  </View>
)

export default SidebarItemHeader
