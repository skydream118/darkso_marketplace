import React from 'react'
import { Web3Provider } from '@ethersproject/providers'
import { useWeb3React } from '@web3-react/core'

import { injected } from '../../../modules/wallet/connectors'
import { AssetBrowse } from '../../AssetBrowse'
import { NavigationTab } from '../../Navigation/Navigation.types'
import { Navigation } from '../../Navigation'

import { Navigation as AccountNav } from '../Navigation'
import { NavigationTab as AccountNavTab } from '../Navigation/Navigation.types'

const AssetPage = () => {
  const activeTab = NavigationTab.ACCOUNT

  const context = useWeb3React<Web3Provider>()
  const { connector } = context
  const currentConnector = injected
  //const activating = currentConnector === activatingConnector
  const connected = currentConnector === connector
  //const disabled = !triedEager || !!activatingConnector || connected || !!error

  return (
    <>
      <Navigation activeTab={activeTab} />
      <AccountNav activeTab={AccountNavTab.MYASSET} />
      {connected ? (
        <AssetBrowse />
      ) : null}


    </>
  )
}
export default React.memo(AssetPage)

