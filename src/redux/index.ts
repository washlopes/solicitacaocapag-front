
import { configureStore, combineReducers, ThunkAction } from "@reduxjs/toolkit";
import Solicitacoes from "./Solicitacoes/Solicitacoes.reducer";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import AuthenticationReducer from "./Authentication/Authentication.reducer";

const reducers = combineReducers({

    solicitacoes: Solicitacoes,
    authentication: AuthenticationReducer

})

const persistedReducer = persistReducer({
    key: 'solicitacaocapag',
    storage,
    blacklist: ['solicitacoes']
}, reducers)

const store = configureStore({
    // reducer: reducers
    reducer: persistedReducer
})

const persistor = persistStore(store)

export interface Action<T = any> {
    type: string
    payload?: T
}

export type RootState = ReturnType<typeof reducers>

export type Thunk<T = any> = ThunkAction<void, RootState, unknown, Action<T>>

export type ThunkDispatch = (thunk: Thunk) => Promise<Thunk>


export { store, persistor }