import { createSwitchNavigator, createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import { createDrawerNavigator } from "react-navigation-drawer"
import { createBottomTabNavigator } from "react-navigation-tabs"
import Options from "./navigationOptions"
import Test from "./Test"
import AuthStack from "./stack/AuthStack"
import { MemberStack, ScheduleStack, ChatStack, BbsStack } from "./stack/MainTabStack"
import MemberRead from "./member/MemberRead"
import BbsCreate from "./bbs/BbsCreate"
import TeamCreate from "./team/TeamCreate"
import TeamCreateCompletion from "./team/TeamCreateCompletion"
import ActivityList from "./activity/ActivityList"
import SettingList from "./setting/SettingList"
const ActivityStack = createStackNavigator({
  ActivityMain: { screen: ActivityList },
})

const SettingStack = createStackNavigator({
  SettingList: { screen: SettingList },
})

const MainTab = createBottomTabNavigator(
  {
    Member: { screen: MemberStack, ...Options.MainTab.member },
    Schedule: { screen: ScheduleStack, ...Options.MainTab.schedule },
    Chat: { screen: ChatStack, ...Options.MainTab.chat },
    Bbs: { screen: BbsStack, ...Options.MainTab.bbs },
  },
  Options.MainTab,
)
const Drawer = createDrawerNavigator(
  {
    Main: {
      screen: MainTab,
      ...Options.Drawer.maintab,
    },
    Setting: {
      screen: SettingStack,
      ...Options.Drawer.setting,
    },
    Activity: {
      screen: ActivityStack,
      ...Options.Drawer.activity,
    },
  },
  Options.Drawer.main,
)
const BbsCreateStack = createStackNavigator({
  BbsCreate: { screen: BbsCreate },
})
const ChatRoomStack = createStackNavigator({
  ChatRoomMain: { screen: Test },
})
const TeamCreateStack = createStackNavigator(
  {
    TeamCreate: { screen: TeamCreate },
    TeamCreateCompletion: { screen: TeamCreateCompletion },
  },
  {
    headerMode: "none",
  },
)

const AppStack = createStackNavigator(
  {
    Main: Drawer,
    MemberRead: { screen: MemberRead },
    ChatRoom: { screen: ChatRoomStack },
    BbsCreate: { screen: BbsCreateStack },
    Promotion01: { screen: Test },
    TeamCreate: { screen: TeamCreateStack },
  },
  Options.AppStack,
)

const App = createSwitchNavigator({
  loading: { screen: Test },
  Auth: { screen: AuthStack },
  App: { screen: AppStack },
})

export default createAppContainer(App)
