import React from 'react'

const Paciente = () => {
    return (
        
      <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
          <span className="font-normal normal-case">Hook</span>
        </p>
         <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
          <span className="font-normal normal-case">Heinz</span>
        </p>
         <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
          <span className="font-normal normal-case">Email@email.es</span>
        </p>
         <p className="font-bold mb-3 text-gray-700 uppercase"> fecha Alta: {''}
          <span className="font-normal normal-case">25/Diciembre/2020</span>
        </p>
         <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {''}
          <span className="font-normal normal-case">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi modi sit ipsam corrupti ut accusantium soluta? Nostrum fugit adipisci omnis autem suscipit eius et? Quo ut soluta aut. Dicta, quisquam.</span>
        </p>
      </div>
    )
}

export default Paciente
