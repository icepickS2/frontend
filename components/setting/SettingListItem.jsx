import React from "react"
import { Text, View } from "react-native"
import { ListItem } from "react-native-elements"
import { MaterialIcons } from "@expo/vector-icons"
const SettingListItem = ({ title, backgroundColor, icon, rightTitle, hideChevron, checkbox }) => (
  <ListItem
    containerStyle={{ paddingVertical: 8, height: 150 }}
    switch={checkbox && { value: true }}
    key={title}
    chevron={!hideChevron}
    rightTitle={rightTitle}
    leftIcon={
      <MaterialIcons
        name={icon}
        size={40}
        color="black"
        containerStyle={{
          backgroundColor,
          borderRadius: 6,
          alignItems: "center",
          justifyContent: "center",
        }}
      />
    }
    title={title}
  />
)

export default SettingListItem
