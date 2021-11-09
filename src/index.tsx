import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
//import { ScrollToTop } from './components/ScrollToTop'
import WalletProvider from 'decentraland-dapps/dist/providers/WalletProvider'
import TranslationProvider from 'decentraland-dapps/dist/providers/TranslationProvider'

//import ToastProvider from 'decentraland-dapps/dist/providers/ToastProvider'

import * as locales from './modules/translation/locales'

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
      <TranslationProvider locales={Object.keys(locales)}>
      
      {/*<ToastProvider>*/}
          <WalletProvider>
            <ConnectedRouter history={history}>
  
              <Routes />
            </ConnectedRouter>
          </WalletProvider>
      {/*</ToastProvider>*/}
      </TranslationProvider>
    </Provider>
  )

  ReactDOM.render(component, document.getElementById('root'))
}

main()
