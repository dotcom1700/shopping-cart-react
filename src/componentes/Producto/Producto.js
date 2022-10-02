import React from "react";
import Select from "react-select";
import { useState } from "react";
import image from "../../resources/img/coffee_bag.png";
import coffee_beans from "../../resources/img/coffee-beans.png";
import "./Producto.css";
import * as STRING_CONSTANTS from "../../constants/string-constants";

let shoppingCart = [];

const productos = [
  {
    roastLevel: [
      { value: "bajo", label: "LOW" },
      { value: "medio", label: "MEDIUM" },
      { value: "alto", label: "HIGH" },
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
  //se  usa  hook para actualizar el estado el nivel de tostado del café
  const [roast, setRoast] = useState(productos[0].roastLevel[1]);
  const [quantity, setQuantity] = useState(1);
  const [bagSize, setBagSize] = useState("0"); //actualizador de estado de bolsa

  const handleSaveProduct = (event) => {
    event.preventDefault();
    if (bagSize && bagSize > 0) {
      const cart = {
        roastLevel: roast.value,
        quantity: quantity,
        price: bagSize,
        description: productos[0].description,
      };
      shoppingCart.push(cart);
      console.log("hola ", shoppingCart);
    }
  };
  const handleBagSize = (bag) => {
    console.log(bag)
    setBagSize(bag.price);
    console.log("aaaaaaaaaaaaaaaaaa", bagSize);
  };

  // Se crea un array de objetos que compondra todas
  // las propiedades de un producto.

  return (
    <div className="container justify-content-center">
      <div className="row justify-content-center col-8 mx-auto">
        <div className="col-6 col-d-flex justify-content-center">
          <img src={image} alt="Coffee Bag" className="img_coffee " />
        </div>
        <form
          className="col-12 col-lg-6 rounded-2 py-3  bg-light
            shadow p-3 mb-5 bg-body rounded"
          onSubmit={handleSaveProduct}
        >
          <div className="row px-4">
            <span className="col-12 fs-6 px-0 fw-semibold">COFFEE</span>
            <div
              className="col-12 name-product
              fw-bold text-primary ps-0 pe-3"
            >
              SWEET ENERGY
            </div>
            <div className="col-6 border-bottom border-3 border-blue"></div>
          </div>
          <div className="row mt-3 px-4">
            <div className="col-4 fs-6 px-0 fw-semibold">ROAST</div>
            <div className="col-8">
              <div className="toast-level">
                {productos[0].roastLevel.map((level) => (
                  <input
                    className="form-check-input me-1"
                    key={level.value}
                    type="radio"
                    name="roast"
                    value={level.value}
                    onChange={() => setRoast(level)}
                    checked={roast.value === level.value}
                  />
                ))}
              </div>
              <p className="text-uppercase my-0 roast-result fw-semibold">
                {roast.label}
              </p>
            </div>
            <span className="col-4 fs-6 px-0 fw-semibold mt-2">TASTE</span>
            <span className="col-8 text-sm mt-2">
              {productos[0].description}
            </span>
            <span className="col-12 fs-6 px-0 fw-semibold mt-2">BAG SIZE</span>
            <Select
              required // Seleccion por defecto del tamaño de la bolsa.
              options={productos[0].bagSize} //Carga el primer producto de la lista creada.
              placeholder={"Please select"}
              onChange={handleBagSize}
              name="option"
              className="col-11 px-0 my-3"
            />
            <div
              className="col-11 border-top border-bottom border-secondary border-3
              px-0 row gx-0 m-0"
            >
              <div className="col-1 p-1">
                <button
                  type="button"
                  className="btn btn-sm btn-outline-primary"
                  onClick={() => setQuantity(quantity - 1)}
                  disabled={quantity <= 1}
                >
                  -
                </button>
              </div>
              <div className="col-4 d-flex justify-content-center align-items-center fs-6 fw-semibold">
                {quantity}
              </div>
              <div className="col-1 py-1">
                <button //boton para aumentar la cantidad de bolsas con restriccion de unidades existentes en available
                  type="button"
                  className="btn btn-sm btn-outline-primary"
                  onClick={() => setQuantity(quantity + 1)}
                  disabled={quantity >= productos[0].available}
                >
                  +
                </button>
              </div>
              <div
                className="col-5 px-2 d-flex align-items-center ms-2
                border-start border-secondary border-3 fw-semibold"
              >{`$${bagSize * quantity}`}</div>
            </div>
            <div className="text-sm col-12 px-0 my-2">
              {STRING_CONSTANTS.CITIES_SHIPPING}
            </div>
            <div className="col-12 px-0">
              <button className="custom-btn" type="submit">
                AÑADIR AL CARRITO
              </button>
            </div>
          </div>
        </form>
        <div className="col-10 px-0 row gx-0 mx-0 mt-3">
          <div className="text-primary fs-1 fw-semibold lh-1 col-10">
            Una mezcla de cafe con notas dulces de frutos del bosque.
          </div>
          <div className="col-2">
            <img src={coffee_beans} alt="Coffee Beans" className="img_beans" />
          </div>
          <div className="col-10 text-primary text-sm mb-5">
            A través de un proceso único de tostado y mezcla, hemos marcado los
            sabores de lo que más amamos. Desarrollando un café a base de granos
            seleccionados y con sabor natural que ofrece un sabor dulce y rico
            para compartir con tu momento preferido.
          </div>
        </div>
      </div>
    </div>
  );
}

export { Producto };
