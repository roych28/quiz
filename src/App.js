import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";

import WelcomePage from "./Pages/WelcomePage";
import ScorePage from "./Pages/ScorePage";
import QuizPage from "./Pages/QuizPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Container maxWidth="sm">
          <Box textAlign="center" mt={5}>
            <Switch>
              <Route exact path="/">
                <Typography variant="h2" fontWeight="bold">
                  Quiz Test For 365
                </Typography>
                <WelcomePage />
              </Route>
              <Route path="/quiz">
                <QuizPage />
              </Route>
             {<Route path="/score">
                <ScorePage />
              </Route>}
            </Switch>
          </Box>
        </Container>
      </Router>
    </div>
  );
}

export default App;