import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCount from "../../ItemCount/ItemCount";

function ItemDetail({mercaderia}) {
    return (
        <div>


<Card style={{ width: "12rem" }}>
        <Card.Img variant="top" src={mercaderia.picture} />
        <Card.Body>
          <Card.Title> {mercaderia.title} </Card.Title>
          <Card.Text>
            {mercaderia.price}
          </Card.Text>
          <div className="contador">
          <ItemCount min={ 1 } maximo={5}  />
          <Button variant="primary">Agregar al Carrito</Button>
          </div>
        </Card.Body>
        
      </Card>






        </div>
    )
}

export default ItemDetail
