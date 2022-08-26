import React from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs'

import { Route } from "wouter"

export default function App() {
  //const [keyword, setKeyword] = useState ('cats')

  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <a href='/gif/cat'>Gifs de gatos</a>
        <a href='/gif/elephant'>Gifs de elefantes</a>
        <a href='/gif/dog'>Gifs de perros</a>
        <Route
          component={ListOfGifs}
          path="/gif/:keyword" />
      </section>
    </div>
  );
}

 