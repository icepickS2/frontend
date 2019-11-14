import React from '~/components/app/button/node_modules/react'
import { withNavigation } from 'react-navigation'
import { AntDesign } from '~/components/app/button/node_modules/@expo/vector-icons'
const GoBackIcon = ({ navigation }) => <AntDesign name="arrowleft" size={25} onPress={() => navigation.goBack()} />

export default withNavigation(GoBackIcon)
