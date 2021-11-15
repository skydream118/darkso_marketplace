import { action } from 'typesafe-actions'
import Darkso from '../../darkso'
import { NFT } from '../nft/types'

export const BUY_Pack_REQUEST = '[Request] Buy Pack'
export const BUY_Pack_SUCCESS = '[Success] Buy Pack'
export const BUY_Pack_FAILURE = '[Failure] Buy Pack'

export const buyPackRequest = (darkso : Darkso)=>
	action(BUY_Pack_REQUEST,{
    darkso
  })

export const buyPackFailure = (error: string)=>
	action(BUY_Pack_FAILURE,{
		error
	})

export const buyPackSuccess = ( nft: NFT) =>
  action(BUY_Pack_SUCCESS, {
    nft
  })

export type buyPackRequestAction = ReturnType<typeof buyPackRequest>
export type buyPackSuccessAction = ReturnType<typeof buyPackSuccess>
export type buyPackFailureAction = ReturnType<typeof buyPackFailure>






