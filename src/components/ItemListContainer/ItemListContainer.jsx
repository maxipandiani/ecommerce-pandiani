import { useEffect, useState } from 'react';
import Itemlist from '../Itemlist/Itemlist.jsx';
import {getFetch} from '../Stock/Stock.jsx';
import './ItemListContainer.css';


function ItemListContainer ({greetings}) {
    
    const [merc, setmerc] = useState([])
    const [loading, setloading] = useState(true)

    
    useEffect(() => {
        getFetch
        .then(resp => setmerc(resp))
        .catch(err => console.log(err))
        .finally(()=> setloading(false))
    }, [])


    return (

        <div>
             <a className='saludo' >{greetings}</a>

            {loading ? <h1>cargando...</h1> : <Itemlist mercaderia  = {merc}/>}

            
        </div>

    )
}





export default ItemListContainer
