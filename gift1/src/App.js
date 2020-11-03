import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Fullbasket from "./components/fullbasket";
import Home from "./components/home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/fullbasket" component={Fullbasket} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
