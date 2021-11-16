
import {
  GET_STAT_REQUEST,
  GET_STAT_SUCCESS,
  GET_STAT_FAILURE,
  GET_RecentNFTs_REQUEST,
  GET_RecentNFTs_SUCCESS,
  GET_RecentNFTs_FAILURE,
  getStatRequestAction,
  getStatSuccessAction,
  getStatFailureAction,
  getNFTsRequestAction,
  getNFTsSuccessAction,
  getNFTsFailureAction
} from './actions'

import { NFT } from '../nft/types';


export type DashboardUIState = {
  current_list: NFT[]
  current_saled: NFT[]
  total_sale: number
  total_volumn: number
  average_price: number
  loading: boolean
  error: string|null
}

const INITIAL_STATE: DashboardUIState = {
  current_list: [],
  current_saled: [],
  total_sale: 0,
  total_volumn: 0,
  average_price : 0,
  loading: false,
  error: null 
}

type UIReducerAction = 
  |getStatRequestAction
  |getStatSuccessAction
  |getStatFailureAction
  |getNFTsRequestAction
  |getNFTsSuccessAction
  |getNFTsFailureAction

export function dashboardReducer(
  state: DashboardUIState = INITIAL_STATE,
  action: UIReducerAction
) {
  switch (action.type) {
    case GET_STAT_REQUEST: {
      return {
        ...state,
    //    loading: true
      }
    }
    case GET_STAT_SUCCESS: {
      const { total_volumn, total_sale,average_price } = action.payload.stat
      return {
        ...state,
        total_sale: total_sale,
        total_volumn: total_volumn,
        average_price: average_price,
    //    loading: false
      }
    }
    case GET_STAT_FAILURE: {
     return {
        ...state,
    //    loading: true,
        error: action.payload.error
      } 
    }
    case GET_RecentNFTs_REQUEST: {
      return {
        ...state,
        loading : true
      }
    } 
    case GET_RecentNFTs_SUCCESS: {
      return {
        ...state,
        current_list: action.payload.list,
        current_saled : action.payload.sale,
        loadng: false
      }
    }
    case GET_RecentNFTs_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload.error
      }
    }

    default:
      return state
  }
}
