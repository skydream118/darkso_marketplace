import { action } from 'typesafe-actions'

import {GetStatOption} from './types';
import { NFT } from '../nft/types';
export const GET_STAT_REQUEST = '[Request] Get State'
export const GET_STAT_SUCCESS = '[Success] Get State'
export const GET_STAT_FAILURE = '[Failure] Get State'

export const GET_RecentNFTs_REQUEST = "[Request] Get Recent NFTs"
export const GET_RecentNFTs_SUCCESS = "[Succss] Get Recent NFTs"
export const GET_RecentNFTs_FAILURE = "[failure] Get Recent NFTs"


export const getStatRequest = ()=>
	action(GET_STAT_REQUEST)

export const getStatFailure = (error: string)=>
	action(GET_STAT_FAILURE,{
		error
	})

export const getStatSuccess = (stat: GetStatOption) =>
  action(GET_STAT_SUCCESS, {
    stat
  })

export const getRecentNFTsRequest = ()=>
  action(GET_RecentNFTs_REQUEST)

export const getRecentNFTsFailure = (error: string)=>
  action(GET_RecentNFTs_FAILURE,{
	  error
  })

export const getRecentNFTsSuccess = (list: NFT[], sale:NFT[]) =>
	action(GET_RecentNFTs_SUCCESS, {
		list,sale
	})

export type getStatRequestAction = ReturnType<typeof getStatRequest>
export type getStatSuccessAction = ReturnType<typeof getStatSuccess>
export type getStatFailureAction = ReturnType<typeof getStatFailure>

export type getNFTsRequestAction = ReturnType<typeof getRecentNFTsRequest>
export type getNFTsSuccessAction = ReturnType<typeof getRecentNFTsSuccess>
export type getNFTsFailureAction = ReturnType<typeof getRecentNFTsFailure>






