import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import createStore from './redux/createStore'
import { Provider } from 'react-redux';

function App() {
  const store = createStore()

  return (
    <Provider store={store}>
      <div className="App">
        <Header/>
        <BrowserRouter>
          <NavLink to='/'></NavLink>
          <Switch>
            <Route path='/' component={HomePage}/>
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
