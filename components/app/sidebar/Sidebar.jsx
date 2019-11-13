import React from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import SidebarGroup from './SidebarGroup'
import SidebarItem from './item/SidebarItem'
import SidebarItemHeader from './item/SidebarItemHeader'
import SidebarProfile from './SidebarProfile'
import Elements from './element'

const test = [
    {
        title: 'test1',
        iconName: 'team',
        onTeamChange: () => {
            console.log(11)
        },
    },
    {
        title: 'test2',
        iconName: 'team',
        onTeamChange: () => {
            console.log(11)
        },
    },
]
const Sidebar = ({ navigation }) => {
    const drawerItem = Elements(test)

    return (
        <>
            <SidebarProfile username={'히히히'} userEmail={'이메일잉ㅇ닝당'} userProfile={'https://scontent-lhr3-1.cdninstagram.com/vp/e9f78b9120306d3d8a22981db637f03b/5E3AB8AD/t51.2885-15/e35/32951951_184081422311588_2240660081563664384_n.jpg?_nc_ht=scontent-lhr3-1.cdninstagram.com&_nc_cat=108&ig_cache_key=MTc5MTEzMjgwOTgzOTE5ODAwMw%3D%3D.2'} navigation={navigation} />
            <ScrollView>
                {drawerItem.map((v, k) => {
                    return <SidebarGroup navigation={navigation} value={v} key={k} />
                })}
            </ScrollView>
        </>
    )
}
export default Sidebar
