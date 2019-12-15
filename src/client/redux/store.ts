import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducers from './reducers';
import rootSaga from './sagas';

const bindMiddleware = middleware => {
    if (process.env.NODE_ENV !== 'production') {
      const { composeWithDevTools } = require('redux-devtools-extension')
      return composeWithDevTools(applyMiddleware(...middleware))
    }
    return applyMiddleware(...middleware)
  }


const makeStore = (initialState) => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        rootReducers,
        initialState,
        bindMiddleware([sagaMiddleware])
    );
    // sagaMiddleware.run(rootSaga);
    store.sagaTask = sagaMiddleware.run(rootSaga)
    return store;
} 

export default makeStore
