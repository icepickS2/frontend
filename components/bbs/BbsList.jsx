import React, { useState } from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import BbsListItem_photo from './item/BbsListItem_photo'
import BbsListItem_general from './item/BbsListItem_general'
import { Foundation, AntDesign } from '@expo/vector-icons'
import { Fab } from 'native-base'
import BbsListHeader from './header/BbsListHeader'

import { FloatingAction } from 'react-native-floating-action'

const BbsList = ({ navigation }) => {
    const [active, setActive] = useState(true)
    return (
        <>
            <BbsListHeader navigation={navigation} />
            <ScrollView>
                {/* <BbsListItem_photo /> */}
                <BbsListItem_general navigation={navigation} />
            </ScrollView>

            <FloatingAction
                actions={actions}
                onPressItem={(name) => {
                    console.log(`selected button: ${name}`)
                }}
            />
        </>
    )
}

export default BbsList
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
