import React from 'react'
import { View, Dimensions, KeyboardAvoidingView } from 'react-native'
import { Footer } from 'native-base'
import { Text, Input, Icon } from 'react-native-elements'
const MsgInput = ({ params }) => (
    <KeyboardAvoidingView>
        <Footer>
            <View>
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
                    placeholderStyle={{
                        color: 'transparent',
                        fontSize: 30,
                    }}
                />
            </View>
        </Footer>
    </KeyboardAvoidingView>
)

export default MsgInput
