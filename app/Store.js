import { applyMiddleware, createStore, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1';
import thunk from 'redux-thunk';
import rootReducer from 'saeko-native/app/reducers';
import Reactotron from 'saeko-native/config/ReactotronConfig';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
	key: 'root',
	storage: storage,
	stateReconciler: autoMergeLevel1,
	whitelist: ['Auth', 'Env', 'User']
};

const pReducer = persistReducer(persistConfig, rootReducer);

let store = createStore(
  pReducer,
  compose(
    applyMiddleware(thunk),
    Reactotron.createEnhancer()
  )
);

export default store;
export const persistor = persistStore(store);
