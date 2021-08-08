
import React from "react";
import Moment from "react-moment";
import { addMovieToUserWatched, addMovieToUserWatchlist } from "../utils";

export const ResultCard = ({ user, movie, watched, watchlist, watchlistCount, setWatchlistCount, watchedCount, setWatchedCount }) => {
 
   
    
// console.log(movie)
// console.log(watchlist[0].title, movie.title)
      let isWatched 
       watched.forEach((watchedMovie)=>{
        if(watchedMovie.title === movie.title){
          isWatched = true
        }
      })
      
     let isWatchlist 
     watchlist.forEach((watchlistMovie)=>{
      if(watchlistMovie.title === movie.title){
        isWatched = true
      }
    })
     
  let watchlistDisabled 
  if(isWatched || isWatchlist){
    watchlistDisabled = true
  } else{
    watchlistDisabled =false
  }

let watchedDisabled
  if(isWatched ){
    watchedDisabled=true
  }else{watchedDisabled=false}

 
  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        ) : (
          <div className="filler-poster" />
        )}
      </div>

      <div className="info">
        <div className="header">
          <h3 className="title">{movie.title}</h3>
          <h4 className="release-date">
            <Moment format="YYYY">{movie.release_date}</Moment>
          </h4>
          <h5 className="plot">{movie.overview}</h5>
        </div>

        <div className="controls">
          <button
            className="btn"
            disabled={watchlistDisabled}
            onClick={() =>{
              console.log(movie);
              addMovieToUserWatchlist(user,movie,watchlistCount,setWatchlistCount)}}
          >
            Add to Watchlist
          </button>

          <button
            className="btn"
            disabled={watchedDisabled}
            onClick={() =>{
              console.log(movie);
               addMovieToUserWatched(user,movie,watchedCount,setWatchedCount)}}
          >
            Add to Watched
          </button>
        </div>
      </div>
    </div>
  );

}