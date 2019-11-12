import React from "react"
import { View, TouchableOpacity, StyleSheet } from "react-native"
import { AntDesign } from "@expo/vector-icons"
import { Text } from "react-native-elements"
const SidebarItem = ({ title, iconName, handleOnPress }) => (
  <TouchableOpacity style={styles.Container} onPress={handleOnPress}>
    <View style={styles.icon}>
      <AntDesign name={iconName} color="#444444" size={20} />
    </View>
    <Text style={styles.flex3}>
      <Text style={styles.titleText}>{title}</Text>
    </Text>
  </TouchableOpacity>
)

export default SidebarItem

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
