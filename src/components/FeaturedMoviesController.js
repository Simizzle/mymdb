import React from "react";

import { addMovieToUserWatched,  movieMoveFromWatchedToWatchlist,  removeMovieUserWatched, removeMovieUserWatchlist } from "../utils";

export const FeaturedMovieControls = ({ user, type, movie ,watchlistCount, setWatchlistCount, watchedCount, setWatchedCount }) => {

  return (
    <div className="inner-card-controls">
      {type === "watchlist" && (
        <>
          <button className="ctrl-btn" onClick={() =>{
            console.log(movie);
            addMovieToUserWatched(user, movie, watchedCount, setWatchedCount)}}>
            <i className="fa-fw far fa-eye"></i>
          </button>

          <button
            className="ctrl-btn"
            onClick={() => removeMovieUserWatchlist(user, movie, watchlistCount, setWatchlistCount)}
          >
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}
    </div>
  );
};