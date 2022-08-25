import React, {useEffect, useState} from 'react';
//import logo from './logo.svg';
import './App.css';

const GIFS = [
  'https://media0.giphy.com/media/OmK8lulOMQ9XO/200w.webp?cid=ecf05e476g7mw9k71r4ysb0ffn3hn53aqzx3mzccj2lqozfr&rid=200w.webp&ct=g',
  'https://media2.giphy.com/media/XNdoIMwndQfqE/200w.webp?cid=ecf05e47205iwn5kylg5dd4gz26t4utltgb8xt5mkgsdzx2x&rid=200w.webp&ct=g'
]

const DIFFERENT_GIFS = [
  'https://media0.giphy.com/media/oz0iZ8vYdgeTVMtFAe/giphy.webp?cid=ecf05e47qawvbwpixaa5g2ie6e0yroslu8w2wmdemcqrb9bj&rid=giphy.webp&ct=g'
]

function App() {
  const [gifs, setGifs] = useState(GIFS)

  useEffect(function (){
    setGifs(DIFFERENT_GIFS)
  }, [])
  
  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map(singleGif => <img src={singleGif} />)
        }
        {/* <button onClick = {() => setGifs(DIFFERENT_GIFS)}>Cambiar gifs </button> Al hacer click se cambia el estado*/}
      </section>
    </div>
  );
}

export default App;
 