import { createSelector } from 'reselect'
//import { LoadingState } from 'decentraland-dapps/dist/modules/loading/reducer'

import {DashboardUIState} from './reducer'

export const getState = (state: RootState) => state.dashboard

export const getHomepage = createSelector<
  RootState,
  DashboardUIState,
>(getState, (homepage) => {

  return homepage
})
export const getHomepageLoading = createSelector<
  RootState,
  DashboardUIState,
>(
  getState,
  (homepage) => {
  	//const result: boolean = false;

  	return homepage.loading;
  }
)
