import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Options from './navigationOptions'
import Test from './Test'
import AuthStack from './stack/AuthStack'
import { MemberStack, ScheduleStack, ChatStack, BbsStack } from './stack/MainTabStack'
import MemberRead from './member/MemberRead'
import BbsCreate from './bbs/BbsCreate'
import TeamCreate from './team/TeamCreate'
import TeamCreateCompletion from './team/TeamCreateCompletion'
import ActivityList from './activity/ActivityList'
import SettingList from './setting/SettingList'
import BookmarkList from './bookmark/BookmarkList'
import RoomRead from './chat/RoomRead'
import UserUpdate from './user/UserUpdate'
const ActivityStack = createStackNavigator({
    ActivityMain: { screen: ActivityList },
})
const UserStack = createStackNavigator({
    ModifyInfo: { screen: UserUpdate },
})
const SettingStack = createStackNavigator({
    SettingList: { screen: SettingList },
})
const BookmarkStack = createStackNavigator({
    Bookmark: { screen: BookmarkList },
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
        Main: { screen: MainTab },
        Home: { screen: Test },
        Bookmark: { screen: BookmarkStack },
        Setting: { screen: SettingStack },
        Activity: { screen: ActivityStack },
        userModify: { screen: UserStack },
    },
    Options.Drawer.main,
)

const BbsCreateStack = createStackNavigator({
    BbsCreate: { screen: BbsCreate },
})
const ChatRoomStack = createStackNavigator({
    ChatRoomMain: { screen: RoomRead },
})
const TeamCreateStack = createStackNavigator(
    {
        TeamCreate: { screen: TeamCreate },
        TeamCreateCompletion: { screen: TeamCreateCompletion },
    },
    {
        headerMode: 'none',
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
