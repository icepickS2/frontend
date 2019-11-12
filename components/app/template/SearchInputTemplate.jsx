import React from "react"
import { Text, View, Platform } from "react-native"
import { SearchBar } from "react-native-elements"

const SearchInputTemplate = ({ params }) => {
  const platformType = Platform.OS == "ios" ? "ios" : "android"
  return <SearchBar platform={platformType} placeholder="Type Here..." {...SearchBarProps} />
}

export default SearchInputTemplate

const SearchBarProps = {
  showLoading: true,
  onFocus: () => console.log("focus"),
  onBlur: () => console.log("blur"),
  onCancel: () => console.log("cancel"),
  onClear: () => console.log("cleared"),
  onChangeText: (text) => console.log("text:", text),
}
