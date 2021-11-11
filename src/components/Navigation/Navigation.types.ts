import { Dispatch } from 'redux'
import { CallHistoryMethodAction } from 'connected-react-router'
import { ProviderType } from 'decentraland-connect';
import { NavbarProps } from 'decentraland-ui'
import { EnableWalletRequestAction } from "decentraland-dapps/dist/modules/wallet/actions";

export enum NavigationTab {
  DASH = 'dashboard',
  MARKET = 'marketplace',
  TRAIN = 'training',
  PACK = 'pack'
}

export type Props_1 = Partial<NavbarProps> & {
  activeTab?: string|null
  isConnected: boolean
  onNavigate: (path: string) => void
  onConnect: (providerType: ProviderType) => any;
  // isFullscreen?: boolean
}
export type Props = {
  activeTab: NavigationTab
}


export type MapStateProps = Pick<
  Props_1,
  'activeTab' | 'isConnected'
>
export type MapDispatchProps = Pick<Props_1, 'onNavigate'|'onConnect'>
export type MapDispatch = Dispatch<CallHistoryMethodAction|EnableWalletRequestAction>

export type OwnProps = Pick<Props, 'activeTab'>
