import React, { useState } from 'react';
import { Route } from 'react-router';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import './App.css';

const App = () => {
  return (
    <>
      <Header />
      <Route path="/" exact component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/signUp" component={Signup} />
    </>
  );
}

export default App;
