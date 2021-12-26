import {createStore,combineReducers,applyMiddleware} from "redux";
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"
import {getData} from "./reducer2"


const reducers =combineReducers ({

        data :getData 
})
// const test = JSON.parse(localStorage.getItem('test'))
//   ? JSON.parse(localStorage.getItem('test'))
//   : []
// const initialState ={
//         data :{data :test},
// }
const middleware = [thunk]
const store2 = createStore(
        reducers,
        // initialState,
        composeWithDevTools(applyMiddleware(...middleware))
)
export default store2 