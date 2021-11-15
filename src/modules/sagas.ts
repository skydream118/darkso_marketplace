import { all } from 'redux-saga/effects'
import { authorizationSaga } from 'decentraland-dapps/dist/modules/authorization/sagas'
import { createAnalyticsSaga } from 'decentraland-dapps/dist/modules/analytics/sagas'
import { createProfileSaga } from 'decentraland-dapps/dist/modules/profile/sagas'
import { transactionSaga } from 'decentraland-dapps/dist/modules/transaction/sagas'

import { dashboardSaga } from './dashboard/sagas'
import { NFTsSaga } from './nft/saga'
import { routingSaga } from './routing/saga'
import { translationSaga } from './translation/sagas'
import { PackSaga } from './pack/saga'
import { TrainSaga } from './training/saga'

const analyticsSaga = createAnalyticsSaga()
const profileSaga = createProfileSaga({
  peerUrl: process.env.REACT_APP_PEER_URL!
})

export function* rootSaga() {
  yield all([
    analyticsSaga(),
    profileSaga(),
    transactionSaga(),
    authorizationSaga(),
    dashboardSaga(),
    translationSaga(),
    NFTsSaga(),
    routingSaga(),
    PackSaga(),
    TrainSaga()
    //walletSaga()
  ])
}
