import storage from 'redux-persist/es/storage'
import { applyMiddleware, createStore, compose } from 'redux'
import { createFilter   } from 'redux-persist-transform-filter';
import { persistReducer, persistStore } from 'redux-persist'
import { routerMiddleware } from 'react-router-redux'
import apiMiddleware from './middleware';
import rootReducer from './reducers'

import { composeWithDevTools } from 'redux-devtools-extension';

export default (history) => {
  const persistedFilter = createFilter(
    'auth', ['access', 'refresh']
  );

  const reducer = persistReducer(
    {
      key: 'polls',
      storage: storage,
      whitelist: ['auth'],
      transforms: [ persistedFilter]
    },
    rootReducer
  )

  const store = createStore(
    reducer, {},
		composeWithDevTools(
			applyMiddleware(apiMiddleware, routerMiddleware(history)),
		)
  )

  persistStore(store)

  return store
}
