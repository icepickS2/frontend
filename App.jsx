import React, { useState } from "react"
import AppContainer from "./screen/navigation"
import { AppLoading } from "expo"
import Load from "./config/load"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import createSagaMiddleware from "redux-saga"

import RootReducer, { rootSaga } from "./store/module"

const sagaMiddleware = createSagaMiddleware()

const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)

export default function App() {
  const [isReady, setIsReady] = useState(false)

  return !isReady ? (
    <AppLoading startAsync={Load} onFinish={() => setIsReady(true)} onError={console.warn} />
  ) : (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  )
}
/*
colors

#00AAF0
#000000
#608899
#506770
#436775
*/
