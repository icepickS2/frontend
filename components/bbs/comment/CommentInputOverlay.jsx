import React, { useState } from 'react'
import { Overlay, Text } from 'react-native-elements'
import { MaterialIcons, SimpleLineIcons } from '@expo/vector-icons'
import { View, StyleSheet, Dimensions, TextInput } from 'react-native'
const SCREEN_WIDTH = Dimensions.get('window').width

const CommentInputOverlay = ({ overlay, setoverlay }) => (
    <Overlay windowBackgroundColor="rgba(255, 255, 255, .5)" overlayBackgroundColor="white" width={SCREEN_WIDTH * 0.8} height={'auto'} onBackdropPress={() => setoverlay(!overlay)}>
        <View style={styles.Container}>
            <View style={styles.icon}>
                <SimpleLineIcons color="#444444" name="bubbles" size={40} style={{ top: 15 }} />
            </View>
            <Text style={styles.flex3}>
                <Text style={styles.titleText}>Comments</Text>
            </Text>
        </View>
        <View style={{ flexDirection: 'row', paddingTop: 40, paddingBottom: 10, borderBottomWidth: 0.3 }}>
            <View style={{ flex: 5 }}>
                <TextInput multiline={true} numberOfLines={3} placeholder="content" textAlignVertical={'top'} style={{ fontSize: 17, paddingLeft: 20, paddingRight: 20, width: '90%' }} />
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <MaterialIcons name="keyboard-return" size={30} color="#444444" />
            </View>
        </View>
    </Overlay>
)

export default CommentInputOverlay
const styles = StyleSheet.create({
    Container: {
        flexDirection: 'row',
        width: '100%',
        height: 40,
        paddingTop: 30,

        padding: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    heading: {
        color: 'white',
        marginTop: 10,
        fontSize: 22,
        fontWeight: 'bold',
    },
    titleText: { fontSize: 25, color: '#444444', paddingLeft: 15, fontWeight: 'bold' },
    flex3: { flex: 3 },
})
