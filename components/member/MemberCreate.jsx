import React from "react"
import { Text, View, Dimensions } from "react-native"
import { Input, Button } from "react-native-elements"
import { MaterialIcons, AntDesign } from "@expo/vector-icons"
const MemberCreate = ({ params }) => (
  <View
    style={{
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <MaterialIcons name="person-add" color="#00aaf0" size={100} />
    <Text style={{ color: "#00aaf0", marginTop: 10, fontSize: 22, fontWeight: "bold" }}>Member Add</Text>
    <View style={{ width: "70%", justifyContent: "center", alignItems: "center" }}>
      <Input
        placeholder="please write user email"
        inputContainerStyle={{
          borderWidth: 1,
          borderColor: "transparent",
          borderLeftWidth: 0,
          height: 50,
          width: Dimensions.get("window").width - 80,
        }}
      />

      <Button
        title="add user"
        buttonStyle={{
          backgroundColor: "#00aaf0",
          borderRadius: 3,
        }}
        icon={<AntDesign name="adduser" size={25} color="#fff" />}
        containerStyle={{ height: 40, paddingTop: 30 }}
        titleStyle={{ marginHorizontal: 20, color: "#fff" }}
        onPress={() => {}}
      />
    </View>
  </View>
)

export default MemberCreate
