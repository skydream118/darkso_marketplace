import { SortBy } from "../../modules/nft/types"
import {
    browse
  } from '../../modules/routing/actions'

export type Props = {
    sortBy : SortBy,
    size : number,
    onBrowser : typeof browse
}
