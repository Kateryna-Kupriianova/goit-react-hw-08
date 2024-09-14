import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contactsSlice';
import filtersReducer from './filters/filtersSlice';
import { combineReducers } from 'redux';
import { authReducer } from './auth/slice';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER} from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const persistConfig  = {
    key: 'auth',
    storage,
    whitelist: ['token'],
};

const persistReducered = persistReducer(persistConfig, authReducer);





const rootReducer = combineReducers({
    contacts: contactsReducer,
    filters: filtersReducer,
    auth: persistReducered,
    
});
 export const store = configureStore({
     reducer: rootReducer,
     middleware: getDefaultMiddleware({
         serializableCheck: {
             ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
         },
    
     }),

 });
     
    
 

 export const persistor = persistStore(store);

