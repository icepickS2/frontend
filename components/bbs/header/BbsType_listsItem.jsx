import React from "react"
import { View, TouchableOpacity, StyleSheet } from "react-native"
import { FontAwesome } from "@expo/vector-icons"
import { Text } from "react-native-elements"

const BbsType_listsItem = ({ title, type, handleOnPress }) => {
  const iconName = type === "text" ? "file-text-o" : "file-photo-o"
  return (
    <TouchableOpacity style={styles.Container} onPress={handleOnPress}>
      <View style={styles.icon}>
        <FontAwesome name={iconName} color="#444444" size={20} />
      </View>
      <Text style={styles.flex3}>
        <Text style={styles.titleText}>{title}</Text>
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
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

export default BbsType_listsItem
