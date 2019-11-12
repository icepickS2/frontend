import React from "react"
import TextHeader from "./TextHeader"
import TextContent from "./TextContent"
import TextContentExpressView from "./TextContentExpressView"

const TextRead = ({ params }) => (
  <>
    <TextHeader title={"글제목입니다"} writer={"글쓴이입니다."} time={"13:13 시간입니다"} comments={123} />
    <TextContent content={"일단 적고 생각하댜 꺄ㅐ르를르ㅡㄹ르훟르후후후호ㅜㅗㅜ후우"} />
    <TextContentExpressView heart={123} comments={546} />
  </>
)

export default TextRead
