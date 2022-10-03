import './App.css';
import React from 'react';
import {Header} from '../componentes/Header/Header'
import {Producto} from '../componentes/Producto/Producto'
import {Footer} from '../componentes/Footer/Footer'
import {cartGlobalContext} from './context/CartGlobalContext'

function App() {
  const [cartValue, setCartValue] = React.useState([]);
  return (
    <cartGlobalContext.Provider value={{cartValue, setCartValue}}>
      <Header />
      <Producto/>
      {/* <AddToCart> */}

      {/* </AddToCart> */}
      <Footer/>
    </cartGlobalContext.Provider>
  );
}

export {App};
