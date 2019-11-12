import React from "react"
import { View, Text, StyleSheet } from "react-native"

const TextContent = ({ content }) => (
  <View style={styles.Container}>
    <View style={styles.Content}>
      <Text style={styles.heading}>{content}</Text>
    </View>
  </View>
)
const styles = StyleSheet.create({
  Container: { flex: 1, backgroundColor: "#FFFFFF" },
  Content: { flex: 1, paddingLeft: 20, paddingRight: 20, padding: 20 },
  heading: {
    color: "black",
    marginTop: 10,
    fontSize: 22,
  },
})
export default TextContent
