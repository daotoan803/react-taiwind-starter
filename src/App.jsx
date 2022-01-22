import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <div className="App">
      <h1 className="text-3xl text-pink-500 text-center">Hello world</h1>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default App;
