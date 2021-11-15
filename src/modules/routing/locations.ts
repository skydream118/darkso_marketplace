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
    account: ()=> '/account',
    myasset: (options?: NFTsSearchOption) => {
      const params = getSearchParams(options)
      return params? `/account/my_nfts?${params.toString()}` : '/account/my_nfts'
    },
    token: (token_id: string = ':tokenId') => {
      return `/token/detail/${token_id}`
    }
}  