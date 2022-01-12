import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCount from "../ItemCount/ItemCount";
import './Item.css';

function Item({title, price, picture}) {
  return (
    <div className="card">
      
      <Card style={{ width: "12rem" }}>
        <Card.Img variant="top" src={picture} />
        <Card.Body>
          <Card.Title> {title} </Card.Title>
          <Card.Text>
            {price}
          </Card.Text>
          <div className="contador">
          <ItemCount min={ 1 } maximo={5}  />
          <Button variant="primary">Agregar al Carrito</Button>
          </div>
        </Card.Body>
        
      </Card>
    </div>
  );
}

export default Item;
