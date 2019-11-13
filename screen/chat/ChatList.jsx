import React from 'react'
import { View } from 'react-native'
import { Header, Text } from 'react-native-elements'
import { AntDesign, Entypo, Ionicons } from '@expo/vector-icons'
import ChatListComponent from '../../components/chat/ChatList'
const ChatList = ({ navigation }) => <ChatListComponent navigation={navigation} />

ChatList.navigationOptions = (screenProps) => ({
    header: (
        <Header
            placement="left"
            leftComponent={{ icon: 'menu', color: '#111111', onPress: () => screenProps.navigation.openDrawer() }}
            centerComponent={
                <View style={{ flexDirection: 'row' }}>
                    <Ionicons name="ios-chatbubbles" color="#444444" size={20} />
                    <Text style={{ fontSize: 20, color: '#444444', marginLeft: 15 }}>Chatting</Text>
                </View>
            }
            rightComponent={
                <View style={{ flexDirection: 'row' }}>
                    <View>
                        <AntDesign name="plus" color="#444444" size={24} onPress={() => screenProps.navigation.navigate('MemberCreate')} />
                    </View>
                    <View style={{ paddingLeft: 20, paddingRight: 10 }}>
                        <AntDesign name="search1" color="#444444" size={24} onPress={() => screenProps.navigation.navigate('MemberSearch')} />
                    </View>
                </View>
            }
            containerStyle={{
                backgroundColor: '#fff',
                justifyContent: 'center',
                borderBottomColor: 'transparent',
            }}
        />
    ),
})
export default ChatList
