import React from 'react'
import { Web3Provider } from '@ethersproject/providers'
import { useWeb3React } from '@web3-react/core'

import { injected } from '../../modules/wallet/connectors'
import { AssetBrowse } from '../AssetBrowse'
import { NavigationTab } from '../Navigation/Navigation.types'
import { Navigation } from '../Navigation'

const MarketplacePage = () => {
    const activeTab = NavigationTab.MARKET

    const context = useWeb3React<Web3Provider>()
    const { connector } = context
    const currentConnector = injected
    //const activating = currentConnector === activatingConnector
    const connected = currentConnector === connector
    //const disabled = !triedEager || !!activatingConnector || connected || !!error
  
    return (
        <>
          <Navigation activeTab={activeTab}/>
          {connected? (
            <AssetBrowse/>
          ):null}
        </>
      )
}
export default React.memo(MarketplacePage)

