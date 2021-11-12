import { takeEvery, put, select, call } from 'redux-saga/effects'
import { push, getLocation } from 'connected-react-router'
import { getSortBy, getPage, getRarities, getType, getAccount } from './selectors'

import {
    BROWSE,
    BrowseAction,
} from './actions'

import { getSearchParams } from './search'

import { getNFTsRequest } from '../nft/actions'
import { NFTsSearchOption } from '../nft/types'


export function* routingSaga() {
    yield takeEvery(BROWSE, handleBrowse)
}

function* handleBrowse(action: BrowseAction) {
    const options: NFTsSearchOption = yield getNewBrowseOptions(
        action.payload.options
    )
    const { pathname }: ReturnType<typeof getLocation> = yield select(getLocation)

    yield put(
        getNFTsRequest(options)
    )
    yield put(push(buildBrowseURL(pathname, options)))
}

function* getNewBrowseOptions(
    current: NFTsSearchOption
): Generator<unknown, NFTsSearchOption, any> {
    let previous = yield getCurrentBrowseOptions()
    current = yield deriveCurrentOptions(previous, current)
    
    // if (shouldResetOptions(previous, current)) {
    //     previous = {
    //         page: 1,
    //         onlyOnSale: previous.onlyOnSale,
    //         sortBy: previous.sortBy,
    //         isMap: previous.isMap,
    //         isFullscreen: previous.isFullscreen
    //     }
    // }
    return {
        ...previous,
        ...current
    }
}


// TODO: Consider moving this should live to each vendor
function* deriveCurrentOptions(
    previous: NFTsSearchOption,
    current: NFTsSearchOption
  ) {
    return {
      ...previous,
        sort: current.sort || previous.sort,
        page_num : current.page_num || previous.page_num,
        account_addr : current.account_addr || previous.account_addr || undefined,
        rarity : current.rarity || previous.rarity,
        type : current.type || previous.type
    }  

}
  

export function* getCurrentBrowseOptions(): Generator<
    unknown,
    NFTsSearchOption,
    unknown
> {
    return {
        sort: yield select(getSortBy),
        page_num: yield select(getPage),
        account_addr : yield select(getAccount),
        rarity : yield select(getRarities),
        type : yield select(getType)
    } as NFTsSearchOption
}

// ------------------------------------------------
// Utility functions, not handlers

export function buildBrowseURL(
    pathname: string,
    browseOptions: NFTsSearchOption
): string {
    const params = getSearchParams(browseOptions)
    return params ? `${pathname}?${params.toString()}` : pathname
}

