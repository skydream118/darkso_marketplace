import { createSelector } from 'reselect'
import { createMatchSelector } from 'connected-react-router'
//import { LoadingState } from 'decentraland-dapps/dist/modules/loading/reducer'
import { RootState } from '../reducer'
import { NFT } from './types'
import { locations } from '../routing/locations'
import { NFTsUIState } from './reducers'

export const getState = (state: RootState) => state.nfts

const nftDetailMatchSelector = createMatchSelector<
  RootState,
  {
    tokenId: string
  }
>(locations.token(':tokenId'))


export const getTokenId = createSelector<
  RootState,
  ReturnType<typeof nftDetailMatchSelector>,
  string | null
>(nftDetailMatchSelector, match => match?.params.tokenId || null)


export const getNFTs = createSelector<
  RootState,
  NFTsUIState,
  NFTsUIState
>(getState, (nfts) => {

  return nfts
})

export const getOnlyNFTs = createSelector<
  RootState,
  NFTsUIState,
  NFT[]
>(getState, (nfts) => {

  return nfts.nfts
})

export const getNFTInfo = createSelector<
  RootState,
  string | null,
  NFTsUIState,
  NFT | undefined
>(
  state => getTokenId(state),
  state => getNFTs(state),
  (tokenId, tokenState) => tokenState.nfts.find(nft => nft.token_id == tokenId)
)


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

export const getError = createSelector<
  RootState,
  NFTsUIState,
  string | null
>(
  getState,
  (nfts) => {
    //const result: boolean = false;

    return nfts.error;
  }
)

export const getLoading = createSelector<
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
export const getFinishState = createSelector<
  RootState,
  NFTsUIState,
  boolean
>(
  getState,
  (nfts) => {
    //const result: boolean = false;

    return nfts.success;
  }
)
