import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './components/Home'
import ImageBrowser from './components/ImageBrowser'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/photos" element={<ImageBrowser />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
