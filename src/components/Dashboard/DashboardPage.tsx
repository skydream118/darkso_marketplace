import React, { useEffect } from 'react'
import { t } from 'decentraland-dapps/dist/modules/translation/utils'
import { Page, Hero } from 'decentraland-ui'
import { Props } from './DashboardPage.types'
//import { Navbar } from '../Navbar'
import { NavigationTab } from '../Navigation/Navigation.types'
import { Navigation } from '../Navigation'
import { Slideshow } from './Slideshow'
import './Dashboard.css'

const DashboardPage = (props: Props) => {
  const {
    homepage,
    homepageLoading,
    onNavigate,
    onGetDashInfo,
  } = props

  useEffect(() => {
    onGetDashInfo()
    // eslint-disable-next-line
  }, [onGetDashInfo])
  return (
    <>
      {/* <Navbar isFullscreen isOverlay /> */}
      <Navigation activeTab={NavigationTab.DASH}/>
      <Hero className="HomePageHero">
        <Hero.Description>
          {homepage.total_volumn}
          {"  "}
          {homepage.total_sale}
          {"  "}
          {homepage.average_price}          
        </Hero.Description>
        
        <Hero.Content>
          <div className="hero-image" />{' '}
        </Hero.Content>
      </Hero>
      <Page className="HomePage">
        
        <Slideshow
            title={t(`dash_page.list`)}
            assets={homepage.current_list}
            isLoading={homepageLoading}
            isView={true}
            onViewAll={() => onNavigate('marketplace')}
          />
        <Slideshow
            title={t(`dash_page.sale`)}
            assets={homepage.current_saled}
            isLoading={homepageLoading}
            isView={false}
            onViewAll={() => onNavigate('')}
          />
      </Page>
      {/* <Footer />   */}
    </>
  )
}
export default React.memo(DashboardPage)
