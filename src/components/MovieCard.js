import React from "react";
import { MovieControls } from "./MovieControls";

export const MovieCard = ({user, movie, type ,watchlistCount,setWatchlistCount,watchedCount, setWatchedCount}) => {
  
  return (
    <div className="movie-card">
      <div className="overlay"></div>

      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={`${movie.title} Poster`}
      />

      <MovieControls user={user} type={type} movie={movie} watchlistCount={watchlistCount} setWatchlistCount={setWatchlistCount} watchedCount={watchedCount} setWatchedCount={setWatchedCount} />
    </div>
  );
};