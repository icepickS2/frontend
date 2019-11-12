import React from "react"
import { View } from "react-native"
import { Header, Text } from "react-native-elements"
import { AntDesign } from "@expo/vector-icons"

import ActivityListComponent from "../../components/activity/ActivityList"
const ActivityList = ({ params }) => <ActivityListComponent />

ActivityList.navigationOptions = (screenProps) => ({
  header: (
    <Header
      placement="left"
      leftComponent={<AntDesign name="arrowleft" size={25} onPress={() => screenProps.navigation.navigate("Main")} />}
      centerComponent={
        <View style={{ flexDirection: "row" }}>
          <AntDesign name="clockcircleo" color="#444444" size={20} />
          <Text style={{ fontSize: 20, color: "#444444", marginLeft: 15 }}>Activity Log</Text>
        </View>
      }
      containerStyle={{
        backgroundColor: "#fff",
        justifyContent: "center",
        borderBottomColor: "transparent",
      }}
    />
  ),
})

export default ActivityList
