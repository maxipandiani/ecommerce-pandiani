import { useEffect, useState } from "react"
import { getFetch } from "../../Stock/Stock"
import ItemDetail from "./ItemDetail"
 




function ItemDetailContainer() {
    
    const [mercaderia, setmercaderia] = useState({})
    const [loading, setloading] = useState(true)
    useEffect (() => {
        getFetch
        .then(resp => setmercaderia (resp.find(prod => prod.id === '1')))
        .finally (()=> setloading(false))
      }, [])

    


    return (
        <div>
            {loading ? "" : <ItemDetail mercaderia={mercaderia} />}
        </div>
    )
    
}

export default ItemDetailContainer
