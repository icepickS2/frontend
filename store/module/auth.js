import { createAction, handleActions } from "redux-actions"
import produce from "immer"
import createRequestSaga, { createRequestActionTypes } from "../../config/helper/RequestSaga"
import { takeLatest } from "redux-saga/effects"

const CHANGE_FIELD = "auth/CHANGE_FIELD"
const INITIALIZE_TYPE = "auth/INITIALIZE_TYPE"

const EMAIL_CHECK = "auth/EMAIL_CHECK"

const [SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAILURE] = createRequestActionTypes("auth/SIGNUP")
const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes("auth/LOGIN")

export const initialState = {
  create: {
    email: "",
    password: "",
    passwordConfirm: "",
  },
  login: {
    email: "",
    password: "",
  },
  auth: null,
  authError: null,
  email_check: null,
}
export const changeField = createAction(CHANGE_FIELD, ({ form, key, value }) => ({
  form,
  key,
  value,
}))
export const initializeType = createAction(INITIALIZE_TYPE, (form) => form)
export const signUp = createAction(SIGNUP, ({ email, password, passwordConfirm }) => ({
  email,
  password,
  passwordConfirm,
}))
export const login = createAction(LOGIN, ({ email, password }) => ({
  email,
  password,
}))
export const emailCheck = createAction(EMAIL_CHECK)

const signUpSaga = createRequestSaga(SIGNUP)
const loginSaga = createRequestSaga(LOGIN)

export function* authSaga() {
  yield takeLatest(SIGNUP, signUpSaga)
  yield takeLatest(LOGIN, loginSaga)
}

const auth = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, (draft) => {
        draft[form][key] = value
      }),
    [INITIALIZE_TYPE]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
    }),
    [EMAIL_CHECK]: (state, { payload: code }) => ({
      ...state,
      email_check: code,
    }),
    [SIGNUP_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth,
    }),
    [SIGNUP_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
    [LOGIN_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth,
    }),
    [LOGIN_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
  },
  initialState,
)
export default auth
