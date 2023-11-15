import { combineReducers, createStore,applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import changeReducer from "./reducers/ChangeReducer"



const initialState = {

}
const reducers = combineReducers({
change : changeReducer
})

const store = createStore(reducers,initialState,composeWithDevTools(applyMiddleware(thunk)));

export default store;