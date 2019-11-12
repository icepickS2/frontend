import React from "react"
import UserFindInfoComponent from "../../components/auth/UserFindInfo"

const UserFindInfo = ({ navigation }) => {
  return <UserFindInfoComponent navigation={navigation} />
}
UserFindInfo.navigationOptions = {
  header: null,
}
export default UserFindInfo
