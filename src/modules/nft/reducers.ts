
import {
    GET_NFTs_REQUEST,
    GET_NFTs_SUCCESS,
    GET_NFTs_FAILURE,
    getNFTSRequestAction,
    getNFTSSuccessAction,
    getNFTSFailureAction
  } from './actions'
  
  import {
    NFT
  } from './types'
  
  
  export type NFTsUIState = {
    nfts : NFT[]
    page: number
    size: number
    loading : boolean
    error: string|null
  }
  
  const INITIAL_STATE: NFTsUIState = {
    nfts : [],
    page : 1,
    size: 0,
    loading: false,
    error: null 
  }
  
  type UIReducerAction =
  |getNFTSRequestAction
  |getNFTSSuccessAction
  |getNFTSFailureAction 
  
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
                loading: false
            }
        case GET_NFTs_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            } 
           
      default:
        return state
    }
  }
  