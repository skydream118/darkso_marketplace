
import {
    BUY_Pack_REQUEST,
    BUY_Pack_SUCCESS,
    BUY_Pack_FAILURE,
    buyPackRequestAction,
    buyPackSuccessAction,
    buyPackFailureAction
} from './actions'
    
  
  export type PackUIState = {
    loading: boolean,
    pack_id : string | null,
    error: string | null
  }
  
  const INITIAL_STATE: PackUIState = {
    pack_id : null,
    loading: false,
    error: null 
  }
  
  type UIReducerAction = 
  |buyPackRequestAction
  |buyPackSuccessAction
  |buyPackFailureAction

  export function PackReducer(
    state: PackUIState = INITIAL_STATE,
    action: UIReducerAction
  ) {
    switch (action.type) {
      case BUY_Pack_REQUEST: {
        return {
          ...state,
          loading: true
        }
      }
      case BUY_Pack_SUCCESS: {
        const { token_id } = action.payload.nft
        return {
          ...state,
          pack_id : token_id,
          error: null,
          loading: false
        }
      }
      case BUY_Pack_FAILURE: {
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
  