// import * as dotenv from 'dotenv/lib/main';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Login from "./components/login/login";
import { Provider } from "react-redux";
import store  from "../src/redux/store";
import "./App.css";
// dotenv.config();
function App() {
  return (
    <Provider store={store}>

      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
