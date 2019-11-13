import { createAction, handleActions } from 'redux-actions'
import produce from 'immer'
import createRequestSaga, { createRequestActionTypes } from '../../config/helper/RequestSaga'
import { takeLatest } from 'redux-saga/effects'

export const initialState = {}

export default user = handleActions({
    userEmail: '',
    name: '',
    location: 'home',
})
