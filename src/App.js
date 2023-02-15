import React from "react";
import ListMovies from "./components/ListMovies.jsx";
import Home from "./components/Home";
import Create from "./components/Create";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/list' element={<ListMovies />} />
          <Route path='/add' element={<Create />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
