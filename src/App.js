import React, {useEffect, useState} from 'react';
//import logo from './logo.svg';
import './App.css';
import getGifs from './services/getGifs';

function App() {
  const [gifs, setGifs] = useState([])

  useEffect(function (){
    getGifs({keyword: 'dog'}).then(gifs => setGifs(gifs))
  }, [])
  
  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map(singleGif => {
            return <div>
              <h4>{singleGif.title}</h4>
              <small>{singleGif.id} </small>
              <img alt ={singleGif.title} src={singleGif.url} />
            </div>
          })
          
        }
        {/* <button onClick = {() => setGifs(DIFFERENT_GIFS)}>Cambiar gifs </button> Al hacer click se cambia el estado*/}
      </section>
    </div>
  );
}

export default App;
 