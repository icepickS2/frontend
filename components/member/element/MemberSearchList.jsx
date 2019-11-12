import React from "react"
import { Text, View, ScrollView } from "react-native"
import { ListItem } from "react-native-elements"
import MemberListItem from "../MemberListItem"

const searchResult = {
  people: [
    {
      name: "Amy Farha",
      avatar_url: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
      subtitle: "Vice President",
      linearGradientColors: ["#FF9800", "#F44336"],
    },
    {
      name: "Chris Jackson",
      avatar_url: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
      subtitle: "Vice Chairman",
      linearGradientColors: ["#3F51B5", "#2196F3"],
    },
    {
      name: "Amanda Martin",
      avatar_url: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg",
      subtitle: "CEO",
      linearGradientColors: ["#FFD600", "#FF9800"],
    },
    {
      name: "Christy Thomas",
      avatar_url: "https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg",
      subtitle: "Lead Developer",
      linearGradientColors: ["#4CAF50", "#8BC34A"],
    },
    {
      name: "Melissa Jones",
      avatar_url: "https://s3.amazonaws.com/uifaces/faces/twitter/nuraika/128.jpg",
      subtitle: "CTO",
      linearGradientColors: ["#F44336", "#E91E63"],
    },
    {
      name: "Amanda Martin",
      avatar_url: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg",
      subtitle: "CEO",
      linearGradientColors: ["#FFD600", "#FF9800"],
    },
    {
      name: "Christy Thomas",
      avatar_url: "https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg",
      subtitle: "Lead Developer",
      linearGradientColors: ["#4CAF50", "#8BC34A"],
    },
    {
      name: "Melissa Jones",
      avatar_url: "https://s3.amazonaws.com/uifaces/faces/twitter/nuraika/128.jpg",
      subtitle: "CTO",
      linearGradientColors: ["#F44336", "#E91E63"],
    },
  ],
}

const MemberSearchList = ({ navigation }) => {
  const { people } = searchResult
  return (
    <ScrollView>
      {people.map((l, k) => (
        <ListItem leftAvatar={{ title: l.name[0], source: { uri: l.avatar_url } }} key={k} title={l.name} subtitle={l.subtitle} bottomDivider rightTitle="11:00am" rightTitleStyle={{ color: "green" }} chevron rightSubtitle="12:00am" onPress={() => navigation.navigate("MemberRead")} />
      ))}
    </ScrollView>
  )
}
export default MemberSearchList
