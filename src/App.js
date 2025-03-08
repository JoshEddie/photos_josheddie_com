// import React, { useState, useEffect } from 'react';
// import ReactDOM from "react-dom/client";
import { Analytics } from "@vercel/analytics/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './components/Home';
import ImageBrowser from './components/ImageBrowser';
import Photos from "./components/Photos";
import { comicpalooza2021List, defaultList, idahoList, joshcolbyList } from './components/imageList';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="" element={<Photos />}>
          <Route path="All" index element={<ImageBrowser type="All" imageList = {defaultList}/>} />
          {/* <Route path="Featured" index element={<ImageBrowser type="Featured" imageList = {defaultList}/>} /> */}
          <Route path="Nature" element={<ImageBrowser type="Nature" imageList={defaultList}/>} />
          <Route path="Landscape" element={<ImageBrowser type="Landscape" imageList={defaultList}/>} />
          <Route path="Animals" element={<ImageBrowser type="Animals" imageList={defaultList}/>} />
          <Route path="Black-&-White" element={<ImageBrowser type="Black-&-White" imageList={defaultList}/>} />
          <Route path="Portraits" element={<ImageBrowser type="Portrait" imageList={defaultList}/>} />
          <Route path="FamilyKids" element={<ImageBrowser type="FamilyKids" imageList={defaultList}/>} />
          <Route path="Cosplay" element={<ImageBrowser type="Cosplay" imageList={defaultList}/>} />
          <Route path="Flowers" element={<ImageBrowser type="Flower" imageList={defaultList}/>} />
          <Route path="Wedding" element={<ImageBrowser type="Wedding" imageList={defaultList}/>} />
          <Route path="Idaho" element={<ImageBrowser type="Featured" imageList={idahoList}/>} />
          <Route path="JoshColby" element={<ImageBrowser type="Featured" imageList={joshcolbyList}/>} />
          <Route path="Comicpalooza2021" element={<ImageBrowser type="Featured" imageList={comicpalooza2021List}/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    <Analytics />
    </>
  );
}

export default App;
