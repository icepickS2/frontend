import React, { useState } from "react"
import { StyleSheet, Dimensions, TouchableOpacity, View, Text } from "react-native"
import { ListItem } from "react-native-elements"
import { AntDesign } from "@expo/vector-icons"
const SCREEN_WIDTH = Dimensions.get("window").width
const MemberListItem = ({ navigation, item, iconColor, defaultOpen }) => {
  const [isClosed, setIsClosed] = useState(defaultOpen ? defaultOpen : false)
  const { groupName, people, iconName } = item

  return (
    <>
      <TouchableOpacity style={[styles.Container, { backgroundColor: "#fff" }]} onPress={() => setIsClosed(!isClosed)}>
        <View style={styles.icon}>
          <AntDesign name={iconName ? iconName : "folder1"} color={iconColor} size={20} />
        </View>
        <Text style={styles.flex3}>
          <Text style={styles.titleText}>{groupName}</Text>
        </Text>
      </TouchableOpacity>

      {isClosed && people.map((l, k) => <ListItem leftAvatar={{ title: l.name[0], source: { uri: l.avatar_url } }} key={k} title={l.name} subtitle={l.subtitle} bottomDivider rightTitle="11:00am" rightTitleStyle={{ color: "green" }} chevron rightSubtitle="12:00am" onPress={() => navigation.navigate("MemberRead")} />)}
    </>
  )
}

export default MemberListItem
const styles = StyleSheet.create({
  Container: { flexDirection: "row", width: "100%", height: 40, padding: 10, justifyContent: "center", alignItems: "center" },
  icon: { flex: 1, justifyContent: "center", alignItems: "center" },
  heading: {
    color: "white",
    marginTop: 10,
    fontSize: 22,
    fontWeight: "bold",
  },
  titleText: { fontSize: 20, color: "#444444", paddingLeft: 15 },
  flex3: { flex: 9 },
})
