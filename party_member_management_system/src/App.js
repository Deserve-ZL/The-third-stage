import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomeDemo from './views/Home/HomeDemo'
import LoginDemo from './views/Login/LoginDemo'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
        <Route path="/" exact component={LoginDemo}></Route>
          <Route path="/home" exact component={HomeDemo}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;


