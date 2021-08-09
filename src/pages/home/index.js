import React, { useState, useEffect } from "react";
import { PageContainer } from "../../styledComponents";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "../../components/Header";
import { Watchlist } from "../../components/Watchlist";
import { Watched } from "../../components/Watched";
import { Add } from "../../components/Add";
import "../../App.css";
import "../../lib/font-awesome/css/all.min.css";
import { Settings } from "../settings";
import { GlobalProvider } from "../../context/GlobalState";
import { fetchUsersMoviesWatched, fetchUsersMoviesWatchlist } from "../../utils";
import { Featured } from "../featured" 







export const Home = ({user}) => {
  const [watchedCount,setWatchedCount]=useState(0);
  const [watchlistCount,setWatchlistCount]=useState(0);

  const [watched, setWatched] = useState([]);

  useEffect((
  ) => {
    fetchUsersMoviesWatched(user, watched, setWatched)
  }, [watchedCount])



  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    fetchUsersMoviesWatchlist(user, watchlist, setWatchlist)},[watchlistCount])

   


  return (
    <PageContainer>
      <GlobalProvider>
        <Router>
          <Header />

          <Switch>
          <Route exact path="/">
              <Featured />
            </Route>
            <Route exact path="/watchlist">
              <Watchlist user={user} watchlist={watchlist} watchlistCount={watchlistCount} setWatchlistCount={setWatchlistCount} />
            </Route>
            <Route path="/add">
              <Add user={user} watched={watched} watchlist={watchlist} watchedCount={watchedCount} setWatchedCount={setWatchedCount} watchlistCount={watchlistCount} setWatchlistCount={setWatchlistCount}/>
            </Route>
            <Route path="/watched">
            <Watched user={user} watched={watched} watchedCount={watchedCount} setWatchedCount={setWatchedCount} />
            </Route>
            <Route path="/settings">
              <Settings />
            </Route>
          </Switch>
        </Router>
      </GlobalProvider>
    </PageContainer>
  );
};