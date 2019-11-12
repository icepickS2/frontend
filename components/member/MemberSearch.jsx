import React from "react"
import { Text, View } from "react-native"
import MemberSearchInput from "../app/template/SearchInputTemplate"
import MemberSearchList from "./element/MemberSearchList"
const MemberSearch = ({ navigation }) => (
  <>
    <MemberSearchInput />
    <MemberSearchList navigation={navigation} />
  </>
)

export default MemberSearch
