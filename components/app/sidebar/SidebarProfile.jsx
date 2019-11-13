import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { Avatar } from 'react-native-elements'
import { AntDesign } from '@expo/vector-icons'
const SidebarProfile = ({ username, userEmail, userProfile, navigation }) => {
    return (
        <View style={{ backgroundColor: '#00AAF0' }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', padding: 15, marginBottom: 5 }}>
                <View style={{ marginTop: 40, justifyContent: 'center', alignItems: 'center' }}>
                    <Avatar source={{ uri: userProfile ? userProfile : 'https://abs.twimg.com/sticky/default_profile_images/default_profile_6_400x400.png' }} size="xlarge" rounded title={username} onPress={() => console.log('Works!')} activeOpacity={0.7} />
                </View>
            </View>

            <View style={{ flexDirection: 'row', paddingLeft: 20, paddingRight: 20 }}>
                <Text style={styles.usernameText}>{username}</Text>
                <AntDesign style={{ bottom: -15, paddingLeft: 5 }} name="edit" size={20} color="white" onPress={() => navigation.navigate('ModifyInfo')} />
            </View>
            <View style={{ paddingBottom: 20, paddingLeft: 20, paddingRight: 20 }}>
                <Text style={styles.emailText}>{userEmail}</Text>
            </View>
        </View>
    )
}

export default SidebarProfile
const styles = StyleSheet.create({
    headerContainer: {},
    usernameText: {
        color: 'white',
        marginTop: 10,
        fontSize: 22,
        fontWeight: 'bold',
    },
    emailText: {
        color: 'white',
        marginTop: 10,
        fontSize: 15,
        fontWeight: 'bold',
    },
})
