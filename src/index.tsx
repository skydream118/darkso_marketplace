import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { Web3ReactProvider} from '@web3-react/core'
//import { ScrollToTop } from './components/ScrollToTop'
//import WalletProvider from 'decentraland-dapps/dist/providers/WalletProvider'
import { Web3Provider } from '@ethersproject/providers'
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

function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider)
  library.pollingInterval = 12000
  return library
}

async function main() {
  //??????????????????????????????????????
  //await buildContracts()

  const component = (
    <Provider store={initStore()}>
      <TranslationProvider locales={Object.keys(locales)}>
        <Web3ReactProvider getLibrary={getLibrary}>
            <ConnectedRouter history={history}>
  
              <Routes />
            </ConnectedRouter>
        </Web3ReactProvider>
      </TranslationProvider>
    </Provider>
  )

  ReactDOM.render(component, document.getElementById('root'))
}

main()
