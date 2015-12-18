'use strict'
import { Get_Intheaters } from '../actions'

const initialState = {
  intheaters:[]
}

function reducer(state = initialState, action) {
  switch(action.type) {
    case Get_Intheaters:
      return {
        ...state,
        intheaters: action.data
      }
    default:
      return state
  }
}
const rootReducer = reducer

export default rootReducer
