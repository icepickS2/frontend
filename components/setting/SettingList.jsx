import React from "react"
import { Text, View } from "react-native"
import SettingItems from "./SettingItems"
import SettingListItem from "./SettingListItem"
import LoginSetting from "./LoginSetting"

const SettingList = ({ params }) => (
  <View>
    <SettingListItem title={"ㅎㅇ"} backgroundColor={"#00aaff"} icon={"access-alarms"} rightTitle={"off"} hideChevron={true} checkbox={true} />

    <LoginSetting />
  </View>
)

export default SettingList
