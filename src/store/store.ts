import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

const reducers = combineReducers({});

const persistConfig = {
  key: 'root', // localStorage key
  storage, // localStorage
  whitelist: [],
  blacklist: [],
};

const persistStore = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistStore,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
