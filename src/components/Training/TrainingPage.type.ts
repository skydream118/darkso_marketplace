import { Dispatch } from 'redux'
import { CallHistoryMethodAction } from 'connected-react-router'

import { 
  enableTrain, 
  enableTrainAction, 
  setTrainingFirst, 
  setTrainingFirstAction, 
  setTrainingSecond, 
  setTrainingSecondAction, 
  TrainingRequestAction, 
  TrainingRequest, 
  TrainingReset,
  TrainingResetAction, 
  TrainingSucess,
  TrainingSucessAction} from '../../modules/training/actions'
import { TrainUIState } from '../../modules/training/reducers'
import { NFT } from '../../modules/nft/types'
//import { setActiveTab,setActiveTabAction }from '../../modules/routing/navigation/actions'

export type Props = {
  training_state: TrainUIState,
  nfts : NFT[],
  onNavigate: (path: string) => void,
  onEnableTrain : typeof enableTrain,
  onSetFirst : typeof setTrainingFirst,
  onSetSecond : typeof setTrainingSecond,
  onTrainingRequest : typeof TrainingRequest,
  onTrainingSuccess : typeof TrainingSucess
  onReset : typeof TrainingReset
}

export type MapStateProps = Pick<Props, 'training_state' | 'nfts'>
export type MapDispatchProps = Pick<
  Props,
  'onNavigate' | 'onEnableTrain' | 'onSetFirst' | 'onSetSecond' | 'onTrainingRequest' | 'onReset' | 'onTrainingSuccess'
>

export type MapDispatch = Dispatch<
 CallHistoryMethodAction|enableTrainAction|setTrainingFirstAction|setTrainingSecondAction|TrainingRequestAction|TrainingResetAction | TrainingSucessAction
>
