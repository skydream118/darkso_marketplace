import { NFTsSearchOption } from '../nft/types'
import { getSearchParams } from './search'

export const locations = {
    root: () => '/',
    signIn: () => '/sign-in',
    dashboard: () => '/dashboard',
    market: (options?: NFTsSearchOption) => {
        const params = getSearchParams(options)
        return params ? `/marketplace?${params.toString()}` : '/marketplace'
      },
    train: ()=> '/train',
    pack: () => '/pack',
    account: ()=> '/account'
}  