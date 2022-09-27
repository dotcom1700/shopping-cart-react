import './App.css';
import React from 'react';
import {Header} from '../componentes/Header'
import {Producto} from '../componentes/Producto'

function App() {
  return (
    <React.Fragment>
      <Header />
      <Producto/>
      {/* <AddToCart> */}
        
      {/* </AddToCart> */}
    </React.Fragment>
  );
}

export {App};
