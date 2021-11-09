import { takeEvery, call, put} from 'redux-saga/effects'
import {
  GET_STAT_REQUEST,
  GET_RecentNFTs_REQUEST,  
//  getStatRequestAction,
  getRecentNFTsSuccess,
  getRecentNFTsFailure,
  getStatSuccess,
  getStatFailure,
} from './actions'

import {get_stat, get_recent_nfts} from './api'
import { AwaitFn } from '../types'

export function* dashboardSaga() {
  yield takeEvery(GET_STAT_REQUEST, handleGetStat)
  yield takeEvery(GET_RecentNFTs_REQUEST, handleGetNFT)
}
function* handleGetNFT(){
  try{
    const {
      
    }: AwaitFn<typeof get_stat> = yield call(get_recent_nfts)

    yield put(
      getRecentNFTsSuccess()
    )
    
  }catch(error){
    yield put(getRecentNFTsFailure(error.message))
  }
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