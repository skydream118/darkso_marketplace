import { action } from 'typesafe-actions'

import { NFTsSearchOption } from '../nft/types'


export const BROWSE = 'Browse'

export const browse = (options: NFTsSearchOption) => action(BROWSE, { options })

export type BrowseAction = ReturnType<typeof browse>

