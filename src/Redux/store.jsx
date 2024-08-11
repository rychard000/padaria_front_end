import {createStore, applyMiddleware} from "redux";
import rootReducer from './root-reducer.jsx';
import logger from "redux-logger";

const store = createStore(rootReducer, applyMiddleware(logger))
//puxa aonde vai ficar o rootReducers aonde tem todos os reducers, applyMiddleware eh um console.log do redux,
//mostra como estao o andamento da aplicacao ao desenvolve-la

export default store;