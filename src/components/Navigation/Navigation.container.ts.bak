import { connect } from 'react-redux'
import { push } from 'connected-react-router'

import { RootState } from '../../modules/reducer'
import { isConnected } from '../../modules/wallet/selectors'
import { enableWalletRequest } from "decentraland-dapps/dist/modules/wallet/actions";
//import { getActiveTab } from '../../modules/routing/navigation/selector'
import { MapStateProps, MapDispatch, MapDispatchProps,OwnProps } from './Navigation.types'
import Navigation from './Navigation'

// const mapState = (state: RootState, ownProps: OwnProps): MapStateProps => {
//     let { activeTab } = ownProps
    
//     const isConnected = isConnected(state);
//     return {activeTab, isConnected};
//   }

const mapState = (state: RootState,ownProps: OwnProps): MapStateProps => ({
  activeTab: ownProps.activeTab,
  isConnected: isConnected(state),
})

const mapDispatch = (dispatch: MapDispatch): MapDispatchProps => ({
  onNavigate: path => dispatch(push(path)),
  onConnect: providerType => dispatch(enableWalletRequest(providerType))
})

export default connect(mapState, mapDispatch)(Navigation)
