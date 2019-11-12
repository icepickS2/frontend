import React from "react"
import { View, Text, Image, StyleSheet } from "react-native"
import { Card, ListItem, Button, Icon, Badge } from "react-native-elements"

const BbsListItem_general = ({ navigation }) => {
  return (
    <>
      <ListItem
        title={"당이 땡긴다... >_<"}
        leftAvatar={{ source: { uri: "https://cdn-images-1.medium.com/max/800/1*PhCFmO5tYX_sZSyCd4vO3w.png" }, rounded: false }}
        subtitle={
          <>
            <View style={styles.subtitleView}>
              <Text style={styles.ratingText}>천의령 팀장님 15:32</Text>
              <Badge status="error" containerStyle={{ top: 8, right: -6 }} />
            </View>
            <Text style={styles.ratingText}>잡담</Text>
          </>
        }
        rightSubtitle={
          <View
            style={{
              backgroundColor: "rgba(220,230,218,1)",
              width: 70,
              height: 28,
              borderRadius: 5,
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              marginLeft: 10,
            }}
          >
            <Icon name="md-arrow-dropup" type="ionicon" color="green" size={25} />
            <Text
              style={{
                color: "green",
                fontSize: 13,
                marginLeft: 5,
              }}
            >
              1234
            </Text>
          </View>
        }
      />
      <ListItem
        title={"집에 가고 싶어여.... >_<"}
        subtitle={
          <>
            <View style={styles.subtitleView}>
              <Text style={styles.ratingText}>김민수 팀장님 15:34 조회 234</Text>
              <Badge status="error" containerStyle={{ top: 8, right: -6 }} />
            </View>
            <Text style={styles.ratingText}>잡담</Text>
          </>
        }
        rightSubtitle={
          <View
            style={{
              backgroundColor: "rgba(220,230,218,1)",
              width: 70,
              height: 28,
              borderRadius: 5,
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              marginLeft: 10,
            }}
          >
            <Icon name="md-arrow-dropup" type="ionicon" color="green" size={25} />
            <Text
              style={{
                color: "green",
                fontSize: 13,
                marginLeft: 5,
              }}
            >
              12 대끌수
            </Text>
          </View>
        }
        onPress={() => navigation.navigate("BbsRead")}
      />
    </>
  )
}

export default BbsListItem_general
const styles = StyleSheet.create({
  subtitleView: {
    flexDirection: "row",
  },
  ratingText: {
    color: "grey",
  },
})
