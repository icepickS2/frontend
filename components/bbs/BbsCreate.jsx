import React, { useState } from "react"
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Platform, Dimensions } from "react-native"
import { Content, Item, Input, Icon, Button, Fab } from "native-base"

const BbsCreate = () => {
  const [active, setActive] = useState(false)
  return (
    <>
      <Content>
        <View style={{ padding: "1%", borderBottomWidth: 0.3, borderBottomColor: "#444444", borderTopWidth: 0.3, borderTopColor: "#444444" }}>
          <Input
            placeholder="제목"
            inputContainerStyle={{
              borderWidth: 1,
              borderColor: "white",
              borderLeftWidth: 0,
              height: 50,
              width: Dimensions.get("window").width - 80,
              backgroundColor: "white",
              color: "white",
              fontSize: 25,
            }}
            underlineColorAndroid={"transparent"}
          />
        </View>
        <View style={{ padding: "4%" }}>
          <TextInput
            multiline={true}
            numberOfLines={15}
            placeholder="content"
            textAlignVertical="top"
            style={{ fontSize: 20 }}
            inputContainerStyle={{
              borderWidth: 1,
              borderColor: "white",
              borderLeftWidth: 0,
              height: 50,
              width: Dimensions.get("window").width - 80,
              backgroundColor: "white",
              color: "white",
              fontSize: 25,
            }}
          />
        </View>
      </Content>
      <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={Platform.OS == "ios" ? 55 : 90}>
        <Fab active={active} direction="up" containerStyle={{}} style={{ backgroundColor: "#5067FF" }} position="bottomRight" onPress={() => setActive(!active)}>
          <Icon name="share" />
          <Button style={{ backgroundColor: "#34A34F" }}>
            <Icon name="logo-whatsapp" />
          </Button>
          <Button style={{ backgroundColor: "#3B5998" }}>
            <Icon name="logo-facebook" />
          </Button>
          <Button disabled style={{ backgroundColor: "#DD5144" }}>
            <Icon name="mail" />
          </Button>
        </Fab>
      </KeyboardAvoidingView>
    </>
  )
}

const styles = StyleSheet.create({})

export default BbsCreate
