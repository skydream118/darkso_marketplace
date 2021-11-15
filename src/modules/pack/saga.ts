import { takeEvery, call, put} from 'redux-saga/effects'

import { buy_pack } from '../../darkso/utils'
import { AwaitFn } from '../types'
import {
    BUY_Pack_REQUEST,
    buyPackSuccess,
    buyPackFailure,
    buyPackRequestAction 
} from './actions'

export function* PackSaga() {
  yield takeEvery(BUY_Pack_REQUEST, handleBuyPack)
}

function* handleBuyPack(action: buyPackRequestAction){
  try{
   
    const pack:AwaitFn<typeof buy_pack> = yield call(buy_pack, action.payload.darkso)
    
    // const {
    //     packid
    // }:AwaitFn<typeof buy_pack> = yield call(save_pack, pack)
    

    yield put(
        buyPackSuccess(pack)
    )
  }catch(error){
    yield put(buyPackFailure(error.message))
  }
}
