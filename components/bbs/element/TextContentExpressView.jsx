import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { FontAwesome, SimpleLineIcons } from "@expo/vector-icons"

const HEART_COLOR = "#EF4B4B"
const BUBBLES_COLOR = "#7377E1"
const TextContentExpressView = ({ heart, comments }) => (
  <View style={styles.Container}>
    <View style={styles.flex1}>
      <View style={styles.Container2}>
        <FontAwesome name="heart" color={HEART_COLOR} size={30} />
        <Text style={styles.heart}>{heart}</Text>
      </View>
      <View style={styles.Container2}>
        <SimpleLineIcons color={BUBBLES_COLOR} name="bubbles" size={30} />
        <Text style={styles.bubbles}>{comments}</Text>
      </View>
    </View>
  </View>
)

export default TextContentExpressView

const styles = StyleSheet.create({
  Container: { alignItems: "center", justifyContent: "center", padding: 20 },
  flex1: { flex: 1, flexDirection: "row" },
  Container2: {
    backgroundColor: "#EDEDED",
    width: 150,
    height: 60,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginLeft: 10,
    padding: 20,
  },
  heart: {
    color: "#EF4B4B",
    fontSize: 20,
    marginLeft: 15,
  },
  bubbles: {
    color: "#7377E1",
    fontSize: 20,
    marginLeft: 15,
  },
})
