import React from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs'

import {Link, Route } from "wouter"

export default function App() {
  //const [keyword, setKeyword] = useState ('cats')

  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Link to='/gif/cat'>Gifs de gatos</Link>
        <Link to='/gif/elephant'>Gifs de elefantes</Link>
        <Link to='/gif/dog'>Gifs de perros</Link>
        <Route
          component={ListOfGifs}
          path="/gif/:keyword" />
      </section>
    </div>
  );
}

 