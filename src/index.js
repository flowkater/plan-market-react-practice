import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './containers';
import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
    const middlewares = [sagaMiddleware];
    const store = createStore(      
        reducers,
        compose(
            applyMiddleware(...middlewares),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    );
    
    sagaMiddleware.run(rootSaga);
    return store;
};

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);

registerServiceWorker();

