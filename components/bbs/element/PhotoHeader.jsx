import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { Avatar, Icon } from "react-native-elements"
import { Content } from "native-base"

const PhotoHeader = ({ title, writer, time, comments }) => (
  <Content>
    <View style={styles.Container}>
      <View style={styles.Avatar}>
        <Avatar rounded size="large" source={{ uri: "https://pbs.twimg.com/media/DFAas-3UAAEDV27.jpg" }} />
      </View>
      <View style={styles.flex3}>
        <View style={styles.title}>
          <Text style={styles.titleText}>{title}</Text>
          <Text style={styles.writerText}>
            {writer} | {time}
          </Text>
        </View>
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.background}>
          <Icon name="md-arrow-dropup" type="ionicon" color="green" size={25} />
          <Text style={styles.numberText}>{comments}</Text>
        </View>
      </View>
    </View>
  </Content>
)
const styles = StyleSheet.create({
  Container: { flexDirection: "row", paddingTop: 20, paddingBottom: 20, paddingLeft: 20, paddingRight: 20, padding: 20 },
  Avatar: { flex: 1, alignItems: "center" },
  flex3: { flex: 3 },
  title: { paddingHorizontal: 10, paddingVertical: 10, paddingLeft: 15 },
  titleText: { fontWeight: "bold", paddingBottom: 10, color: "black", fontSize: 15 },
  writerText: { color: "grey", fontSize: 10 },
  rightContainer: { flex: 1, alignItems: "center", justifyContent: "center" },
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

export default PhotoHeader
