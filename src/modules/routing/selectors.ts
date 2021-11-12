import { createSelector } from 'reselect'
import {
    getSearch as getRouterSearch,
    //  getLocation
} from 'connected-react-router'

import {
    getURLParam,
//    getURLParamArray
} from './search'
import { RootState } from '../reducer'
import { Rarity, SortBy,Type } from '../nft/types'


export const getPage = createSelector<RootState, string, number>(
    getRouterSearch,
    search => {
        const page = getURLParam(search, 'page')
        return page === null || isNaN(+page) ? 1 : +page
    }
)
export const getRarities = createSelector<RootState, string, Rarity>(
    getRouterSearch,
    search => getURLParam<Rarity>(search, 'rarity') || Rarity.ALL
        // getURLParamArray<Rarity>(
        //     search,
        //     'rarities',
        //     Object.values(Rarity).filter(
        //         value => typeof value === 'string'
        //     ) as string[]
        // )
)

export const getType = createSelector<RootState, string, string>(
    getRouterSearch,
    search => {
        const type = getURLParam(search, 'type')
        return type === null ? Type.ALL : type
    }
)

export const getSortBy = createSelector<
    RootState,
    string,
    SortBy
>(
    getRouterSearch,
    (search) =>getURLParam<SortBy>(search, 'sort') || SortBy.NEWEST
)

export const getAccount = createSelector<
    RootState,
    string,
    string | null
>(
    getRouterSearch,
    (search) =>getURLParam(search, 'account')
)


