import React from "react";
import "./Header.css";
import MaterialIcon from "material-icons-react";
import Badge from "@mui/material/Badge";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useState } from "react";

function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="header">
      <div className="cart-wrapper" onClick={handleShow}>
        <div>Carrito</div>
        <Badge badgeContent={4} color="primary">
          <div className="icon-wrapper">
            <MaterialIcon icon="shopping_basket" size={16} color="#502C1D" />
          </div>
        </Badge>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <div className="row d-flex w-100 justify-content-start align-items-center ">
            <div className="col-1 align-items-center d-flex">
              <MaterialIcon icon="shopping_basket" sx={{width:'20px', heigth:'auto'}} color="#502C1D" />
            </div>
            <span className="col-11 fw-semibold text-primary">
              Tu carrito de compra
            </span>
          </div>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cerrar</Button>
          <Button variant="primary">Confirmar Compra</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export { Header };
