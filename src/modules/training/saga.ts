import { takeEvery, call, put} from 'redux-saga/effects'
import { training_new } from '../../darkso/utils'
//import { AwaitFn } from '../types'
import {
  TRAINING_REQUEST,
  //TrainingSucess,
  TrainingFailure,
  TrainingRequestAction
} from './actions'

export function* TrainSaga() {
  yield takeEvery(TRAINING_REQUEST, handleTraining)
}

function* handleTraining(action: TrainingRequestAction){
  try{
   
    yield call(training_new,action.payload.darkso, action.payload.first_id, action.payload.second_id)
    
    // const {
    //     packid
    // }:AwaitFn<typeof buy_pack> = yield call(save_new, newNFT)
    

    // yield put(
    //     TrainingSucess(newNFT.token_id)
    // )
  }catch(error){
    yield put(TrainingFailure(error.message))
  }
}
