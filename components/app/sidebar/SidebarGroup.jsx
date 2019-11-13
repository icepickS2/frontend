import React from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { ListItem, Text } from 'react-native-elements'
import { Feather, FontAwesome, AntDesign } from '@expo/vector-icons'
import SidebarItemHeader from './item/SidebarItemHeader'
import SidebarItem from './item/SidebarItem'

const SidebarGroup = ({ value, navigation }) => {
    const { HeaderTitle, lists } = value
    return (
        <View style={styles.Container}>
            <SidebarItemHeader title={HeaderTitle} />

            {lists.map((v, k) => (
                <SidebarItem {...v} key={k} navigation={navigation} />
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    Container: { borderTopWidth: 0.2, color: '#C7C6C8', paddingTop: 10 },
})

export default SidebarGroup
