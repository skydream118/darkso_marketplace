import { connect } from 'react-redux'
import { RootState } from '../../modules/reducer'

import { MapStateProps,MapDispatchProps, MapDispatch } from './PackPage.types'
import { getState } from '../../modules/pack/selectors'
import { buyPackRequest } from '../../modules/pack/actions'
import PackPage from './PackPage'

const mapState = (state: RootState): MapStateProps => ({
    pack_state : getState(state)
})

const mapDispatch = (dispatch: MapDispatch): MapDispatchProps => ({
    onBuyPack: address => dispatch(buyPackRequest(address))
})

export default connect(mapState, mapDispatch)(PackPage)
