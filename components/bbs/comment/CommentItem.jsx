import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { Avatar, Icon, Badge} from "react-native-elements"
import { Content } from "native-base"
import { Entypo } from "@expo/vector-icons"

const CommentItem = ({ params }) => (
  <Content>
    <View style={{ flexDirection: "row", padding: 8, borderColor: "#505050", borderBottomWidth: 0.3, paddingBottom: 15, paddingTop: 15 }}>
      <View style={{ flex: 2, alignItems: "center", paddingLeft: 15 }}>
        <Avatar rounded size="medium" source={{ uri: "https://pbs.twimg.com/media/DFAas-3UAAEDV27.jpg" }} />
      </View>
      <View style={{ flex: 12 }}>
        <View style={{ paddingLeft: 15 }}>
          <Text style={{ paddingBottom: 3, color: "grey", fontSize: 12 }}>댔쓰니 12:14</Text>
          <Badge
    status="error"
    containerStyle={{ position: 'absolute', top: 1, right: -5 }}
  />
          <Text style={{ color: "black", fontSize: 15 }}>대끌쌀라쌀라쌀라쌀라라쌀라쌀라라쌀라쌀라라쌀라쌀라라쌀라쌀라라쌀라쌀라라쌀라쌀라라쌀라쌀라쌀라쌀라쌀라쌀라쌀라쌀라쌀라쌀라쌀라쌀라쌀라쌀라쌀라쌀라쌀라쌀라</Text>
        </View>
      </View>
      <View style={{ flex: 1, justifyContent: "flex-start", alignItems: "center" }}>
        <Entypo name="dots-three-vertical" color="#505050" size={10} />
      </View>
    </View>
  </Content>
)
const styles = StyleSheet.create({})
export default CommentItem
