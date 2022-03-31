import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Switch } from 'react-router-dom';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

import "./style/main.scss";

import Header from "./components/Header";
import Shop from './components/shop/shop';
import About from "./components/About";
import Contact from "./components/Contact";

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <Header>
          <Switch>
            <Route path='/' exact component={Shop}/>
            <Route path='/signin' exact component={Shop}/>
           <Route path='/about' exact component={About}/>
           <Route path='/contact' exact component={Contact}/>
          </Switch>
        </Header>
      </BrowserRouter>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
} 

document.addEventListener("DOMContentLoaded", main);