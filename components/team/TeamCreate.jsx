import React, { Component } from "react"
import { View, Text, ScrollView, StyleSheet, TextInput, Dimensions } from "react-native"
import { Button, ButtonGroup, Icon, Input, Tile } from "react-native-elements"

const SCREEN_WIDTH = Dimensions.get("window").width

const TeamCreate = ({ navigation }) => {
  return (
    <>
      <View style={styles.headerContainer}>
        <Icon color="white" name="wrench" type="font-awesome" size={62} />
        <Text style={styles.heading}>Create Team</Text>
        <Tile
          imageSrc={{
            uri: "https://images.squarespace-cdn.com/content/v1/5477887ae4b07c97883111ab/1474363728860-6JTDG9X57ZWV4GPF22SB/ke17ZwdGBToddI8pDm48kCODrNtbcuYH7-tCzItriTR7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0geeCvn1f36QDdcifB7yxGil1S52LO7OFJ9VSg5prgfv6LcGlOWReXeb5jU_5wp_mQ/Porthmeor+Sunset+21.jpg?format=300w",
          }}
          title="Photo"
          titleStyle={{ fontSize: 20 }}
          featured
          //caption="Mahatma Gandhi"
          activeOpacity={1}
          width={310}
          style={{
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            paddingBottom: 30,
          }}
        />
        <View style={{ width: "90%" }}>
          <View style={{ padding: 20 }}></View>
          <Input
            leftIcon={<Icon name="user" type="simple-line-icon" color="#fff" size={25} />}
            placeholder="Team Name"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            returnKeyType="next"
            // ref={(input) => (this.usernameInput = input)}
            // onSubmitEditing={() => {
            //   this.email2Input.focus()
            // }}
          />
          <Input
            leftIcon={<Icon name="user" type="simple-line-icon" color="#fff" size={25} />}
            placeholder="discription"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            returnKeyType="next"
            // ref={(input) => (this.usernameInput = input)}
            // onSubmitEditing={() => {
            //   this.email2Input.focus()
            // }}
          />
        </View>
        <View style={{ paddingTop: 30, flexDirection: "row" }}>
          <Button
            icon={{
              name: "arrow-left",
              type: "font-awesome",
              size: 15,
              color: "white",
            }}
            iconContainerStyle={{ marginRight: 10 }}
            title="cancel"
            type="clear"
            titleStyle={{ color: "#fff" }}
            onPress={() => navigation.navigate("Main")}
          />
          <Button
            title="create"
            buttonStyle={{
              backgroundColor: "rgba(244, 244, 244, 1)",
              borderRadius: 3,
            }}
            containerStyle={{ height: 40, paddingLeft: 40 }}
            titleStyle={{ marginHorizontal: 20, color: "#00aaf0" }}
            onPress={() => navigation.navigate("TeamCreateCompletion")}
          />
        </View>
      </View>
    </>
  )
}

export default TeamCreate

{
  /* <TextInput multiline={true} numberOfLines={15} style={styles.heading} placeholder="content" textAlignVertical={"top"} style={{ fontSize: 17 }} /> */
}
const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    //padding: 30,
    flex: 1,
    backgroundColor: "#00aaf0",
  },
  heading: {
    color: "white",
    marginTop: 10,
    fontSize: 22,
    fontWeight: "bold",
    paddingBottom: 30,
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
