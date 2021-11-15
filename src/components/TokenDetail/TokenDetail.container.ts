import { connect } from 'react-redux'
import { RootState } from '../../modules/reducer'

import { getFinishState, getNFTInfo,getError,getLoading } from '../../modules/nft/selectors'

import { MapStateProps,MapDispatchProps, MapDispatch } from './TokenDetail.types'

import TokenDetailPage from './TokenDetail'
import { getTrainState } from '../../modules/training/selectors'
import { SetTrainer } from '../../modules/training/actions'
import { buyNFTRequest, disableSaleRequest, enableSaleRequest, resetState } from '../../modules/nft/actions'

const mapState = (state: RootState): MapStateProps => ({
  nft: getNFTInfo(state),
  isTrain : getTrainState(state),
  isFinished : getFinishState(state),
  err : getError(state),
  loading : getLoading(state),

})

const mapDispatch = (dispatch: MapDispatch): MapDispatchProps => ({
  onSetTrainer:(token_id) => dispatch(SetTrainer(token_id)),
  onBUY:(token_id, price) => dispatch(buyNFTRequest(token_id, price)),
  onEnableSale : (token_id, price) => dispatch(enableSaleRequest(token_id,price)),
  onDisableSale : (token_id) => dispatch(disableSaleRequest(token_id)),
  onReset : () => dispatch(resetState())
})

export default connect(mapState, mapDispatch)(TokenDetailPage)
