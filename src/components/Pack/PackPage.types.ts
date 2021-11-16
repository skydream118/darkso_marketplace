import { Dispatch } from 'redux'

import { PackUIState } from '../../modules/pack/reducers'
import { 
  buyPackRequest, buyPackRequestAction,
  buyPackSuccess, buyPackSuccessAction,
//  buyPackFailure, buyPackFailureAction
} from '../../modules/pack/actions'
//import { setActiveTab,setActiveTabAction }from '../../modules/routing/navigation/actions'

export type Props = {
  pack_state: PackUIState,
  onBuyPack : typeof buyPackRequest,
  onBuySuccess : typeof buyPackSuccess,
//  onBuyRequest : typeof buyPackFailure
}

export type MapStateProps = Pick<Props, 'pack_state'>
export type MapDispatchProps = Pick<
  Props,
  'onBuyPack' | 'onBuySuccess'
>

export type MapDispatch = Dispatch<
  buyPackRequestAction | buyPackSuccessAction
>
