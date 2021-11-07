import { takeEvery, call, put} from 'redux-saga/effects'
import {
  GET_STAT_REQUEST,
  
//  getStatRequestAction,
  getStatSuccess,
  getStatFailure,
} from './actions'

import {get_stat} from './api'
import { AwaitFn } from '../types'

export function* dashboardSaga() {
  yield takeEvery(GET_STAT_REQUEST, handleGetStat)
}

function* handleGetStat(){
  try {
    const {
      tvolumn,
      tsale,
      aprice
    }: AwaitFn<typeof get_stat> = yield call(get_stat)

    yield put(
      getStatSuccess(
        {
          total_volumn:tvolumn,
          total_sale:tsale,
          average_price:aprice
        }
      )
    )
  } catch (error){
      yield put(getStatFailure(error.message))
  }
}