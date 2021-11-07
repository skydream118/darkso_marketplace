import {GetStatOption} from './types';

export const GET_STAT_REQUEST = '[Request] Get State'
export const GET_STAT_SUCCESS = '[Success] Get State'
export const GET_STAT_FAILURE = '[Failure] Get State'

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

export type getStatRequestAction = ReturnType<typeof getStatRequest>




