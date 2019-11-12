import React, { Component } from "react"
import { View, Text, ScrollView, StyleSheet, TextInput, Dimensions } from "react-native"
import { Button, ButtonGroup, Icon, Input, Tile } from "react-native-elements"

const TeamCreateCompletion = ({ navigation }) => {
  return (
    <>
      <View style={styles.headerContainer}>
        <Icon color="white" name="wrench" type="font-awesome" size={62} />
        <Text style={styles.heading}>Create Team 추카추카추카</Text>
        <View style={{ paddingTop: 30 }}>
          <Button
            title="go to main"
            icon={{
              name: "arrow-right",
              type: "font-awesome",
              size: 15,
              color: "white",
            }}
            iconContainerStyle={{ marginRight: 10 }}
            buttonStyle={{
              borderColor: "#fff",
            }}
            type="outline"
            titleStyle={{ color: "#fff" }}
            onPress={() => navigation.navigate("Main")}
          />
        </View>
      </View>
    </>
  )
}

export default TeamCreateCompletion

{
  /* <TextInput multiline={true} numberOfLines={15} style={styles.heading} placeholder="content" textAlignVertical={"top"} style={{ fontSize: 17 }} /> */
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
    flex: 1,
    backgroundColor: "#292C44",
  },
  heading: {
    color: "white",
    marginTop: 10,
    fontSize: 22,
    fontWeight: "bold",
  },
  contentView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  triangleLeft: {
    position: "absolute",
    left: -20,
    bottom: 0,
    width: 0,
    height: 0,
    borderRightWidth: 20,
    borderRightColor: "white",
    borderBottomWidth: 25,
    borderBottomColor: "transparent",
    borderTopWidth: 25,
    borderTopColor: "transparent",
  },
  triangleRight: {
    position: "absolute",
    right: -20,
    top: 0,
    width: 0,
    height: 0,
    borderLeftWidth: 20,
    borderLeftColor: "white",
    borderBottomWidth: 25,
    borderBottomColor: "transparent",
    borderTopWidth: 25,
    borderTopColor: "transparent",
  },
  inputContainerStyle: {
    marginTop: 16,
    width: "90%",
  },
  keyboardAvoidingView: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
})
