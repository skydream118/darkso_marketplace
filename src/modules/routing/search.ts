import { NFTsSearchOption } from '../nft/types'

const SEARCH_ARRAY_PARAM_SEPARATOR = '_'

export function getSearchParams(options?: NFTsSearchOption) {
    let params: URLSearchParams | undefined
    if (options) {
      params = new URLSearchParams()
  
      if (options.sort) {
        params.set('sort', options.sort)
      }
  
      if (options.page_num) {
        params.set('page', options.page_num.toString())
      }
  
      if (options.account_addr) {
        params.set('account', options.account_addr)
      }

      if(options.rarity){
          params.set('rarity',options.rarity)
      }
      if(options.type){
        params.set('type',options.type)
    }
    return params
  }
}
export function getURLParam<T extends string>(
    search: string,
    paramName: string
  ) {
    const param = new URLSearchParams(search).get(paramName) as T | null
    return param
  }
  
export function getURLParamArray<T extends string>(
    search: string,
    paramName: string,
    validValues: string[] = []
  ) {
    const param = getURLParam<T>(search, paramName)
    return param === null
      ? []
      : (param
          .split(SEARCH_ARRAY_PARAM_SEPARATOR)
          .filter(item => validValues.includes(item as T)) as T[])
  }

  
  
  