import React from "react"
import { StyleSheet, View, Text, TouchableOpacity } from "react-native"

const getRandomColor = () => {
  let letters = "0123456789ABCDEF"
  let color = "#"
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

const getAvailableRoutes = (navigation) => {
  let available_routes = []
  if (!navigation) return available_routes
  const parent = navigation.dangerouslyGetParent()
  if (parent) {
    if (parent.router && parent.router.childRouters) {
      available_routes = [...available_routes, ...Object.keys(parent.router.childRouters)]
    }
    available_routes = [...available_routes, ...getAvailableRoutes(parent)]
  }
  return [...new Set(available_routes)].filter((route) => route !== navigation.state.routeName)
}

export default function Test({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Test Component</Text>
      <Text style={styles.title}>| {navigation.state.routeName} |</Text>
      {getAvailableRoutes(navigation).map((route) => (
        <TouchableOpacity style={styles.routeButton} key={route} onPress={() => navigation.navigate(route)}>
          <Text>{route}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}
Test.navigationOptions = {
  header: null,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: getRandomColor(),
  },
  routeButton: {
    backgroundColor: "#fff",
    padding: 10,
    margin: 10,
  },
  header: {
    color: "#fff",
    fontSize: 30,
  },
  title: {
    color: "#fff",
    fontSize: 20,
  },
})
