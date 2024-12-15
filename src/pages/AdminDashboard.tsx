import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Room {
  id: number;
  name: string;
  seats: number;
}

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<string>('clients');
  const [rooms, setRooms] = useState<Room[]>([
    { id: 1, name: 'Sala 1', seats: 30 },
  ]);
  const [newRoomName, setNewRoomName] = useState<string>('');

  const handleLogout = () => {
    navigate('/');
  };

  const handleCreateRoom = () => {
    if (!newRoomName.trim()) {
      alert('Por favor ingrese un nombre para la sala.');
      return;
    }
    const newRoom: Room = {
      id: rooms.length + 1,
      name: newRoomName,
      seats: 30,
    };
    setRooms([...rooms, newRoom]);
    setNewRoomName(''); // Limpia el campo
  };

  const handleDeleteRoom = (id: number) => {
    setRooms(rooms.filter((room) => room.id !== id));
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'clients':
        return (
          <div>
            <h2 className="text-2xl font-bold text-white">Clientes Registrados</h2>
            {/* Aquí puedes cargar la lista de clientes desde una API */}
            <div className="mt-4">
              <input
                type="text"
                placeholder="Buscar por nombre"
                className="p-2 w-full rounded bg-gray-700 text-white"
              />
              <table className="table-auto w-full mt-4 text-white">
                <thead>
                  <tr>
                    <th className="border px-4 py-2">Nombre</th>
                    <th className="border px-4 py-2">Correo</th>
                    <th className="border px-4 py-2">Fecha de Registro</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2">John Doe</td>
                    <td className="border px-4 py-2">john@example.com</td>
                    <td className="border px-4 py-2">2024-01-01</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );
      case 'admins':
        return (
          <div>
            <h2 className="text-2xl font-bold text-white">Administradores</h2>
            <table className="table-auto w-full mt-4 text-white">
              <thead>
                <tr>
                  <th className="border px-4 py-2">Nombre</th>
                  <th className="border px-4 py-2">Correo</th>
                  <th className="border px-4 py-2">Rol</th>
                  <th className="border px-4 py-2">Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">Admin 1</td>
                  <td className="border px-4 py-2">admin1@example.com</td>
                  <td className="border px-4 py-2">Administrador</td>
                  <td className="border px-4 py-2">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded">
                      Detalles
                    </button>
                    <button className="bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded ml-2">
                      Eliminar
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      case 'rooms':
        return (
          <div>
            <h2 className="text-2xl font-bold text-white">Salas</h2>
            <div className="flex items-center mt-4">
              <input
                type="text"
                placeholder="Nombre de la sala"
                value={newRoomName}
                onChange={(e) => setNewRoomName(e.target.value)}
                className="p-2 rounded bg-gray-700 text-white mr-2"
              />
              <button
                onClick={handleCreateRoom}
                className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded"
              >
                Crear Sala
              </button>
            </div>
            <table className="table-auto w-full mt-4 text-white">
              <thead>
                <tr>
                  <th className="border px-4 py-2">Sala</th>
                  <th className="border px-4 py-2">Asientos</th>
                  <th className="border px-4 py-2">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {rooms.map((room) => (
                  <tr key={room.id}>
                    <td className="border px-4 py-2">{room.name}</td>
                    <td className="border px-4 py-2">{room.seats}</td>
                    <td className="border px-4 py-2">
                      <button
                        onClick={() => handleDeleteRoom(room.id)}
                        className="bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded"
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex">
      {/* Navegador lateral */}
      <div className="bg-gray-800 w-64 min-h-screen p-4">
        <h1 className="text-white text-2xl mb-6">Administración</h1>
        <button
          onClick={() => setActiveTab('clients')}
          className={`w-full text-left py-2 px-4 mb-2 rounded ${
            activeTab === 'clients' ? 'bg-blue-500' : 'bg-gray-700'
          } text-white`}
        >
          Ver Clientes
        </button>
        <button
          onClick={() => setActiveTab('admins')}
          className={`w-full text-left py-2 px-4 mb-2 rounded ${
            activeTab === 'admins' ? 'bg-blue-500' : 'bg-gray-700'
          } text-white`}
        >
          Ver Administradores
        </button>
        <button
          onClick={() => setActiveTab('rooms')}
          className={`w-full text-left py-2 px-4 mb-2 rounded ${
            activeTab === 'rooms' ? 'bg-blue-500' : 'bg-gray-700'
          } text-white`}
        >
          Ver Salas
        </button>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded mt-6"
        >
          Salir
        </button>
      </div>

      {/* Contenido dinámico */}
      <div className="flex-1 bg-gray-900 p-6">{renderContent()}</div>
    </div>
  );
};

export default AdminDashboard;
