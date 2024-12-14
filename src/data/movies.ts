import { Movie } from "../types/movie";

export const movies: Movie[] = [
  {
    id: 1,
    title: "Inception",
    synopsis: "A thief who steals corporate secrets through the use of dream-sharing technology...",
    genre: "Sci-Fi, Action",
    duration: "2h 28m",
    image: "/images/disne.jpg", // Asegúrate de tener estas imágenes en public/images/
    dia: "Lunes 16",
    functions: ["14:00", "17:00", "20:00"],
  },
  {
    id: 2,
    title: "The Matrix",
    synopsis: "A computer hacker learns from mysterious rebels about the true nature of his reality...",
    genre: "Sci-Fi, Action",
    duration: "2h 16m",
    image: "/images/incen.jpg",
    dia: "Martes 17",
    functions: ["13:00", "16:00", "19:00"],
  },
  // Añade más películas según necesites
];
