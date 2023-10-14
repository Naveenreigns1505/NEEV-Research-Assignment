import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from "./components/Home";
import BarcodeGenerator from "./components/BarcodeGenerator";
import BarcodeScanner from "./components/BarcodeScanner";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Router>
          <div>
            <Switch>
              <Route exact path="/">
                <Home/>
              </Route>
              <Route path="/barcode_generator">
                <BarcodeGenerator />
              </Route>
              <Route path="/barcode_scanner">
                <BarcodeScanner />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
