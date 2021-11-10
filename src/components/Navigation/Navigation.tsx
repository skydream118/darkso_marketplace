import React, { useCallback } from 'react'
import { Link } from 'react-router-dom'
import { Tabs } from 'decentraland-ui'
import { t } from 'decentraland-dapps/dist/modules/translation/utils'
import { ProviderType } from 'decentraland-connect';
import { locations } from '../../modules/routing/locations'
import { Props, NavigationTab } from './Navigation.types'

import './Navigation.css'

const Navigation = (props: Props) => {
  const { activeTab, isConnected, onNavigate,onConnect } = props

  // const handleOnSignIn = useCallback(() => {
  //   onNavigate(locations.signIn())
  // }, [onNavigate])

  // const handleOnClickAccount = useCallback(() => {
  //   onNavigate(locations.account())
  // }, [onNavigate])
  const handleConnect = () => {
    onConnect(ProviderType.INJECTED);
  }

  return (
    <Tabs>
      <Tabs.Left>
        <Link to={locations.dashboard()}>
          <Tabs.Tab active={activeTab === NavigationTab.DASH}>
            {t('nav.dashboard')}
          </Tabs.Tab>
        </Link>
        <Link to={locations.market()}>
          <Tabs.Tab active={activeTab === NavigationTab.MARKET}>
            {t('nav.marketplace')}
          </Tabs.Tab>
        </Link>
        <Link to={locations.train()}>
          <Tabs.Tab active={activeTab === NavigationTab.TRAIN}>
            {t('nav.training')}
          </Tabs.Tab>
        </Link>
        <Link to={locations.pack()}>
          <Tabs.Tab active={activeTab === NavigationTab.PACK}>
            {t('nav.packs')}
          </Tabs.Tab>
        </Link>

        {/* <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
          <Link to={locations.activity()}>
            <Tabs.Tab active={activeTab === NavigationTab.ACTIVITY}>
              {t('navigation.activity')}
            </Tabs.Tab>
          </Link>
        </Responsive> */}
      </Tabs.Left>
      <Tabs.Right>
        {isConnected?(
          <Link to={locations.account()}>
              <Tabs.Tab>
                {t('nav.account')}
              </Tabs.Tab>  
          </Link>
          
        ):(
          <Tabs.Tab>
            <a onClick={handleConnect}>
              {t('nav.signin')}
            </a>
          </Tabs.Tab>
        )}
      </Tabs.Right>
    </Tabs>
  )
}

export default React.memo(Navigation)
