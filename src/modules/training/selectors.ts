import { createSelector } from 'reselect'
//import { LoadingState } from 'decentraland-dapps/dist/modules/loading/reducer'
import { RootState } from '../reducer'

import { TrainUIState } from './reducers'

export const getState = (state: RootState) => state.train

export const getTrainState = createSelector<
    RootState,
    TrainUIState,
    boolean
>(getState,(trainState) => {
    return trainState.isTrain
})
