import { applyMiddleware, createStore } from "redux"
import { combineReducers } from "redux"
import countryReducer from "./countryReducers"
import { thunk } from "redux-thunk"
const reducers=combineReducers({
    countries:countryReducer
})
export const store=createStore(reducers,applyMiddleware(thunk))
