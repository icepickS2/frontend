import React from 'react'
import { View, ScrollView } from 'react-native'
import { Avatar, Text, ListItem } from 'react-native-elements'
const ChatList = ({ navigation }) => (
    <ScrollView>
        <ListItem leftAvatar={{ title: '이룸', size: 'medium', source: { uri: 'http://file3.instiz.net/data/file3/2018/06/02/f/8/e/f8e7bfcf8b53dfd04ef6f0bb092bd19a.jpg' } }} key={1} title={'채팅방이름 or 멤버이름'} subtitle={'지난 대화 내용'} bottomDivider rightTitle="오후 04:32" 
        rightTitleStyle={{ color: '#444444' }}  
        //rightSubtitle="12:시간" 
        onPress={() => navigation.navigate('ChatRoom')} />
        <View style={{ flexDirection: 'row' }}></View>
    </ScrollView>
)

export default ChatList
