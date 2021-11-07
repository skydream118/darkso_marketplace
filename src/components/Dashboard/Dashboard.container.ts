import { connect } from 'react-redux'
import { push } from 'connected-react-router'

import { RootState } from '../../modules/reducer'
import { getStatRequest } from '../../modules/dashboard/actions'

import {
  getHomepage,
  getHomepageLoading
} from '../../modules/dashboard/selectors'


import { MapStateProps, MapDispatchProps, MapDispatch } from './HomePage.types'

import DashboardPage from './DashboardPage'

const mapState = (state: RootState): MapStateProps => ({
  homepage: getHomepage(state),
  homepageLoading: getHomepageLoading(state)
})

const mapDispatch = (dispatch: MapDispatch): MapDispatchProps => ({
  onNavigate: path => dispatch(push(path)),
  onGetDashInfo: () => dispatch(getStatRequest())
})

export default connect(mapState, mapDispatch)(DashboardPage)