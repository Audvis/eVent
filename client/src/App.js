import './App.css';
import Prueba from './components/Prueba/Prueba'
import {BrowserRouter, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import FormUsers from './components/FormUsers/formUsers';
import EventDetailsUsario from './components/Details/EventDetailsUsario/EventDetailsUsario';


function App() {
  return (
    <BrowserRouter>

      <Route path='/formUser' component={FormUsers} />

      <Route path='/' component={NavBar}/>{/* Leo: Barra de Navegacion  */}
      <Route exact path= '/'  component={Home}/>{/*Leo: Componente Home*/}

      <Route path='/formUser' component={FormUsers} />
      <Route path='/eventDetailsUsuario' component={EventDetailsUsario} /> {/*Diego: Componente de Detalle de Evento para Usuario*/}

      <Route path='/' component={Footer}/>{/* Leo: Footer (Va en todas las rutas) */}

    </BrowserRouter>
  );
}

export default App;
