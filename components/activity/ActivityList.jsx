import React from "react"
import { View, ScrollView } from "react-native"
import { Text } from "react-native-elements"
import { AntDesign } from "@expo/vector-icons"

import ActivityDateItem from "./ActivityDateItem"
const ActivityList = ({ params }) => (
  <ScrollView>
    <ActivityDateItem />
    <ActivityDateItem />
    <ActivityDateItem />
  </ScrollView>
)

export default ActivityList
