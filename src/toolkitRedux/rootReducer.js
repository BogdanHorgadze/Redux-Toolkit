import { combineReducers } from '@reduxjs/toolkit'
import countSlice from './countSlice'

const rootReducer = combineReducers({
    countSlice
})


export default rootReducer



