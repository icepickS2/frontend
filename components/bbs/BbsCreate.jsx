import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Platform, Dimensions } from 'react-native'
import { Content, Item, Input, Icon, Button } from 'native-base'
import { AntDesign } from '@expo/vector-icons'
import { FloatingAction } from 'react-native-floating-action'
const BbsCreate = () => {
    const [active, setActive] = useState(false)
    return (
        <>
            <Content>
                <View style={{ padding: '1%', borderBottomWidth: 0.3, borderBottomColor: '#444444', borderTopWidth: 0.3, borderTopColor: '#444444' }}>
                    <Input
                        placeholder="제목"
                        inputContainerStyle={{
                            borderWidth: 1,
                            borderColor: 'white',
                            borderLeftWidth: 0,
                            height: 50,
                            width: Dimensions.get('window').width - 80,
                            backgroundColor: 'white',
                            color: 'white',
                            fontSize: 25,
                        }}
                        underlineColorAndroid={'transparent'}
                    />
                </View>
                <View style={{ padding: '4%' }}>
                    <TextInput
                        multiline={true}
                        numberOfLines={15}
                        placeholder="content"
                        textAlignVertical="top"
                        style={{ fontSize: 20 }}
                        inputContainerStyle={{
                            borderWidth: 1,
                            borderColor: 'white',
                            borderLeftWidth: 0,
                            height: 50,
                            width: Dimensions.get('window').width - 80,
                            backgroundColor: 'white',
                            color: 'white',
                            fontSize: 25,
                        }}
                    />
                </View>
            </Content>
            <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={Platform.OS == 'ios' ? 55 : 90}>
                <FloatingAction
                    actions={actions}
                    onPressItem={(name) => {
                        console.log(`selected button: ${name}`)
                    }}
                />
            </KeyboardAvoidingView>
        </>
    )
}

const styles = StyleSheet.create({})

export default BbsCreate
const actions = [
    {
        text: 'Accessibility',
        icon: <AntDesign name="arrowup" color="#00aaf0" size={20} />,
        name: 'bt_accessibility',
        position: 2,
    },
    {
        text: 'Language',
        icon: <AntDesign name="arrowup" color="#00aaf0" size={20} />,
        name: 'bt_language',
        position: 1,
    },
]
