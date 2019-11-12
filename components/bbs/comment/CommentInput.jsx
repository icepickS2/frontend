import React from "react"
import { Text, View, StyleSheet, TextInput, KeyboardAvoidingView } from "react-native"
import { Input, Button, Icon } from "react-native-elements"
import { SimpleLineIcons, MaterialIcons, AntDesign } from "@expo/vector-icons"
const CommentInput = ({ params }) => (
  <>
    <View style={styles.Container}>
      <View style={styles.icon}>
        <SimpleLineIcons color="#444444" name="bubbles" size={40} style={{ top: 15 }} />
      </View>
      <Text style={styles.flex3}>
        <Text style={styles.titleText}>Comments</Text>
      </Text>
    </View>
  </>
)

export default CommentInput
const styles = StyleSheet.create({
  Container: { flexDirection: "row", width: "100%", height: 40, paddingTop: 30,paddingBottom:40,padding:40, justifyContent: "center", alignItems: "center", borderTopWidth: 10, borderTopColor: "#C8C6C6" },
  icon: { flex: 1, justifyContent: "center", alignItems: "center" },
  heading: {
    color: "white",
    marginTop: 10,
    fontSize: 22,
    fontWeight: "bold",
  },
  titleText: { fontSize: 25, color: "#444444", paddingLeft: 15, fontWeight: "bold" },
  flex3: { flex: 3 },
})
