import { Dispatch } from 'redux'

import { PackUIState } from '../../modules/pack/reducers'
import { buyPackRequest, buyPackRequestAction } from '../../modules/pack/actions'
//import { setActiveTab,setActiveTabAction }from '../../modules/routing/navigation/actions'

export type Props = {
  pack_state: PackUIState,
  onBuyPack : typeof buyPackRequest
}

export type MapStateProps = Pick<Props, 'pack_state'>
export type MapDispatchProps = Pick<
  Props,
  'onBuyPack'
>

export type MapDispatch = Dispatch<
  buyPackRequestAction
>
