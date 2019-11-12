import React, { useState } from "react"
import { ScrollView } from "react-native"
import { Header } from "react-native-elements"
import { Fab } from "native-base"
import { Foundation, AntDesign } from "@expo/vector-icons"
import CommentInputOverlay from "../../components/bbs/comment/CommentInputOverlay"
import BbsReadComponent from "../../components/bbs/BbsRead"
import CommentContainer from "./comment/CommentContainer"

const BbsRead = ({ navigation }) => {
  const [commentInput, setCommentInput] = useState(false)
  return (
    <>
      <ScrollView>
        <BbsReadComponent navigation={navigation} />
        <CommentContainer />
      </ScrollView>

      <Fab active={commentInput} direction="up" containerStyle={{}} style={{ backgroundColor: "#5067FF" }} position="bottomRight" onPress={() => setCommentInput(!commentInput)}>
        <Foundation name="pencil" />
      </Fab>
      {commentInput && <CommentInputOverlay overlay={commentInput} setoverlay={setCommentInput} />}
    </>
  )
}
BbsRead.navigationOptions = (screenProps) => ({
  header: (
    <Header
      placement="left"
      leftComponent={<AntDesign name="arrowleft" size={25} onPress={() => screenProps.navigation.goBack()} />}
      centerComponent={{ text: "MY TITLE", style: { color: "#111111" } }}
      containerStyle={{
        backgroundColor: "#fff",
        justifyContent: "center",
        borderBottomColor: "transparent",
      }}
    />
  ),
})
export default BbsRead
