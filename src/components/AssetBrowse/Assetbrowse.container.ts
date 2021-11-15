import { connect } from 'react-redux'
import { push } from 'connected-react-router'

import { RootState } from '../../modules/reducer'
import { getNFTsRequest } from '../../modules/nft/actions'
import {
  getPage
} from '../../modules/routing/selectors'

import { MapStateProps, MapDispatchProps, MapDispatch } from './Assetbrowse.types'

import AssetBrowse from './Assetbrowse'
import { getType, getRarities, getSortBy, getAccount } from '../../modules/routing/selectors'
import { browse } from '../../modules/routing/actions'

const mapState = (state: RootState): MapStateProps => ({
    nfts : state.nfts.nfts,
    loading:  state.nfts.loading,
    page: getPage(state),
    size : state.nfts.size,
    rarity : getRarities(state),
    type : getType(state),
    sortBy: getSortBy(state),
    account : getAccount(state)
})

const mapDispatch = (dispatch: MapDispatch): MapDispatchProps => ({
  onNavigate: path => dispatch(push(path)),
  onGetNFTs: search => dispatch(getNFTsRequest(search)),
  onBrowse: options => dispatch(browse(options))
})

export default connect(mapState, mapDispatch)(AssetBrowse)
