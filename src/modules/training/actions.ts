import { action } from 'typesafe-actions'
import Darkso from '../../darkso'
import { NFT } from '../nft/types'

export const ENABLE_TRAIN = '[Request] enable Train'

export const SET_TRAINER_FIRST = '[set] first trainer'
export const SET_TRAINER_SECOND = '[set] second trainer'

export const TRAINING_REQUEST = '[request] training'
export const TRAINING_FAILURE = '[failure] training'
export const TRAINING_SUCCESS = '[success] training'

export const TRAINING_RESET = '[reset] training'

export const SET_TRAINER = '[set] trainer'


export const enableTrain = (setTrain : boolean) =>
  action(ENABLE_TRAIN,{setTrain})

export const setTrainingFirst = () =>
  action(SET_TRAINER_FIRST)

export const setTrainingSecond = () =>
  action(SET_TRAINER_SECOND)

export const SetTrainer = (token_id: string) => 
  action(SET_TRAINER, {token_id})

export const TrainingRequest = ( darkso: Darkso, first_id : string, second_id : string) =>
  action(TRAINING_REQUEST, {
    darkso,first_id,second_id
  })

export const TrainingFailure = (error : string) =>
  action(TRAINING_FAILURE,{
    error
  })

export const TrainingSucess = (token: NFT)=>
	action(TRAINING_SUCCESS,{
		token
  })

export const TrainingReset = () => 
  action(TRAINING_RESET)


export type enableTrainAction = ReturnType<typeof enableTrain>
export type setTrainingFirstAction = ReturnType<typeof setTrainingFirst>
export type setTrainingSecondAction = ReturnType<typeof setTrainingSecond>
export type TrainingRequestAction = ReturnType<typeof TrainingRequest>
export type TrainingFailureAction = ReturnType<typeof TrainingFailure>
export type TrainingSucessAction = ReturnType<typeof TrainingSucess>

export type SetTrainerAction = ReturnType<typeof SetTrainer>
export type TrainingResetAction = ReturnType<typeof TrainingReset>









