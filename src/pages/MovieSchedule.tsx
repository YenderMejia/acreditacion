import React from 'react';
import { useNavigate } from 'react-router-dom';

const MovieSchedule: React.FC = () => {
  const navigate = useNavigate();

  const movies = [
    {
      id: 1,
      title: 'Película 1',
      image: 'https://via.placeholder.com/150',
      description: 'Descripción breve de la película.',
      availableDays: ['Lunes', 'Martes', 'Miércoles'],
    },
    {
      id: 2,
      title: 'Película 2',
      image: 'https://via.placeholder.com/150',
      description: 'Otra descripción breve.',
      availableDays: ['Jueves', 'Viernes', 'Sábado'],
    },
  ];

  const handleDayClick = (movieId: number, day: string) => {
    navigate(`/purchase/${movieId}/${day}`);
  };

  return (
    <div className="bg-gray-900 min-h-screen p-8">
      <h1 className="text-white text-3xl mb-6">Cartelera</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {movies.map((movie) => (
          <div key={movie.id} className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <img src={movie.image} alt={movie.title} className="rounded mb-4" />
            <h2 className="text-white text-2xl mb-2">{movie.title}</h2>
            <p className="text-gray-400 mb-4">{movie.description}</p>
            <div className="flex gap-2">
              {movie.availableDays.map((day) => (
                <button
                  key={day}
                  onClick={() => handleDayClick(movie.id, day)}
                  className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
                >
                  {day}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieSchedule;
