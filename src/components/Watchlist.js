import React from "react";

import { MovieCard } from "./MovieCard";

export const Watchlist = ({user, watchlist, watchlistCount, setWatchlistCount}) => {
  

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">My Watchlist</h1>

          <span className="count-pill">
            {watchlist.length} {watchlist.length === 1 ? "Movie" : "Movies"}
          </span>
        </div>

        {watchlist.length > 0 ? (
          <div className="movie-grid">
            {watchlist.map((movie) => (
              <MovieCard user={user} movie={movie} key={movie.id} watchlistCount={watchlistCount} setWatchlistCount={setWatchlistCount} type="watchlist" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">You haven't added any movies yet!</h2>
        )}
      </div>
    </div>
  );
};