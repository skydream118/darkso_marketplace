import { action } from 'typesafe-actions'

export const SET_ACTIVE_TAB = '[Request] set navigation active Tab'

export const setActiveTab = (tab : string)=>
	action(SET_ACTIVE_TAB, {tab})

export type setActiveTabAction = ReturnType<typeof setActiveTab>
