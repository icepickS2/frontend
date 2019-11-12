import React from "react"
import { View, TouchableOpacity, StyleSheet } from "react-native"
import { Text } from "react-native-elements"
import { FontAwesome } from "@expo/vector-icons"
import ActivityItem from "./ActivityItem"
const log = {
  today: [],
  yesterday: [],
  week: [],
  month: [{ id: "kiki", type: "chat", count: 10, uri: "dasdfasdf" }],
}

const ActivityDateItem = ({ logData }) => (
  <View>
    <View style={[styles.Container, { backgroundColor: "#ffffff" }]} onPress={() => setIsClosed(!isClosed)}>
      <View style={styles.icon}>
        <FontAwesome name={"calendar"} color="#444444" size={20} />
      </View>
      <Text style={styles.flex3}>
        <Text style={styles.titleText}>today</Text>
      </Text>
    </View>
    <ActivityItem />
    <ActivityItem />
    <ActivityItem />
  </View>
)

export default ActivityDateItem
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
