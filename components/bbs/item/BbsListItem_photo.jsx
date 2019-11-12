import React from "react"
import { View, Text, Image, StyleSheet } from "react-native"
import { Card, ListItem, Button, Icon, Badge } from "react-native-elements"

const BbsListItem_photo = () => {
  return (
    <>
      <Card
        title={
          <View style={styles.subtitleView}>
            <Text style={{ marginBottom: 10 }}>The idea with React Native Elements is more about component structure than actual design.</Text>
            <Badge status="error" containerStyle={{ position: "absolute", top: -4, right: -4 }} />
          </View>
        }
        image={{ uri: "https://cdn-images-1.medium.com/max/800/1*PhCFmO5tYX_sZSyCd4vO3w.png" }}
      >
        <Text style={{ marginBottom: 10 }}>The idea with React Native Elements is more about component structure than actual design.</Text>
      </Card>
    </>
  )
}

export default BbsListItem_photo
const styles = StyleSheet.create({
  subtitleView: {
    flexDirection: "row",
  },
  ratingText: {
    color: "grey",
  },
})
