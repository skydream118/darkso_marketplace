import { CallHistoryMethodAction } from 'connected-react-router'
import { Dispatch } from 'redux'
import { buyNFTRequest, buyNFTRequestAction, disableSaleRequest, disableSaleRequestAction, enableSaleRequest, enableSaleRequestAction, resetState, resetStateAction } from '../../modules/nft/actions'

import { getNFTInfo } from '../../modules/nft/selectors'
import { SetTrainer, SetTrainerAction } from '../../modules/training/actions'

//import { setActiveTab,setActiveTabAction }from '../../modules/routing/navigation/actions'

export type Props = {
  nft: ReturnType<typeof getNFTInfo>
  isTrain : boolean
  isFinished : boolean
  onSetTrainer : typeof SetTrainer
  onBUY : typeof buyNFTRequest
  onReset : typeof resetState
  onNavigate: (path: string) => void
  err : string | null
  loading : boolean
  onEnableSale : typeof enableSaleRequest
  onDisableSale : typeof disableSaleRequest
}

export type MapStateProps = Pick<Props, 'nft' | 'isTrain' | 'isFinished' | 'err' | 'loading'>
export type MapDispatchProps = Pick<
  Props,
  'onNavigate' | 'onSetTrainer' | 'onBUY'| 'onReset' | 'onEnableSale' | 'onDisableSale'
>
export type MapDispatch = Dispatch<
  CallHistoryMethodAction | SetTrainerAction | buyNFTRequestAction | resetStateAction | enableSaleRequestAction | disableSaleRequestAction
>
