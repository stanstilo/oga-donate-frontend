import React from 'react'
import * as actionTypes from './ActionTypes'

export const toggleCollapsedNav = () => ({
    type: actionTypes.TOGGLE_COLLAPSED_NAV
})

export const setDrawerType = (drawerType) => ({
    type:actionTypes.DRAWER_TYPE,
    drawerType
})

export const updateWindowWidth = (width) => ({
    type:actionTypes.WINDOW_WIDTH,
    width
})
