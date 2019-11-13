import React from 'react'
import { View } from 'react-native'
import { Header, Text } from 'react-native-elements'
import { Entypo, AntDesign } from '@expo/vector-icons'
import RoomReadComponent from '../../components/chat/room/RoomRead'

const RoomRead = ({ params }) => <RoomReadComponent />

RoomRead.navigationOptions = (screenProps) => ({
    header: (
        <Header
            placement="left"
            leftComponent={<AntDesign name="arrowleft" size={25} onPress={() => screenProps.navigation.navigate('Main')} />}
            centerComponent={{ text: 'MY TITLE', style: { color: '#111111' } }}
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

export default RoomRead
