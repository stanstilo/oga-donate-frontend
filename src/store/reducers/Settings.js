import React from 'react'
import * as actionTypes from '../actions/ActionTypes'

const initialState = {
    navCollapsed:false,
    drawerType: actionTypes.FIXED_DRAWER,
    width: window.innerWidth
}

const settings = (state=initialState, action) => {
   switch(action.type){
       case actionTypes.TOGGLE_COLLAPSED_NAV:
           return{
               ...state,
               navCollapsed:!state.navCollapsed
           }
        case actionTypes.DRAWER_TYPE:
            return{
                ...state,
                drawerType:action.drawerType
            }
            case actionTypes.WINDOW_WIDTH:
                return{
                    ...state,
                    width:action.width
                }
           default:
               return state
   }
}

export default settings
