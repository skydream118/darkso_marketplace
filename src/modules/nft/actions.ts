import { action } from 'typesafe-actions'

import { NFTsSearchOption, NFT} from './types';

export const GET_NFTs_REQUEST = '[Request] Get Marketplace list'
export const GET_NFTs_SUCCESS = '[Success] Get Marketplace list'
export const GET_NFTs_FAILURE = '[Failure] Get Marketplace list'

export const getNFTsRequest = (search: NFTsSearchOption)=>
	action(GET_NFTs_REQUEST,{
        search
    })

export const getNFTsFailure = (error: string)=>
	action(GET_NFTs_FAILURE,{
		error
	})

export const getNFTsSuccess = (nfts: NFT[], size: number) =>
  action(GET_NFTs_SUCCESS, {
    nfts,
    size
  })

export type getNFTSRequestAction = ReturnType<typeof getNFTsRequest>
export type getNFTSSuccessAction = ReturnType<typeof getNFTsSuccess>
export type getNFTSFailureAction = ReturnType<typeof getNFTsFailure>






