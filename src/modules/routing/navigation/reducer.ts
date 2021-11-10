import {
    SET_ACTIVE_TAB,
    setActiveTabAction
}from './actions'


export type ActiveUIState = {
    active_tab: string | null
}

const INITIAL_STATE: ActiveUIState = {
    active_tab : null
}
  
type UIReducerAction = 
    |setActiveTabAction
    
  export function NavigationReducer(
    state: ActiveUIState = INITIAL_STATE,
    action: UIReducerAction
  ) {
    switch (action.type) {
      case SET_ACTIVE_TAB: {
        return {
          ...state,
          active_tab: action.payload.tab
        }
      }
      default:
          return state;
    }
}