import React from "react"
import { View, ScrollView, StyleSheet, Image, FlatList, Button, SafeAreaView, Dimensions } from "react-native"
import { Text, Card, Tile, Icon, Avatar, ListItem } from "react-native-elements"
//import { LinearGradient } from "expo-linear-gradient"
import MemberListItem from "./MemberListItem"

const SCREEN_WIDTH = Dimensions.get("window").width
const addressAll = {
  members: [
    {
      groupName: "HR",
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
    },
    {
      groupName: "develop",
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
    },
    ,
    {
      groupName: "inte",
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
    },
  ],
}

const MemberList = ({ navigation }) => {
  const { members } = addressAll
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          backgroundColor: "white",
          alignItems: "center",
          marginHorizontal: 10,
          height: 250,
          marginBottom: 20,
        }}
      >
        <View style={{ flex: 3, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
          <View style={{ flex: 1, alignItems: "flex-end", marginRight: 30 }}>
            <Avatar
              width={145}
              height={145}
              source={{
                uri: "https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg",
              }}
              activeOpacity={0.7}
              rounded
              title={"team name"}
              avatarStyle={{}}
              overlayContainerStyle={{ backgroundColor: "transparent" }}
            />
          </View>
          <View style={{ flex: 1, marginRight: 30 }}>
            <Text
              style={{
                fontSize: 25,
                color: "#444444",
                marginLeft: 15,
              }}
            >
              ICE PICK
            </Text>
          </View>
        </View>
        <Text
          style={{
            fontSize: 18,
            color: "#444444",
            marginLeft: 15,
          }}
        >
          안녕하세요 여기오신것을 환영합니다.
        </Text>
      </View>
      <View>
        <MemberListItem item={tt} iconColor={"#FFD600"} navigation={navigation} defaultOpen={true} />
      </View>
      <View style={styles.list}>
        {members.map((v, k) => (
          <MemberListItem key={k} item={v} navigation={navigation} />
        ))}
      </View>
    </ScrollView>
  )
}

export default MemberList

const styles = StyleSheet.create({
  list: {
    marginTop: 20,
    borderTopWidth: 1,
    borderColor: "#fff",
    backgroundColor: "#fff",
  },
})

const tt = {
  groupName: "즐겨찾기",
  iconName: "star",
  people: [
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
