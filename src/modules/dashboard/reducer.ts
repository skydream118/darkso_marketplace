
import {
  GET_STAT_REQUEST,
  GET_STAT_SUCCESS,
  GET_STAT_FAILURE,
  getStatRequestAction,
  getStatSuccessAction,
  getStatFailureAction
  // getStatSuccess,
  // getStatFailure
} from './actions'
// import {
//   FetchNFTsSuccessAction,
//   FETCH_NFTS_SUCCESS
// } from '../nft/actions'


export type DashboardUIState = {
  current_list: string[]
  current_saled: string[]
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

export function dashboardReducer(
  state: DashboardUIState = INITIAL_STATE,
  action: UIReducerAction
) {
  switch (action.type) {
    case GET_STAT_REQUEST: {
      return {
        ...state,
        loading: true
      }
    }
    case GET_STAT_SUCCESS: {
      const { total_volumn, total_sale,average_price } = action.payload.stat
      return {
        ...state,
        total_sale: total_sale,
        total_volumn: total_volumn,
        average_price: average_price,
        loading: false
      }
    }
    case GET_STAT_FAILURE: {
     return {
        ...state,
        loading: true,
        error: action.payload.error
      } 
    }
    // case FETCH_NFTS_SUCCESS: {
    //   const { nfts, options } = action.payload
    //   const nftIds = nfts.map(nft => nft.id)

    //   switch (options.view) {
    //     case View.HOME_WEARABLES: {
    //       return {
    //         ...state,
    //         [View.HOME_WEARABLES]: nftIds
    //       }
    //     }
    //     case View.HOME_LAND: {
    //       return {
    //         ...state,
    //         [View.HOME_LAND]: nftIds
    //       }
    //     }
    //     default:
    //       return state
    //   }
    // }
    default:
      return state
  }
}
