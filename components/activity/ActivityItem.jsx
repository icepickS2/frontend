import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { Avatar, Icon } from "react-native-elements"
import { Content } from "native-base"

const ActivityItem = ({}) => (
  <>
    <View style={styles.Container}>
      <View style={styles.Avatar}>
        <Avatar rounded size="medium" source={{ uri: "https://i.pinimg.com/236x/dd/80/36/dd80366f4136598855f0509f367b0261.jpg" }} />
      </View>
      <View style={styles.flex3}>
        <View style={styles.title}>
          <Text style={{ color: "#444444", fontSize: 15 }}>#########가 히히해서 히ㅣ히해해히햏#########가 히히해서 히ㅣ히해해히햏했는데 히히하란다#########가 히히해서 히ㅣ히해해히햏했는데 히히하란다#########가 히히해서 히ㅣ히해해히햏했는데 히히하란다했는데 히히하란다</Text>
          <Text style={{ color: "#444444", fontSize: 10 }}> @@@@시간 </Text>
        </View>
      </View>
    </View>
  </>
)
const styles = StyleSheet.create({
  Container: { flexDirection: "row", paddingTop: 20, paddingBottom: 20, paddingLeft: 20, paddingRight: 20, padding: 20 },
  Avatar: { flex: 1, alignItems: "center" },
  flex3: { flex: 6 },
  title: { paddingHorizontal: 10, paddingVertical: 10, paddingLeft: 15 },
  background: {
    backgroundColor: "#EBEAEA",
    width: 50,
    height: 50,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginLeft: 10,
  },
  numberText: {
    color: "green",
    fontSize: 13,
    marginLeft: 5,
  },
})
export default ActivityItem
