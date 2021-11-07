import React, { useCallback, useEffect, useMemo } from 'react'
import { t } from 'decentraland-dapps/dist/modules/translation/utils'
import { Page, Hero, Button } from 'decentraland-ui'
import { Navbar } from '../Navbar'
import { Slideshow } from './Slideshow'
import { Props } from './DashboardPage.types'
//import './Dashboard.css'

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
  	
  		// <h2> hello world</h2>
  	
  

}
export default React.memo(DashboardPage)
