import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Movie } from '../types/movie';

const PurchaseTicket: React.FC = () => {
  const { movieId } = useParams<{ movieId: string }>();

  // Datos simulados de la película para ilustración
  const movieDetails: Movie = {
    id: Number(movieId),
    title: 'Película Seleccionada',
    image: 'https://via.placeholder.com/300x400',
    synopsis: 'Descripción completa de la película seleccionada.',
    genre: 'Acción',
    duration: '120 min',
    dia: 'Miércoles',
    functions: ["14:00", "17:00", "20:00"],
  };

  const [selectedTime, setSelectedTime] = useState<string>('');
  const [numTickets, setNumTickets] = useState<number>(1);
  const [selectedSeats, setSelectedSeats] = useState<number[]>([]);

  const handleSeatSelect = (seat: number) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else if (selectedSeats.length < numTickets) {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const handleConfirmPurchase = () => {
    if (!selectedTime) {
      alert('Por favor selecciona un horario.');
      return;
    }

    alert(
      `Compra confirmada para ${numTickets} entrada(s) en la función de las ${selectedTime}.`
    );
    // Aquí puedes manejar la lógica para confirmar la compra
  };

  return (
    <div className="bg-gray-900 min-h-screen p-8">
      <div className="max-w-3xl mx-auto bg-gray-800 rounded-lg shadow-lg p-6">
        <div className="flex flex-col md:flex-row md:space-x-6">
          <img
            src={movieDetails.image}
            alt={movieDetails.title}
            className="w-full md:w-1/3 rounded-lg object-cover"
          />
          <div className="mt-4 md:mt-0 md:w-2/3">
            <h1 className="text-white text-3xl font-bold">{movieDetails.title}</h1>
            <p className="text-gray-300 mt-2">{movieDetails.synopsis}</p>
            <p className="text-gray-400 mt-2">
              <strong>Género:</strong> {movieDetails.genre}
            </p>
            <p className="text-gray-400">
              <strong>Duración:</strong> {movieDetails.duration}
            </p>
            <p className="text-gray-400">
              <strong>Día:</strong> {movieDetails.dia}
            </p>
          </div>
        </div>

        {/* Selección de horario */}
        <div className="mt-6">
          <p className="text-white mb-2">Selecciona un horario:</p>
          <div className="flex space-x-4">
            {movieDetails.functions.map((time, index) => (
              <button
                key={index}
                onClick={() => setSelectedTime(time)}
                className={`py-2 px-4 rounded ${
                  selectedTime === time
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {time}
              </button>
            ))}
          </div>
          {selectedTime && (
            <p className="text-green-400 mt-2">
              Horario seleccionado: {selectedTime}
            </p>
          )}
        </div>

        {/* Selección de entradas */}
        <div className="mt-6">
          <label className="text-white mb-2 block">Número de entradas:</label>
          <input
            type="number"
            min="1"
            max="10"
            value={numTickets}
            onChange={(e) => setNumTickets(Number(e.target.value))}
            className="p-2 rounded bg-gray-700 text-white w-20 text-center"
          />
        </div>

        {/* Selección de asientos */}
        <div className="mt-6">
          <p className="text-white mb-2">Selecciona tus asientos:</p>
          <div className="bg-gray-700 p-4 rounded-lg">
            <p className="text-center text-white mb-2">Pantalla</p>
            <div className="flex flex-wrap justify-center gap-2">
              {Array.from({ length: 30 }, (_, i) => (
                <button
                  key={i}
                  onClick={() => handleSeatSelect(i)}
                  className={`w-8 h-8 rounded-full ${
                    selectedSeats.includes(i)
                      ? 'bg-green-500'
                      : 'bg-gray-500 hover:bg-gray-700'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>
          <p className="text-white mt-2">
            Asientos seleccionados:{' '}
            {selectedSeats.length ? selectedSeats.join(', ') : 'Ninguno'}
          </p>
        </div>

        {/* Confirmar Compra */}
        <div className="mt-6">
          <button
            onClick={handleConfirmPurchase}
            className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded"
          >
            Confirmar Compra
          </button>
        </div>
      </div>
    </div>
  );
};

export default PurchaseTicket;
