import React from "react";
import Select from "react-select";
import { useState } from "react";
import "./Producto.css";
import styled from '@emotion/styled';


const productos = [
  {
    roastLevel: [
      { value: "bajo", label: "bajo" },
      { value: "medio", label: "medio" },
      { value: "alto", label: "alto" },
    ],
    description:
      "Caramelly & Rich Blend. Sweet like Butterscotch, Flavours like Red Fruit & Apricot",
    bagSize: [
      { value: 200, label: "Pequeño 200g", price: 13000 },
      { value: 500, label: "Mediano 500g", price: 17000 },
      { value: 700, label: "Grande 700g", price: 19000 },
    ],
    available: 7,
  },
];

function Producto() {
  //se usa usa  hook para actualizar el estado el nivel de tostado del café
  const [roast, setRoast] = useState(productos[0].roastLevel[1]);
  const [quantity, setQuantity] = useState(1);
  //se usa funcion para manejar la propieda onChange del tamaño de la bolsa

  const handleSaveProduct = (event) => {
    event.preventDefault();
    console.log(event);
  };
  const handleBagSize = (bag) => {
    const size = bag.price;
    console.log(`este es el valor ${size}`);
    console.log(typeof(size));
    console.log("tipe of ", bag);
  };
  const showData = () => {
    console.log("Name", roast.label);
  };
  // Se crea un array de objetos que compondra todas
  // las propiedades de un producto.

  return (
    <form className="form" onSubmit={handleSaveProduct}>
      <h3>COFFEE</h3>
      <h1>SWEET ENERGY</h1>
      <h5>ROAST</h5>
      <div>
        {productos[0].roastLevel.map((level) => (
          <input
            key={level.value}
            type="radio"
            name="roast"
            value={level.value}
            onChange={() => setRoast(level)}
            checked={roast.value === level.value} // se automarca la opcion
            // si
          />
        ))}
      </div>
      <p>{roast.label}</p>
      <h5>TASTE</h5>
      <p>{productos[0].description}</p>
      <Select
        required // Seleccion por defecto del tamaño de la bolsa.
        options={productos[0].bagSize} //Carga el primer producto de la lista creada.
        placeholder={"Tamaño de la bolsa"}
        onChange={handleBagSize}
      />
      <button //boton para reducir la cantidad de bolsas
        type="button"
        onClick={() => setQuantity(quantity - 1)}
        disabled={quantity <= 1}
      >
        -
      </button>
      {quantity}
      <button //boton para aumentar la cantidad de bolsas con restriccion de unidades existentes en available
        type="button"
        onClick={() => setQuantity(quantity + 1)}
        disabled={quantity >= productos[0].available}
      >
        +
      </button>
      <span>{`$${quantity*handleBagSize.price}`}</span>
      <button type="submit" onClick={showData}>
        Añadir al carrito
      </button>
    </form>
  );
}

export { Producto };
