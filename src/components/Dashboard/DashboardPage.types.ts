import { Dispatch } from 'redux'
import { CallHistoryMethodAction } from 'connected-react-router'
import {
  getHomepage,
  getHomepageLoading
} from '../../modules/dashboard/selectors'

import { getStatRequest, getRecentNFTsRequest, getStatRequestAction, getNFTsRequestAction } from '../../modules/dashboard/actions'

export type Props = {
  homepage: ReturnType<typeof getHomepage>
  homepageLoading: ReturnType<typeof getHomepageLoading>
  onNavigate: (path: string) => void
  onGetDashInfo: typeof getStatRequest
  onGetRecentNFT: typeof getRecentNFTsRequest
}

export type MapStateProps = Pick<Props, 'homepage' | 'homepageLoading'>
export type MapDispatchProps = Pick<
  Props,
  'onNavigate' | 'onGetDashInfo' | 'onGetRecentNFT'
>
export type MapDispatch = Dispatch<
  CallHistoryMethodAction | getStatRequestAction | getNFTsRequestAction
>
