import Item from "../Item/Item"

function Itemlist({ mercaderia }) {



  return (

    

    <div>

      {mercaderia.map(merc => <Item title={merc.title} price={merc.price} picture={merc.pictureUrl}  /> )}
      
      
    </div>


   )
}

export default Itemlist
