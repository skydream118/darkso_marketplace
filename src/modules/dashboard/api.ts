import { NFT } from './types'
import recent_nfts from '../../demo/recent_nft.json';
export type STATResult = {
  tvolumn:number
  tsale:number
  aprice:number
}

export type RecentNFTsResult = {
  sales:NFT[]
  list: NFT[]
}

export const get_stat = async (): Promise<STATResult> => {
    // const { data } = await fetch(url)
    // return data    
  var result: STATResult = {tvolumn:100,tsale:50,aprice:300}
	// result.tvolumn = 100
	// result.tsale = 50
	// result.aprice = 300
	return result;
}

export const get_recent_nfts = async (): Promise<RecentNFTsResult> => {
  var result: RecentNFTsResult = {list : recent_nfts.recent_list, sales : recent_nfts.recent_sale};
  return result;
}

