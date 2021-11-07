import {
  GET_STAT_REQUEST,
  getStatRequestAction,
  getStatSuccess
} from './actions'

import {get_stat} from './api'

export function* dashboardSaga() {
  yield takeEvery(GET_STAT_REQUEST, handleGetStat)
}

function* handleGetStat(action:getStatRequestAction){
  try {
    const [
      tvolumn,
      tsales,
      aprice
    ]: AwaitFn<typeof get_stat> = yield call(get_stat)

    yield put(
      getStatSuccess(
        {
          tvolumn,
          tsale,
          aprice
        }
      )
    )
  }catch (error){
      yield put(fetchNFTsFailure(error.message))
  }
}