import { Dispatch } from 'redux'
import { CallHistoryMethodAction } from 'connected-react-router'

import { getNFTsRequest, getNFTSRequestAction } from '../../modules/nft/actions'

import { NFT } from '../../modules/nft/types'
import { Rarity,SortBy } from '../../modules/nft/types'

import {
  browse,
  BrowseAction
} from '../../modules/routing/actions'
//import { setActiveTab,setActiveTabAction }from '../../modules/routing/navigation/actions'

export type Props = {
  nfts: NFT[]
  page: number
  size : number
  loading : boolean
  rarity? : Rarity
  type?: string
  sortBy: SortBy
  onNavigate: (path: string) => void
  onGetNFTs: typeof getNFTsRequest
  onBrowse: typeof browse
}

export type MapStateProps = Pick<Props,'nfts'|'loading'|'page'|'size'|'rarity'|'type'|'sortBy'>
export type MapDispatchProps = Pick<
  Props,
  'onNavigate' | 'onGetNFTs' | 'onBrowse'
>
export type MapDispatch = Dispatch<
  CallHistoryMethodAction | getNFTSRequestAction | BrowseAction
>
