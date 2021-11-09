export enum NavigationTab {
  DASH = 'dashboard',
  MARKET = 'marketplace',
  TRAIN = 'training',
  PACK = 'pack'
}

export type Props = {
  activeTab?: NavigationTab
  // isFullscreen?: boolean
}

export type MapStateProps = {}
export type MapDispatchProps = {}
