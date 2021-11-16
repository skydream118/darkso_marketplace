import { connect } from 'react-redux'
import { RootState } from '../../modules/reducer'

import { MapStateProps,MapDispatchProps, MapDispatch } from './PackPage.types'
import { getState } from '../../modules/pack/selectors'
import { buyPackRequest, buyPackSuccess } from '../../modules/pack/actions'
import PackPage from './PackPage'

const mapState = (state: RootState): MapStateProps => ({
    pack_state : getState(state)
})

const mapDispatch = (dispatch: MapDispatch): MapDispatchProps => ({
    onBuyPack: darkso => dispatch(buyPackRequest(darkso)),
    onBuySuccess: (pack) => dispatch(buyPackSuccess(pack))
})

export default connect(mapState, mapDispatch)(PackPage)
