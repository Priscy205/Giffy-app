import React, {useState} from 'react';
import './App.css';
import getGifs from './services/getGifs';
import ListOfGifs from './components/ListOfGifs'

export default function App() {
  const [keyword, setKeyword] = useState ('cats')

  return (
    <div className="App">
      <section className="App-content">
        <button onClick={() => setKeyword ('mapache')}>Cambiar keyword</button>
        <ListOfGifs keyword= {keyword}/>
      </section>
    </div>
  );
}

 