import React from "react"
import { Text, View } from "react-native"
import PhotoHeader from "./PhotoHeader"
import PhotoContent from "./PhotoContent"
import PhotoContentExpressView from "./PhotoContentExpressView"
const PhotoRead = ({ params }) => (
  <>
    <PhotoHeader title={"글제목입니다"} writer={"글쓴이입니다."} time={"13:13 시간입니다"} comments={123} />
    <PhotoContent content={"일단 적고 생각하댜 꺄ㅐ르를르ㅡㄹ르훟르후후후호ㅜㅗㅜ후우"} />
    <PhotoContentExpressView heart={123} comments={546} />
  </>
)

export default PhotoRead
