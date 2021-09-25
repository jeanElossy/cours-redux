import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css"
import "./main.scss";

//creer un store redux on a :
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducers from "./reducer"
import getPots from './actions/post.action';
import getUsers from './actions/user.action';

//2) creation du store
const store = createStore(
  rootReducers, 
  composeWithDevTools(applyMiddleware(thunk))
)
export default store;

store.dispatch(getPots());
store.dispatch(getUsers());

ReactDOM.render(
  // 1) create du provider
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);


