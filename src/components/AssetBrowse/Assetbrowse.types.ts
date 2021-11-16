import { Dispatch } from 'redux'
import { CallHistoryMethodAction } from 'connected-react-router'

import { getNFTsRequest, getNFTSRequestAction } from '../../modules/nft/actions'

import { Type } from '../../modules/nft/types'
import { Rarity,SortBy } from '../../modules/nft/types'

import {
  browse,
  BrowseAction
} from '../../modules/routing/actions'
import { NFTsUIState } from '../../modules/nft/reducers'
//import { setActiveTab,setActiveTabAction }from '../../modules/routing/navigation/actions'

export type Props = {
  nfts_state: NFTsUIState
  page: number
  rarity : Rarity
  type: Type
  sortBy: SortBy,
  account?: string,
  onNavigate: (path: string) => void
  onGetNFTs: typeof getNFTsRequest
  onBrowse: typeof browse
}

export type MapStateProps = Pick<Props, 'page' | 'rarity'|'type'|'sortBy'|'account'|'nfts_state'>
export type MapDispatchProps = Pick<
  Props,
  'onNavigate' | 'onGetNFTs' | 'onBrowse'
>
export type MapDispatch = Dispatch<
  CallHistoryMethodAction | getNFTSRequestAction | BrowseAction
>
