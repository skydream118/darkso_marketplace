import { action } from 'typesafe-actions'
//import { ENABLE_TRAIN } from '../training/actions';

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


export const RESET_STATE = '[Reset] State'
export const resetState = () => 
  action(RESET_STATE)
export type resetStateAction = ReturnType<typeof resetState>


export const BUY_NFT_REQUEST = '[Request] BUY NFT'
export const BUY_NFT_SUCCESS = '[Success] BUY NFT'
export const BUY_NFT_FAILURE = '[Failure] BUY NFT'

export const buyNFTRequest = (token_id : string, price: string)=>
  action(BUY_NFT_REQUEST,{token_id, price})
export const buyNFTFailure = (error: string|undefined)=>
	action(BUY_NFT_FAILURE,{
		error
	})
export const buyNFTSuccess = () =>
  action(BUY_NFT_SUCCESS)
export type buyNFTRequestAction = ReturnType<typeof buyNFTRequest>
export type buyNFTFailureAction = ReturnType<typeof buyNFTFailure>
export type buyNFTSuccessAction = ReturnType<typeof buyNFTSuccess>


export const ENABLE_SALE_REQUEST = '[Request] Set Sale'
export const ENABLE_SALE_SUCCESS = '[Success] BUY NFT'
export const ENABLE_SALE_FAILURE = '[Failure] BUY NFT'
export const enableSaleRequest = (token_id: string, price: string) =>
  action(ENABLE_SALE_REQUEST, {token_id, price})

export const enableSaleSuccess = () =>
  action(ENABLE_SALE_SUCCESS)

export const enableSaleFailure = (error : string | undefined) =>
  action(ENABLE_SALE_FAILURE,{error})
export type enableSaleRequestAction = ReturnType<typeof enableSaleRequest>
export type enableSaleSuccessAction = ReturnType<typeof enableSaleSuccess>
export type enableSaleFailureAction = ReturnType<typeof enableSaleFailure>




export const DISABLE_SALE_REQUEST = '[Request] Set Sale'
export const DISABLE_SALE_SUCCESS = '[Success] BUY NFT'
export const DISABLE_SALE_FAILURE = '[Failure] BUY NFT'
export const disableSaleRequest = (token_id: string) =>
  action(DISABLE_SALE_REQUEST,{token_id})

export const disableSaleSuccess = () =>
  action(DISABLE_SALE_SUCCESS)

export const disableSaleFailure = (error: string | undefined) =>
  action(DISABLE_SALE_FAILURE, {error})
export type disableSaleRequestAction = ReturnType<typeof disableSaleRequest>
export type disableSaleSuccessAction = ReturnType<typeof disableSaleSuccess>
export type disableSaleFailureAction = ReturnType<typeof disableSaleFailure>