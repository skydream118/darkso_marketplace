
import {
  ENABLE_TRAIN,
  SET_TRAINER,
  SET_TRAINER_FIRST,
  SET_TRAINER_SECOND,
  TRAINING_REQUEST,
  TRAINING_SUCCESS,
  TRAINING_FAILURE,
  enableTrainAction,
  SetTrainerAction,
  setTrainingFirstAction,
  setTrainingSecondAction,
  TrainingRequestAction,
  TrainingSucessAction,
  TrainingFailureAction
} from './actions'
    
  
  export type TrainUIState = {
    isTrain: boolean,
    loading: boolean,
    isFirst : boolean,
    isSecond : boolean,
    first_trainer_id : string | null,
    second_trainer_id : string | null,
    train_id : string | null,
    error: string | null
  }
  
  const INITIAL_STATE: TrainUIState = {
    isTrain : false,
    isFirst : false,
    isSecond : false,
    first_trainer_id : null,
    second_trainer_id : null,
    train_id : null,
    loading: false,
    error: null 
  }
  
  type UIReducerAction =
  |enableTrainAction
  |setTrainingFirstAction
  |setTrainingSecondAction
  |TrainingRequestAction
  |TrainingSucessAction
  |TrainingFailureAction 
  |SetTrainerAction

  export function TrainReducer(
    state: TrainUIState = INITIAL_STATE,
    action: UIReducerAction
  ) {
    switch (action.type) {
      case ENABLE_TRAIN: {
        const setTrain = action.payload.setTrain
        return {
          ...state,
          isTrain : setTrain
        }
      }
      case SET_TRAINER_FIRST: {
        return {
          ...state,
          isFirst : true,
        }
      }
      case SET_TRAINER_SECOND: {
        return {
          ...state,
          isSecond : true,
        }
      }
      case SET_TRAINER: {
        
        if(state.isFirst){
          return {
            ...state,
            first_trainer_id: action.payload.token_id,
            isFirst : false,
            isTrain : false 
          }
        }else if(state.isSecond){
          return {
            ...state,
            second_trainer_id: action.payload.token_id,
            isSecond : false,
            isTrain : false
          }
        }else {
          return { ...state,isTrain : false}
        }
      }
      case TRAINING_REQUEST: {
        return {
          ...state,
          loading : true
        }
      }
      case TRAINING_FAILURE: {
        return {
          ...state,
          loading: false,
          error : action.payload.error
        }
      }
      case TRAINING_SUCCESS: {
        return {
          ...state,
          loading: false,
          train_id : action.payload.token.token_id
        }
      }
      default:
        return state
    }
  }
  