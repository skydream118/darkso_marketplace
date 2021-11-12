import { createSelector } from 'reselect'
//import { LoadingState } from 'decentraland-dapps/dist/modules/loading/reducer'
import { RootState } from '../reducer'

import { NFTsUIState } from './reducers'

export const getState = (state: RootState) => state.nfts

export const getNFTs = createSelector<
  RootState,
  NFTsUIState,
  NFTsUIState
>(getState, (nfts) => {

  return nfts
})
export const getNFTsLoading = createSelector<
  RootState,
  NFTsUIState,
  boolean
>(
  getState,
  (nfts) => {
  	//const result: boolean = false;

  	return nfts.loading;
  }
)
