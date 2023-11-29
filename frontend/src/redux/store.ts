import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import counterReducer from './reducers/counterReducer';
import gameHistoryReducer from './reducers/gameHistoryReducer';

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, counterReducer);
const gameHistoryPersistedReducer = persistReducer(persistConfig, gameHistoryReducer);

const store = configureStore({
    reducer: {
        counter: persistedReducer,
        gameHistory: gameHistoryPersistedReducer,
    },
    middleware: [thunk],
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store, persistor };

