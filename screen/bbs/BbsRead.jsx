import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { Header } from 'react-native-elements'

import { Foundation, AntDesign } from '@expo/vector-icons'
import CommentInputOverlay from '../../components/bbs/comment/CommentInputOverlay'
import BbsReadComponent from '../../components/bbs/BbsRead'
import CommentContainer from './comment/CommentContainer'
import { FloatingAction } from 'react-native-floating-action'
const BbsRead = ({ navigation }) => {
    const [commentInput, setCommentInput] = useState(false)
    return (
        <>
            <ScrollView>
                <BbsReadComponent navigation={navigation} />
                <CommentContainer />
            </ScrollView>

            <FloatingAction
                actions={actions}
                //onPress={() => setCommentInput(!commentInput)}
                onPressItem={(name) => {
                    console.log(`selected button: ${name}`)
                }}
            />
            {commentInput && <CommentInputOverlay overlay={commentInput} setoverlay={setCommentInput} />}
        </>
    )
}
BbsRead.navigationOptions = (screenProps) => ({
    header: (
        <Header
            placement="left"
            leftComponent={<AntDesign name="arrowleft" size={25} onPress={() => screenProps.navigation.goBack()} />}
            centerComponent={{ text: 'MY TITLE', style: { color: '#111111' } }}
            containerStyle={{
                backgroundColor: '#fff',
                justifyContent: 'center',
                borderBottomColor: 'transparent',
            }}
        />
    ),
})
export default BbsRead
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
