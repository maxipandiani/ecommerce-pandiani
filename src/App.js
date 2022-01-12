
import './App.css';
import Navbar from './components/Navbar/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarBs from './components/Navbar/NavbarBs';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetail/ItemDetailContainer';


  function App() {
  
    const greetings='Bienvenido a mi tienda!'
    
    return (

    <div>
      <NavbarBs /> 
      <ItemListContainer greetings={greetings} /> 
      <ItemDetailContainer/>


    </div> 
   
  )
}

export default App;
