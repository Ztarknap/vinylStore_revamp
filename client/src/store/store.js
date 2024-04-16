import {compose, applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';

import {persistStore, persistReducer} from 'redux-persist' 
import storage from 'redux-persist/lib/storage'

import { rootReducer } from './root-reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user']
}


const middleWares = [logger];

const composedEnhancers = compose(applyMiddleware(...middleWares));

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, undefined, composedEnhancers);
export const persistor = persistStore(store);
 