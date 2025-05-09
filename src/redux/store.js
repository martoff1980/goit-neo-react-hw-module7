import { configureStore, combineReducers } from '@reduxjs/toolkit';
import contactsSliceReducer from './contactsSlice';
import filtersSliceReducer from './filtersSlice';
// import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

// const contactsPersistConfig = {
//   key: 'contacts',
//   storage,
//   whitelist: ['items'],
// };

// const rootReducer = combineReducers({
//   contacts: persistReducer(contactsPersistConfig, contactsReducer),
//   filters: filtersReducer,
// });

// export const store = configureStore({
//   reducer: rootReducer,
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

export const store = configureStore({
  reducer: {
    contacts: contactsSliceReducer,
    filters: filtersSliceReducer,
  },
});

// export const persistor = persistStore(store);
