import {
    browse
  } from '../../modules/routing/actions'

export type Props = {
    page : number,
    size : number,
    onBrowser : typeof browse
}
