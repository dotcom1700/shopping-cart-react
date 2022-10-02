import './App.css';
import React from 'react';
import {Header} from '../componentes/Header/Header'
import {Producto} from '../componentes/Producto/Producto'
import {Footer} from '../componentes/Footer/Footer'

function App() {
  return (
    <React.Fragment>
      <Header />
      <Producto/>
      {/* <AddToCart> */}

      {/* </AddToCart> */}
      <Footer/>
    </React.Fragment>
  );
}

export {App};
