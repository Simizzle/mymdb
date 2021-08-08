export const fetchUsers = async (e, email, username, pass, setUser) => {
  e.preventDefault();
  try {
    let response;
    if (email) {
      response = await fetch(`${process.env.REACT_APP_API_NAME}users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          username: username,
          password: pass,
        }),
      });
    } else {
      response = await fetch(
        `${process.env.REACT_APP_API_NAME}users/${username}`
      );
    }
    const data = await response.json();
    setUser(data.user.username);
  } catch (error) {
    console.log(error);
  }
};

export const editUsername = async (e, oldUsername, newUsername) => {
  e.preventDefault();
  try {
    await fetch(`${process.env.REACT_APP_API_NAME}users`, {
      method: "Put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        oldUsername: oldUsername,
        newUsername: newUsername,
      }),
    });
  } catch (error) {
    console.log(error);
  }
};

export const editPassword = async (
  e,
  oldUsername,
  oldPassword,
  newPassword
) => {
  e.preventDefault();
  try {
    await fetch(`${process.env.REACT_APP_API_NAME}users`, {
      method: "Put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        oldUsername: oldUsername,
        oldPassword: oldPassword,
        newPassword: newPassword,
      }),
    });
  } catch (error) {
    console.log(error);
  }
};

export const editEmail = async (e, oldUsername, oldPassword, newEmail) => {
  e.preventDefault();
  try {
    await fetch(`${process.env.REACT_APP_API_NAME}users`, {
      method: "Put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        oldUsername: oldUsername,
        oldPassword: oldPassword,
        email: newEmail,
      }),
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (e, oldUsername, oldPassword) => {
  e.preventDefault();
  await fetch(`${process.env.REACT_APP_API_NAME}deleteUsers`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: oldUsername,
      password: oldPassword,
    }),
  });
};

export const fetchUsersMoviesWatched = async (user,watched, setWatched) => {
 
  const response = await fetch(
    `${process.env.REACT_APP_API_NAME}users/watched/${user}`
  );
  
  const data = await response.json();
  await data.map(async (movie) => {
    const innerResponse = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${movie}`
    );
    const innerData = await innerResponse.json();
    let watchedMovie = watched
    let trueCount
    watched.forEach((watchedMovie)=>{
      if(watchedMovie.title === movie.title){
         trueCount = true
      }
    })
    if(!trueCount){
      watchedMovie.push(innerData.results[0]);
      }
   
    setWatched(watchedMovie)
  });
}

export const addMovieToUserWatched = async (
  user,
  movie,
  watchedCount,
  setWatchedCount
) => {
  console.log(movie);
  await fetch(`${process.env.REACT_APP_API_NAME}users/watched/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: user,
      movie: movie.title,
    }),
  });
  setWatchedCount(watchedCount + 1);
};

export const removeMovieUserWatched = async (
  user,
  movie,
  watchedCount,
  setWatchedCount
) => {
  await fetch(`${process.env.REACT_APP_API_NAME}users/watched/remove`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: user,
      movie: movie.title,
    }),
  });
  setWatchedCount(watchedCount + 1);
};

export const fetchUsersMoviesWatchlist = async (user,watchlist, setWatchlist) => {
  
  console.log("fetchwatchedlist");
  const response = await fetch(
    `${process.env.REACT_APP_API_NAME}users/watchlist/${user}`
  );
  
  const data = await response.json();
  await data.map(async (movie) => {
    const innerResponse = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${movie}`
    );

    const innerData = await innerResponse.json();
    let watchedMovie = watchlist
    let trueCount
    watchlist.forEach((watchlistMovie)=>{
      if(watchlistMovie.title === innerData.results[0].title){
        trueCount = true
      }
    })
    if(!trueCount){
    watchedMovie.push(innerData.results[0]);
    }
    setWatchlist(watchedMovie)
  });

  
};

export const addMovieToUserWatchlist = async (
  user,
  movie,
  watchlistCount,
  setWatchlistCount
) => {
  console.log({ movie: movie.title, user: user });
  const response = await fetch(
    `${process.env.REACT_APP_API_NAME}users/watchlist/add`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: user,
        movie: movie.title,
      }),
    }
  );
  setWatchlistCount(watchlistCount + 1);
  const data = await response.json();
  console.log(data);
};

export const removeMovieUserWatchlist = async (
  user,
  movie,
  watchlistCount,
  setWatchlistCount
) => {
  console.log({remove:user})
  await fetch(`${process.env.REACT_APP_API_NAME}users/watchlist/remove`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: user,
      movie: movie.title,
    }),
  });
  setWatchlistCount(watchlistCount + 1);
};

export const movieMoveFromWatchlistToWatched = async (
  user,
  movie,
  watchedCount,
  setWatchedCount,
  watchlistCount,
  setWatchlistCount
) => {
  removeMovieUserWatchlist(user, movie, watchlistCount, setWatchlistCount);
  addMovieToUserWatched(user, movie, watchedCount, setWatchedCount);
};

export const movieMoveFromWatchedToWatchlist = async (
  user,
  movie,
  watchedCount,
  setWatchedCount,
  watchlistCount,
  setWatchlistCount
) => {
  removeMovieUserWatched(user, movie, watchedCount, setWatchedCount);
  addMovieToUserWatchlist(user, movie, watchlistCount, setWatchlistCount);
};