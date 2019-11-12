import React from "react"

import BbsListComponent from "../../components/bbs/BbsList"

const BbsList = ({ navigation }) => {
  return (
    <>
      <BbsListComponent navigation={navigation} />
    </>
  )
}
BbsList.navigationOptions = {
  header: null,
}
export default BbsList
