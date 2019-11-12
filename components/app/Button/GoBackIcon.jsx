import React from "react"
import { withNavigation } from "react-navigation"
import { AntDesign } from "@expo/vector-icons"
const GoBackIcon = ({ navigation }) => <AntDesign name="arrowleft" size={25} onPress={() => navigation.goBack()} />

export default withNavigation(GoBackIcon)
