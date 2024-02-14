
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Admin from './Components/Admin';
import Quiz from './Components/Quiz';
import questionsData from './Data/questions.json';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <Router>
      <Navbar loggedIn={loggedIn} /> {/* Passing the loggedIn state to Navbar */}

      <Routes>
        <Route
          path="/login"
          element={
            loggedIn ? <Navigate to="/admin" /> : <Login handleLogin={handleLogin} />
          }
        />
        <Route
          path="/admin"
          element={
            loggedIn ? <Admin /> : <Navigate to="/login" />
          }
        />
        <Route
          path="/quiz"
          element={
            loggedIn ? <Quiz questions={questionsData} /> : <Navigate to="/login" />
          }
        />
        <Route
          path="/"
          element={<Navigate to="/quiz" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
