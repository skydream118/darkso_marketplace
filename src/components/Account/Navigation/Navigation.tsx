import React from 'react'
import { Web3Provider } from '@ethersproject/providers'
import { useWeb3React} from '@web3-react/core'
import { Link } from 'react-router-dom'
import { Tabs } from 'decentraland-ui'
import { t } from 'decentraland-dapps/dist/modules/translation/utils'
//import { ProviderType } from 'decentraland-connect';
import { locations } from '../../../modules/routing/locations'
import { Props, NavigationTab } from './Navigation.types'

import { SortBy } from '../../../modules/nft/types'

import './Navigation.css'

const Navigation = (props: Props) => {
  const { activeTab } = props

  const context = useWeb3React<Web3Provider>()
  const { account } = context
//  const { connector, activate, error ,chainId, deactivate} = context

  return (
    <Tabs>
      <Tabs.Left>
        <Link to={locations.myasset({
          page_num : 1,
          sort : SortBy.NEWEST,
          account_addr: account as string | undefined
        }
        )}>
          <Tabs.Tab active={activeTab === NavigationTab.MYASSET}>
            {t('account.nav.myasset')}
          </Tabs.Tab>
        </Link>
      </Tabs.Left>
    </Tabs>
  )
}

export default React.memo(Navigation)
