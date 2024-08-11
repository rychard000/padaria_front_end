import { combineReducers } from 'redux'

import cartReducer from './Cart/Reducer'
// import userReducer from './User/Reducer'

const rootReducer = combineReducers({ cartReducer })
//aonde fica todos os reducers,la aonde fica toda a logica do redux, no caso so tenho um reducer,no caso usa-se
//o mesmo para focar em uma parte da aplicacao no caso so estou usando para metodo de carrinho em uma loja virtual

export default rootReducer