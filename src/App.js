import React from 'react';
import './App.css';
import SearchResults from './pages/SearchResults'
import Home from './pages/Home'
import Detail from './pages/Detail'
import logo from './assets/logo.png'
import StaticContext from './context/StaticContext'
import {GifsContextProvider} from './context/GifsContext'
import {Link, Route } from "wouter"
import { isCompositeComponentWithType } from 'react-dom/test-utils';
import { Suspense } from 'react';

const HomePage = React.lazy(()=>import('./pages/Home'))

export default function App() {
  return (
    <StaticContext.Provider value={
      {
        name: 'Priscy', 
        EstoyAprendiendoReact: true
        }}>  {/*todas las rutas que están por debajo pueden usar este proovedor,  Context es un objeto en donde se le pueden guardar cosas*/}

    <div className="App">
      <Suspense fallback={null}>
      <section className="App-content">
        <h1>Horsea, tu buscador de gifs</h1>
          <Link to='/'>
            <img className= "App-logo" alt ='Giffy logo' src= {logo} />
          </Link>
        <GifsContextProvider>
        <Route
          component={HomePage}
          path="/" /> 
        <Route
          component={SearchResults}
          path="/search/:keyword" />
        <Route
          component={Detail}
          path="/gif/:id" />
        </GifsContextProvider>
      </section>
      </Suspense>
    </div>
    </StaticContext.Provider>
  );
}
 