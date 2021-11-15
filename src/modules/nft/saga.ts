import { takeEvery, call, put } from 'redux-saga/effects'

import { get_nfts } from './api'

import { buy_nft ,enable_NftSale, disable_NftSale} from '../utils'
import { AwaitFn } from '../types'
import {
  GET_NFTs_REQUEST,
  getNFTsSuccess,
  getNFTsFailure,
  getNFTSRequestAction,
  buyNFTRequestAction,
  buyNFTSuccess,
  buyNFTFailure,
  ENABLE_SALE_REQUEST,
  disableSaleRequest,
  enableSaleRequestAction,
  enableSaleSuccess,
  enableSaleFailure,
  disableSaleSuccess,
  disableSaleFailure,
  disableSaleRequestAction
} from './actions'
import { BUY_Pack_REQUEST } from '../pack/actions'

export function* NFTsSaga() {
  yield takeEvery(GET_NFTs_REQUEST, handleGetNFTs)
  yield takeEvery(BUY_Pack_REQUEST, handleBuyNFT)
  yield takeEvery(ENABLE_SALE_REQUEST, handleEnableSale)
  yield takeEvery(disableSaleRequest, handleDisableSale)

}

function* handleGetNFTs(action: getNFTSRequestAction) {
  const { search } = action.payload;
  try {
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
  } catch (error) {
    yield put(getNFTsFailure(error.message))
  }
}

function* handleBuyNFT(action: buyNFTRequestAction) {
  const { token_id, price } = action.payload;
  try {
    const {
//      tokenId,
      error
    }: AwaitFn<typeof buy_nft> = yield call(buy_nft, token_id, price)

    if (error) {
      yield put(buyNFTSuccess())
    } else {
      yield put(buyNFTFailure(error))
    }
  } catch (error) {
    yield put(getNFTsFailure(error.message))
  }
}

function* handleEnableSale(action: enableSaleRequestAction) {
  const { token_id, price } = action.payload;
  try {
    const {
      result,
      error
    }: AwaitFn<typeof buy_nft> = yield call(enable_NftSale, token_id, price)

    if (result && !error) {
      yield put((enableSaleSuccess()))
    } else {
      yield put(enableSaleFailure(error))
    }
  } catch (error) {
    yield put(enableSaleFailure(error.message))
  }
}

function* handleDisableSale(action: disableSaleRequestAction) {
  const { token_id } = action.payload;
  try {
    const {
      result,
      error
    }: AwaitFn<typeof buy_nft> = yield call(disable_NftSale, token_id )

    if (result && !error) {
      yield put((disableSaleSuccess()))
    } else {
      yield put(disableSaleFailure(error))
    }
  } catch (error) {
    yield put(disableSaleFailure(error.message))
  }
}

