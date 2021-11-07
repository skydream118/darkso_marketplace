import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
//import { ScrollToTop } from './components/ScrollToTop'
import WalletProvider from 'decentraland-dapps/dist/providers/WalletProvider'
import ToastProvider from 'decentraland-dapps/dist/providers/ToastProvider'

//import './modules/analytics/track'
//import './modules/analytics/rollbar'

import { initStore, history } from './modules/store'
import { Routes } from './components/Routes'

//import { buildContracts } from './modules/contract/utils'

import './themes'
import './index.css'

async function main() {
  //??????????????????????????????????????
  //await buildContracts()

  const component = (
    <Provider store={initStore()}>
      {/*<ToastProvider>*/}
          <WalletProvider>
            <ConnectedRouter history={history}>
  {/*            <ScrollToTop /*/}>
              <Routes />
            </ConnectedRouter>
          </WalletProvider>
      {/*</ToastProvider>*/}

    </Provider>
  )

  ReactDOM.render(component, document.getElementById('root'))
}

main()
