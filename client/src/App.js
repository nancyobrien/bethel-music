import React from "react";
import styled from "@emotion/styled/macro";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Global } from "@emotion/react";
import Header from "./components/Header";
import SongUsage from "./components/SongUsage";
import Footer from "./components/Footer";
import globalStyles from "./styles/global";
import "./App.css";

import "./styles/main.css";
import "react-datepicker/dist/react-datepicker.css";
import Contexts from "contexts";
import Plans from "components/Plans";

function App() {
  return (
    <AppContainer className="App">
      <Global styles={globalStyles} />
      <Contexts>
        <Router>
          <Header />
          <ContentContainer>
            <Switch>
              <Route exact path="/">
                <SongUsage />
              </Route>
              <Route path="/plans">
                <Plans />
              </Route>
            </Switch>
          </ContentContainer>
          <Footer />
        </Router>
      </Contexts>
    </AppContainer>
  );
}

export default App;

////////////////////////////////////////////
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  margin: 0 auto;
  position: relative;
`;
const ContentContainer = styled.div`
  flex: 1;
  overflow: auto;
`;
