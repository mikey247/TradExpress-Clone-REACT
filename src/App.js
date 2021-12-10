import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Getstarted from "./GetStarted";
import BuySell from "./Buy-Sell";
import Login from "./Login";
import Business from "./Business";
import Sell from "./Sell";

function App() {
  return (
    <div className="App">
      <div>
        <Router>
          <Navbar />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/getstarted">
              <Getstarted />
            </Route>
            <Route path="/business">
              <Business />
            </Route>
            <Route path="/buysell">
              <BuySell />
            </Route>
            <Route path ="/sell">
              <Sell/>
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
// eslint-disable-next-line
{
  /* <Route path="/About">
            <About />
           
          </Route> */
}
