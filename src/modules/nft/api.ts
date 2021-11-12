import { NFT } from './types'
import recent_nfts from '../../demo/recent_nft.json'
import {NFTsSearchOption} from './types'

export type fetchNFTsResult = {
  nfts:NFT[]
  size: number
}

export const get_nfts = async (param: NFTsSearchOption): Promise<fetchNFTsResult> => {
  console.log(param.page_num);
  var result: fetchNFTsResult = {nfts : recent_nfts.recent_list, size : 3 };
  return result;
}

