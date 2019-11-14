import React from 'react'
import { Text, View, Dimensions } from 'react-native'
import { Input, Button, Icon } from 'react-native-elements'
const UserUpdate = ({ params }) => (
    <View>
        <View style={{ justifyContent: 'center', alignContent: 'center' }}>
            <Input
                leftIcon={<Icon name="user" type="simple-line-icon" color="#444444" size={25} />}
                placeholder="name"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                returnKeyType="next"
                inputContainerStyle={{
                    borderBottomColor: 'transparent',
                    height: 50,
                    width: Dimensions.get('window').width - 80,
                }}
                // placeholderStyle={{
                //     color: 'transparent',
                //     fontSize: 30,
                // }}
            />
        </View>
    </View>
)

export default UserUpdate
