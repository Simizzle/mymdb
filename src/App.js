import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import styled from "styled-components";
import { Landing } from "./pages/landing";
import { Home } from './pages/home';
// import { authUser } from "./utils";

const App = () => {
  const [user, setUser] = useState();

  // useEffect(() => {
  //   authUser(setUser)
  // }, [user]);

  return (
    <AppContainer>
      {user ? <Redirect to="/home" /> : <Redirect to="/" />}

      <Route exact path="/">
        <Landing setUser={setUser} />
      </Route>

      <Route exact path="/home">
        <Home user={user} />
      </Route>
    </AppContainer>
  );
};

const AppContainer = styled(Router)`
  width: 100vw;
  height: 100vh;
`;

export default App;
