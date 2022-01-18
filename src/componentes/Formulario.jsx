import {useState, useEffect } from 'react';
import Error from './Error';


const Formulario = ({setPacientes, pacientes}) => {

  const [value, setNombre] = useState({ nombre: '', propietario: '', email: '', date: '', sintomas: '' });
  

  const [error, setError] = useState(false);

  const handleForm = (event) => {
    setNombre(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value
    }));
  }

  const handleSubmit = (e) => {
    //Validación del formulario
    e.preventDefault();
    const { nombre, email, propietario, date, sintomas } = value;
    if ([nombre, email, propietario, date, sintomas].includes('')) {
      console.log("Hay al menos un campo vacio")
      setError(true);
    } else {
      setError(false);    
      console.log(value)
      //Obejeto de paciente
      setPacientes([...pacientes, value]);

      //Reiniciar 
      setNombre({ nombre: '', propietario: '', email: '', date: '', sintomas: '' })
    }
  }


  return <div className="md:w-1/2 lg:w-2/5 mx-5">
    <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2> 
    <p className="text-lg mt-5 text-center mb-10">
      Añade Pacientes y {''}
      <span className="text-indigo-600 font-bold">Adminstralos</span>
    </p>
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
      <div className="mb-5">
        {error && <Error mensaje="Todos los campos son obligatorios"/>}
        <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
          Nombre Mascota</label>
        <input
          name="nombre"
          onChange={handleForm}
          id="mascota"
          type="text"
          placeholder="Nombre de la mascota"
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          value={value.nombre}
        />
      </div>
       <div className="mb-5">
        <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
          Propietario</label>
        <input
          name="propietario"
          id="propietario"
          type="text"
          placeholder="Nombre del propietario"
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          autoFocus={true}
          onChange={handleForm}
          value={value.propietario}
        />
      </div>
      <div className="mb-5">
        <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
          Email</label>
        <input
          name="email"
          id="email"
          type="email"
          placeholder="Email contacto propietario"
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          onChange={handleForm}
          value={value.email}
          />
      </div>
        <div className="mb-5">
        <label htmlFor="date" className="block text-gray-700 uppercase font-bold">
          Alta</label>
        <input
          name="date"
          id="date"
          type="date"
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          onChange={handleForm}
          value={value.date}
        />
      </div>
      <div className="mb-5">
        <label htmlFor="date" className="block text-gray-700 uppercase font-bold">
          Sintomas</label>
        <textarea
          id="date"
          name="sintomas"
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          placeholder="Describe tus sintomas"
           onChange={handleForm}
          value={value.sintomas}
        />
      </div>

      <input
        type="submit"
        className="hover:bg-indigo-700 transition-all cursor-pointer bg-indigo-600 w-full p-3 text-white uppercase font-bold"
        placeholder="agregar Paciente"  
      />
    </form>
  </div>;
};

export default Formulario;
