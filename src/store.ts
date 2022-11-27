import {counterReducer} from "./redux/counterReducer";
import {combineReducers,createStore} from "redux"

 const rootReducers = combineReducers({
     counter: counterReducer
})
export const store = createStore(rootReducers)
export type AppRootStateType = ReturnType <typeof rootReducers>
// @ts-ignore
window.store = store