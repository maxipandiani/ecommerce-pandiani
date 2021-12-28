
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarBs from './components/Navbar/NavbarBs';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

  function App() {
  
    const greetings='Bienvenido a mi tienda!'
    
    return (

    <div>
      <NavbarBs /> 
      <ItemListContainer greetings={greetings} /> 
      <ItemCount min={ 0 } maximo={5}  />


    </div> 
   
  )
}

export default App;
