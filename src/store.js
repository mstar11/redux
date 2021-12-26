import {createStore,combineReducers,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
// import {counterReducer} from "./reducer"
import {getPost} from "./reducer"

const reducers =combineReducers ({

        // counter :counterReducer ,
        post:getPost 
})
const initialState= {}
const middleware = [thunk]
const store =createStore(
        reducers,
        initialState,
        composeWithDevTools(applyMiddleware(...middleware))
)
export default store ;