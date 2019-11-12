import React, { useEffect, useState } from "react"
import AccessComponent from "../../components/auth/UserAccess"
import { useDispatch, useSelector } from "react-redux"
import { changeField, login, initializeType } from "../../store/module/auth"

const UserAccess = ({ navigation }) => {
  const dispatch = useDispatch()
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.login,
  }))
  const onSubmit = () => {
    const { email, password } = form
    dispatch(login({ email, password }))
  }

  const onChangeEmail = (value) => {
    dispatch(
      changeField({
        form: "login",
        key: "email",
        value: value,
      }),
    )
  }
  const onChangePassword = (value) => {
    dispatch(
      changeField({
        form: "login",
        key: "password",
        value: value,
      }),
    )
  }
  useEffect(() => {
    console.log(`auth useEffect`)
    if (authError) {
      console.log(`err`, authError)
    }
    if (auth) {
      console.log(`성공`, auth)
    }
  }, [auth, authError])

  useEffect(() => {
    console.log(`user useEffect`)
    if (user) {
      console.log(`user`, user)
    }
  }, [user])

  useEffect(() => {
    dispatch(initializeType("login"))
  }, [dispatch])

  return <AccessComponent type="login" onSubmit={onSubmit} navigation={navigation} form={form} onChangeEmail={onChangeEmail} user={user} onChangePassword={onChangePassword} />
}
UserAccess.navigationOptions = {
  header: null,
}
export default UserAccess
