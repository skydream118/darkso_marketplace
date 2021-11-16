
import {
  GET_NFTs_REQUEST,
  GET_NFTs_SUCCESS,
  GET_NFTs_FAILURE,
  getNFTSRequestAction,
  getNFTSSuccessAction,
  getNFTSFailureAction,
  BUY_NFT_REQUEST,
  buyNFTRequestAction,
  RESET_STATE,
  resetStateAction,
  BUY_NFT_FAILURE,
  BUY_NFT_SUCCESS,
  buyNFTFailureAction,
  buyNFTSuccessAction,
  ENABLE_SALE_REQUEST,
  ENABLE_SALE_FAILURE,
  ENABLE_SALE_SUCCESS,
  enableSaleRequestAction,
  enableSaleSuccessAction,
  enableSaleFailureAction,
  DISABLE_SALE_REQUEST,
  DISABLE_SALE_FAILURE,
  DISABLE_SALE_SUCCESS,
  SET_NEW_Pack,
  setNewPackAction
} from './actions'

import {
  NFT
} from './types'


export type NFTsUIState = {
  nfts: NFT[]
  page: number
  size: number
  loading: boolean
  error: string | null
  success: boolean
}

const INITIAL_STATE: NFTsUIState = {
  nfts: [],
  page: 1,
  size: 0,
  loading: false,
  error: null,
  success: false
}

type UIReducerAction =
  | getNFTSRequestAction
  | getNFTSSuccessAction
  | getNFTSFailureAction
  | buyNFTRequestAction
  | buyNFTSuccessAction
  | buyNFTFailureAction
  | enableSaleRequestAction
  | enableSaleSuccessAction
  | enableSaleFailureAction
  | resetStateAction
  | setNewPackAction

export function NFTReducer(
  state: NFTsUIState = INITIAL_STATE,
  action: UIReducerAction
) {
  switch (action.type) {
    case GET_NFTs_REQUEST:
      return {
        ...state,
        loading: true
      }
    case GET_NFTs_SUCCESS:
      return {
        ...state,
        nfts: action.payload.nfts,
        size: action.payload.size,
        loading: false,

      }
    case GET_NFTs_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      }

    case BUY_NFT_REQUEST:
      return {
        ...state,
        loading: true
      }
    case BUY_NFT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        success: true
      }
    case BUY_NFT_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true
      }

    case ENABLE_SALE_REQUEST:
      return {
        ...state,
        loading: true
      }
    case ENABLE_SALE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        success: true
      }
    case ENABLE_SALE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true
      }

    case DISABLE_SALE_REQUEST:
      return {
        ...state,
        loading: true
      }
    case DISABLE_SALE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        success: true
      }
    case DISABLE_SALE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true
      }
    case RESET_STATE:
      return {
        ...state,
        success: false,
        error: null
      }
    case SET_NEW_Pack:
      return {
        ...state,
        nfts: [...state.nfts,action.payload.new_pack]
      }
    default:
      return state
  }
}
