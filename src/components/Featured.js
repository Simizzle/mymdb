import React, { useState } from "react";
import { FeaturedMovieCard } from "../components/FeaturedMovies";
import "../../src/App.css";

export const Featured = () => {
  const [results, setResults] = useState([]);

  fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
  )
    .then((res) => res.json())
    .then((data) => {
      if (!data.errors) {
        setResults(data.results);
      } else {
        setResults([]);
      }
    });

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">Popular Movies</h1>
        </div>
        <div className="movie-grid">
          {results.map((movie) => (
            <FeaturedMovieCard movie={movie} key={movie.id} type="featured" />
          ))}
        </div>
      </div>
    </div>
  );
};