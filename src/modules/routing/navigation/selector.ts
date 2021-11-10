import { createSelector } from 'reselect'
//import { LoadingState } from 'decentraland-dapps/dist/modules/loading/reducer'
import { RootState } from '../../reducer'

import { ActiveUIState } from './reducer'

export const getState = (state: RootState) => state.navigation

export const getActiveTab = createSelector<
  RootState,
  ActiveUIState,
  string | null
>(getState, (homepage) => {

  return homepage.active_tab
})