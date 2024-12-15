import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Ticket {
  code: string;
  movie: string;
  date: string;
  time: string;
  seats: number[];
  customer: string;
}

const EmployeeDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [ticketCode, setTicketCode] = useState<string>('');
  const [ticketInfo, setTicketInfo] = useState<Ticket | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Simulación de base de datos de tickets
  const tickets: Ticket[] = [
    {
      code: '123ABC',
      movie: 'Inception',
      date: '2024-12-15',
      time: '18:00',
      seats: [5, 6, 7],
      customer: 'John Doe',
    },
    {
      code: '456DEF',
      movie: 'The Matrix',
      date: '2024-12-16',
      time: '20:00',
      seats: [10, 11],
      customer: 'Jane Smith',
    },
  ];

  const handleSearch = () => {
    const ticket = tickets.find((t) => t.code === ticketCode.trim().toUpperCase());
    if (ticket) {
      setTicketInfo(ticket);
      setError(null);
    } else {
      setTicketInfo(null);
      setError('No se encontró información para el código ingresado.');
    }
  };

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="flex">
      {/* Navegador lateral */}
      <div className="bg-gray-800 w-64 min-h-screen p-4">
        <h1 className="text-white text-2xl mb-6">Empleado</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded mt-6"
        >
          Salir
        </button>
      </div>

      {/* Contenido principal */}
      <div className="flex-1 bg-gray-900 p-6">
        <h2 className="text-2xl font-bold text-white mb-4">Validación de Tickets</h2>
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
          <label htmlFor="ticketCode" className="text-white mb-2 block">
            Código del Ticket:
          </label>
          <input
            type="text"
            id="ticketCode"
            value={ticketCode}
            onChange={(e) => setTicketCode(e.target.value)}
            placeholder="Ingrese el código del ticket"
            className="p-2 rounded bg-gray-700 text-white w-full mb-4"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded w-full"
          >
            Buscar
          </button>
        </div>

        {/* Resultado */}
        {ticketInfo && (
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg mt-6">
            <h3 className="text-xl font-bold text-white mb-4">Información del Ticket</h3>
            <p className="text-gray-300">
              <strong>Cliente:</strong> {ticketInfo.customer}
            </p>
            <p className="text-gray-300">
              <strong>Película:</strong> {ticketInfo.movie}
            </p>
            <p className="text-gray-300">
              <strong>Fecha:</strong> {ticketInfo.date}
            </p>
            <p className="text-gray-300">
              <strong>Hora:</strong> {ticketInfo.time}
            </p>
            <p className="text-gray-300">
              <strong>Asientos:</strong> {ticketInfo.seats.join(', ')}
            </p>
          </div>
        )}

        {/* Mensaje de error */}
        {error && (
          <div className="bg-red-500 text-white p-4 rounded-lg mt-6">
            <p>{error}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmployeeDashboard;
