import { Switch, Route, Redirect } from 'react-router-dom'
//import Intercom from 'decentraland-dapps/dist/components/Intercom'

// import { AssetType } from '../../modules/asset/types'
import { locations } from '../../modules/routing/locations'
import { DashboardPage } from '../Dashboard'
//import {MarketplacePage} from '../Marketplace'

const Routes = () => {
  //const APP_ID = process.env.REACT_APP_INTERCOM_APP_ID

  return (
    <>
      <Switch>
        <Route exact path={locations.root()} component={DashboardPage} />
        <Route exact path={locations.market()} component={DashboardPage} />
        <Route exact path={locations.train()} component={DashboardPage} />
        <Route exact path={locations.pack()} component={DashboardPage} />
        {/* <Route exact path={locations.signIn()} component={SignInPage} /> */}
        {/* <Route exact path={locations.signIn()} component={SignInPage} />
         */}
        

        {/* <Route exact path="browser" component={LandingPage}/> */}
        {/*<Redirect
          from="/browse"
          to={locations.browse() + window.location.search}
          push
        />*/}
        <Redirect to="/"/>
        <Redirect from="/dashboard" to="/"/>
      </Switch>
      {/*{APP_ID ? (
        <Intercom appId={APP_ID} settings={{ alignment: 'right' }} />
      ) : null}*/}
    </>
  )
}

export default Routes
