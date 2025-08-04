import { createStore, applyMiddleware, compose } from 'redux';
import { PostsReducer } from './reducer';
import { thunk } from 'redux-thunk';

 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 export const store = createStore(PostsReducer, composeEnhancers(

    applyMiddleware(thunk)
  ));