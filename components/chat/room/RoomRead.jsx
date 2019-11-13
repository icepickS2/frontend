import React from 'react'
import { Text, View, ScrollView } from 'react-native'
import MsgSender from '../msg/MsgSender'
import MsgReceiver from '../msg/MsgReceiver'
const RoomRead = ({ params }) => (
    <ScrollView>
        <MsgSender />
        <MsgReceiver />
        <MsgSender />
        <MsgReceiver />
        <MsgSender />
        <MsgReceiver />
        <MsgSender />
        <MsgReceiver />
        <MsgSender />
        <MsgReceiver />
    </ScrollView>
)

export default RoomRead
