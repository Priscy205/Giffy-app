import React from 'react';
import './App.css';
import SearchResults from './pages/SearchResults'
import Home from './pages/Home'
import Detail from './pages/Detail'
import logo from './assets/logo.png'

import {Link, Route } from "wouter"

export default function App() {

  return (
    <div className="App">
      <section className="App-content">
        <h1>Horsea, tu buscador de gifs</h1>
          <Link to='/'>
            <img className= "App-logo" alt ='Giffy logo' src= {logo} />
          </Link>

        <Route
          component={Home}
          path="/" /> 
        <Route
          component={SearchResults}
          path="/search/:keyword" />
        <Route
          component={Detail}
          path="/gif/:id" />
      </section>
    </div>
  );
}
 