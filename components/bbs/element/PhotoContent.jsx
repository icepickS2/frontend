import React from "react"
import { Text, View, Dimensions, ActivityIndicator } from "react-native"
import { Image } from "react-native-elements"

const SCREEN_WIDTH = Dimensions.get("window").width
const PhotoContent = ({ uri, content }) => {
  return (
    <>
      <View style={{ width: SCREEN_WIDTH, backgroundColor: "transparent" }}>
        <Image source={{ uri: "https://i.ytimg.com/vi/8b4SpsLRISU/maxresdefault.jpg" }} style={{ resizeMode: "contain", width: "100%", height: "100%" }}   PlaceholderContent={<ActivityIndicator />}/>
      </View>
      <Text>{content}</Text>
    </>
  )
}
export default PhotoContent
