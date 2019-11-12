import React from "react"
import UserCreateComponent from "../../components/auth/UserCreate"

const UserCreate = ({ navigation }) => {
  return <UserCreateComponent navigation={navigation} />
}
UserCreate.navigationOptions = {
  header: null,
}
export default UserCreate
