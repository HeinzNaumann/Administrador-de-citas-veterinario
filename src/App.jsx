
import {useState} from 'react'

import Formulario from "./componentes/Formulario";
import Header from "./componentes/Header";
import ListadoPacientes from "./componentes/ListadoPacientes";
function App() {

  const [pacientes, setPacientes] = useState([]);


  
  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario />
        <ListadoPacientes />
      </div>
    </div>
  );
}

export default App;
