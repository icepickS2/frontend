import React from 'react'
import { View } from 'react-native'
import { Avatar, Text } from 'react-native-elements'
const MsgReceiver = ({ params }) => (
    <View style={{ flexDirection: 'row', paddingBottom: 10 }}>
        <View style={{ flex: 3 }}></View>
        <View style={{ flex: 6, backgroundColor: '#fff', paddingLeft: -30, paddingTop: 10, alignItems: 'flex-end' }}>
            <Text style={{ fontSize: 15, color: '#444444', padding: 5, fontWeight: 'bold' }}>이름이다</Text>
            <View style={{ padding: 10, backgroundColor: '#444444', borderRadius: 10, borderWidth: 1, borderColor: 'transparent' }}>
                <Text style={{ fontSize: 20, color: 'white', padding: 5 }}>dddddddddddddddddddddddddddddddddddddddddddddddddd</Text>
            </View>
        </View>
        <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', padding: 10 }}>
            <Avatar size="medium" rounded title="BP" onPress={() => console.log('Works!')} activeOpacity={0.7} />
        </View>
    </View>
)

export default MsgReceiver
