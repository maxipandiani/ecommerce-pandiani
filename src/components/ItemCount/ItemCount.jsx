import React, { useState } from "react";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button'


function ItemCount({min, maximo}) {
  const [counter, setCounter] = useState(0)
  
  const incremento = () => { 
    counter < maximo ? setCounter(prev => prev + 1) : alert("Stock máximo alcanzado")
    

   }
   const decremento = () => { 

    counter > min ? setCounter(prev => prev -1) : alert("El stock no puede ser menor a cero")
    
   }


    return (
    <div>
      <ButtonGroup aria-label="Basic example">
        <Button variant="secondary" onClick={decremento} >-</Button>
        <Button variant="secondary">{counter}</Button>
        <Button variant="secondary" onClick={ incremento }>+</Button>
      </ButtonGroup>
    </div>
  );
}

export default ItemCount;
