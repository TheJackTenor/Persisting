import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import { AsyncStorage } from 'react-native'

import rootReducer from './module'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['increment']
}

const persistReducers = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistReducers)

export const persistor = persistStore(store)

// persistor.purge()