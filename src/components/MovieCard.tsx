import React from 'react';
import { Movie } from '../types/movie';
import { useNavigate } from 'react-router-dom';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const navigate = useNavigate();

  const handleFunctionClick = (funcTime: string) => {
    navigate(`/movie/${movie.id}/function/${funcTime}`);
  };

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
      <img src={movie.image} alt={movie.title} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h2 className="text-2xl font-bold text-white">{movie.title}</h2>
        <p className="text-gray-300 mt-2">{movie.synopsis}</p>
        <p className="text-gray-400 mt-2"><strong>Género:</strong> {movie.genre}</p>
        <p className="text-gray-400"><strong>Duración:</strong> {movie.duration}</p>
        <div className="mt-4 flex space-x-2">
          {movie.functions.map((funcTime, index) => (
            <button 
              key={index}
              onClick={() => handleFunctionClick(funcTime)}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-3 rounded transition duration-300"
            >
              {funcTime}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
