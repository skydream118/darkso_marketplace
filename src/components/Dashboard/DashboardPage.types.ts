import { Dispatch } from 'redux'
import { CallHistoryMethodAction } from 'connected-react-router'
import {
  getHomepage,
  getHomepageLoading
} from '../../modules/dashboard/selectors'

import { getStatRequest, getRecentNFTsRequest, getStatRequestAction, getNFTsRequestAction } from '../../modules/dashboard/actions'

//import { setActiveTab,setActiveTabAction }from '../../modules/routing/navigation/actions'

export type Props = {
  homepage: ReturnType<typeof getHomepage>
  homepageLoading: ReturnType<typeof getHomepageLoading>
  onNavigate: (path: string) => void
  onGetDashInfo: typeof getStatRequest
  onGetRecentNFT: typeof getRecentNFTsRequest
//  onActiveTab: typeof setActiveTab
}

export type MapStateProps = Pick<Props, 'homepage' | 'homepageLoading'>
export type MapDispatchProps = Pick<
  Props,
  'onNavigate' | 'onGetDashInfo' | 'onGetRecentNFT'
>
export type MapDispatch = Dispatch<
  CallHistoryMethodAction | getStatRequestAction | getNFTsRequestAction
>
