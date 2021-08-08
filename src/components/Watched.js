import React from "react";
import { MovieCard } from "./MovieCard";

export const Watched = ({user, watched, watchedCount, setWatchedCount}) => {
  

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">Watched Movies</h1>

          <span className="count-pill">
            {watched.length} {watched.length === 1 ? "Movie" : "Movies"}
          </span>
        </div>

        {watched.length > 0 ? (
          <div className="movie-grid">
            {watched.map((movie) => (
              <MovieCard user={user} movie={movie} key={movie.id} watchedCount={watchedCount} setWatchedCount={setWatchedCount} type="watched" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">You haven't watched anything yet!</h2>
        )}
      </div>
    </div>
  );
};