import React from 'react';
import './App.css';
import getGifs from './services/getGifs';
import ListOfGifs from './components/ListOfGifs'

export default function App() {
  return (
    <div className="App">
      <section className="App-content">
        <ListOfGifs keyword='mexico'/>
      </section>
    </div>
  );
}

 