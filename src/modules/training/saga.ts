import { takeEvery, call, put} from 'redux-saga/effects'

import { training } from '../utils'
import { AwaitFn } from '../types'
import {
  TrainingRequest,
  TrainingSucess,
  TrainingFailure,
  TrainingRequestAction
} from './actions'

export function* TrainSaga() {
  yield takeEvery(TrainingRequest, handleTraining)
}

function* handleTraining(action: TrainingRequestAction){
  try{
   
    const newNFT:AwaitFn<typeof training> = yield call(training, action.payload.first_id, action.payload.second_id)
    
    // const {
    //     packid
    // }:AwaitFn<typeof buy_pack> = yield call(save_new, newNFT)
    

    yield put(
        TrainingSucess(newNFT.token_id)
    )
  }catch(error){
    yield put(TrainingFailure(error.message))
  }
}
