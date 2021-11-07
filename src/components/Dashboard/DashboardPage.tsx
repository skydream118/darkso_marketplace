import React, { useEffect } from 'react'
//import { t } from 'decentraland-dapps/dist/modules/translation/utils'
//import { Button } from 'decentraland-ui'
import { Props } from './DashboardPage.types'
//import './Dashboard.css'

const DashboardPage = (props: Props) => {
  const {
    // homepage,
    // homepageLoading,
//    onNavigate,
    onGetDashInfo,
  } = props

  useEffect(() => {
    onGetDashInfo()
    // eslint-disable-next-line
  }, [onGetDashInfo])
  return (<><div>Hello world</div></>)
}
export default React.memo(DashboardPage)
