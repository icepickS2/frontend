import { createStackNavigator } from "react-navigation-stack"
import Options from "../navigationOptions"
import Test from "../Test"
import UserAccess from "../auth/UserAccess"
import UserCreate from "../auth/UserCreate"
import UserFindInfo from "../auth/UserFindInfo"

const AuthStack = createStackNavigator(
  {
    Login: { screen: UserAccess },
    Create: { screen: UserCreate },
    FindInfo: { screen: UserFindInfo },
    ResetPassword: { screen: Test },
  },
  Options.AuthStack,
)

export default AuthStack
