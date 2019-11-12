import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { Avatar, Icon } from "react-native-elements"
import { SimpleLineIcons } from "@expo/vector-icons"
const LoginSetting = ({ params }) => (
  <>
    <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
      <SimpleLineIcons name="login" color="grey" size={30} />
      <Text style={{ paddingLeft: 20, fontWeight: "bold", color: "grey", fontSize: 20 }}>로그인 정보</Text>
    </View>
    <View style={styles.Container}>
      <View style={styles.Avatar}>
        <Avatar rounded size="large" source={{ uri: "https://pbs.twimg.com/media/DFAas-3UAAEDV27.jpg" }} />
      </View>
      <View style={styles.flex3}>
        <View style={styles.title}>
          <Text style={styles.titleText}>이름</Text>
          <Text style={styles.writerText}>emailaddress@eamil.com</Text>
        </View>
      </View>
    </View>
  </>
)

export default LoginSetting
const styles = StyleSheet.create({
  Container: { flexDirection: "row", paddingTop: 20, paddingBottom: 20, paddingLeft: 20, paddingRight: 20, padding: 20 },
  Avatar: { flex: 1, alignItems: "center" },
  flex3: { flex: 5 },
  title: { paddingHorizontal: 10, paddingVertical: 10, paddingLeft: 15 },
  titleText: { fontWeight: "bold", paddingBottom: 10, color: "black", fontSize: 15 },
  writerText: { fontWeight: "bold", color: "grey", fontSize: 15 },
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
