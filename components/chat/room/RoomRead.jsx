import React from 'react'
import { Text, View, ScrollView } from 'react-native'
import MsgSender from '../msg/MsgSender'
import MsgReceiver from '../msg/MsgReceiver'
import MsgInput from '../msg/MsgInput'
const RoomRead = ({ params }) => (
    <>
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
        <MsgInput />
    </>
)

export default RoomRead
