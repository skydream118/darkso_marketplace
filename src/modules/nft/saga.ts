import { takeEvery, call, put} from 'redux-saga/effects'

import { get_nfts } from './api'
import { AwaitFn } from '../types'
import { 
    GET_NFTs_REQUEST,
    getNFTsSuccess,
    getNFTsFailure,
    getNFTSRequestAction
} from './actions'

export function* NFTsSaga() {
  yield takeEvery(GET_NFTs_REQUEST, handleGetNFTs)
}

function* handleGetNFTs(action: getNFTSRequestAction){
  const { search } = action.payload;
  try{
    const {
      nfts,
      size
    }: AwaitFn<typeof get_nfts> = yield call(get_nfts, search)
    
    yield put(
        getNFTsSuccess(
          nfts,
          size
        )
      )
  }catch(error){
    yield put(getNFTsFailure(error.message))
  }
}
