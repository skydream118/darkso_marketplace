import { takeEvery, call, put} from 'redux-saga/effects'

import { buy_pack } from '../../darkso/utils'
//import { AwaitFn } from '../types'
import {
    BUY_Pack_REQUEST,
    buyPackFailure,
    buyPackRequestAction 
} from './actions'

export function* PackSaga() {
  yield takeEvery(BUY_Pack_REQUEST, handleBuyPack)
}

function* handleBuyPack(action: buyPackRequestAction){
  try{
   
    yield call(buy_pack, action.payload.darkso)

    // const {
    //     packid
    // }:AwaitFn<typeof buy_pack> = yield call(save_pack, pack)
  }catch(error){
    yield put(buyPackFailure(error.message))
  }
}
