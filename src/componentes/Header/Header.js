import React from "react";
import "./Header.css";
import MaterialIcon from "material-icons-react";
import Badge from "@mui/material/Badge";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { cartGlobalContext } from "../../App/context/CartGlobalContext";
import { useReducer} from "react";

// function que abre un modal donde se puede visualizar el contenido
//del carrito y se pueden eliminar tambien los productos

function Header() {
  const [refresh, forceUpdate] = useReducer(x => x + 1, 0);
  const { cartValue, /* setCartValue */ } = React.useContext(cartGlobalContext);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const deleteFromCart = (event) => {
    const index = cartValue.findIndex((producto) => {
      return producto.id === event;
    });
    cartValue.splice(index, 1);
    forceUpdate(); //re-renderiza el componente despues de eliminar un item del array.
  };

  return (
    <div className="header">
      <div className="cart-wrapper" onClick={handleShow}>
        <div>Carrito</div>
        <Badge badgeContent={cartValue.length} color="primary" showZero>
          <div className="icon-wrapper">
            <MaterialIcon
              icon="shopping_basket"
              sx={{ width: "20px", height: "auto" }}
              color="#502C1D"
            />
          </div>
        </Badge>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <div className="row d-flex w-100 justify-content-start align-items-center ">
            <div className="col-1 align-items-center d-flex">
              <MaterialIcon
                icon="shopping_basket"
                sx={{ width: "20px", height: "auto" }}
                color="#502C1D"
              />
            </div>
            <span className="col-11 fw-semibold text-primary">
              Tu carrito de compra
            </span>
          </div>
        </Modal.Header>

        <Modal.Body>
          <React.Fragment> 
          {cartValue.map((inCart, index) => ( //se aplica un metodo map para regresar las propiedades de los objetos en un array
            <div className="row" key={index}>
              <div className="col-1 pe-2 d-flex align-items-center justify-content-center">
                <img
                  className="icon-sm"
                  src={require("../../" + inCart.img)}
                  key={inCart.img}
                  alt="Producto"
                />
              </div>
              <span className="col-6 d-flex align-items-center justify-content-center text-sm border-end border-blue">{`Size: ${inCart.bagSize}x ${inCart.quantity}`}</span>
              <span
                key={inCart.price}
                className="border-end text-sm border-blue px-1 col-3 d-flex justify-content-center align-items-center"
              >{`Toast: ${inCart.roastLevel}`}</span>
              <div
                onClick={() => deleteFromCart(inCart.id)}
                className="col-2 d-flex align-items-center justify-content-center"
              >
                <MaterialIcon
                  icon="delete"
                  sx={{ width: "20px", height: "auto" }}
                  color="danger"
                />
              </div>
            </div>
          ))}
        </React.Fragment>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Confirm Purchase</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export { Header };
