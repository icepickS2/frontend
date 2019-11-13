import { createStackNavigator } from 'react-navigation-stack'
import MemberList from '../member/MemberList'
import BbsList from '../bbs/BbsList'
import Test from '../Test'
import BbsRead from '../bbs/BbsRead'
import MemberCreate from '../member/MemberCreate'
import MemberSearch from '../member/MemberSearch'
import BbsSearch from '../bbs/BbsSearch'
import ChatList from '../chat/ChatList'
export const MemberStack = createStackNavigator({
    MemberList: { screen: MemberList },
    MemberCreate: { screen: MemberCreate },
    MemberSearch: { screen: MemberSearch },
})
export const ScheduleStack = createStackNavigator({
    Schedule_Month: { screen: Test },
})
export const ChatStack = createStackNavigator({
    ChatList: { screen: ChatList },
})
export const BbsStack = createStackNavigator({
    BbsMain: { screen: BbsList },
    BbsRead: { screen: BbsRead },
    BbsSearch: { screen: BbsSearch },
})
