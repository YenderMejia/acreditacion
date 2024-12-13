import React from 'react';
import Navbar from '../components/Navbar';

const Login: React.FC = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center">
      <Navbar />
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg mt-10">
        <h2 className="text-2xl text-white mb-4">Iniciar Sesión</h2>
        <form className="flex flex-col">
          <label className="text-gray-300 mb-2">Usuario</label>
          <input 
            type="text" 
            className="p-2 mb-4 rounded bg-gray-700 text-white" 
            placeholder="Ingrese su usuario"
          />
          <label className="text-gray-300 mb-2">Contraseña</label>
          <input 
            type="password" 
            className="p-2 mb-4 rounded bg-gray-700 text-white" 
            placeholder="Ingrese su contraseña"
          />
          <button 
            type="submit" 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
