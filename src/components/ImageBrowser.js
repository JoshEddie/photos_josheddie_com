import '../css/ImageBrowser.css';

import {imageList} from './imageList';
import Image from './Image'
import ImageBrowserNav from './ImageBrowserNav'
import Sort from './Sort';
import React, { useState, useEffect } from 'react';

function App() {

  const [showThumbnail, setShowThumbnail] = useState(Array(imageList.length).fill(true));
  const [showOverlay, setShowOverlay] = useState(Array(imageList.length).fill(false))

  var newOverlay = [];

  function toggleOverlay(i, newArray) {

    newOverlay = newArray ? showOverlay.slice() : newOverlay;
    newOverlay[i] = showOverlay[i] ? false : true;
    setShowOverlay(newOverlay);

  }
  
  function showNextImage(i) {

    toggleOverlay(i, true);
    do {
      i++;
      if (i === imageList.length) {
        i = 0;
      }
    } while(showThumbnail[i] === false);
    toggleOverlay(i, false);

  }

  function showPrevImage(i) {

    toggleOverlay(i, true);
    do {
      i--;
      if (i === -1) {
        i = imageList.length - 1;
      }
    } while(showThumbnail[i] === false);
    toggleOverlay(i, false);

  }

  function thumbnailCategory(category) {

    var newThumbnail = Array(imageList.length).fill(false);
    for(let i = 0; i < imageList.length; i++) {
      if(imageList[i][4].toLowerCase().includes(category.toLowerCase())) {
        newThumbnail[i] = true;
      };
    }
    setShowThumbnail(newThumbnail);

  }

  useEffect(() => {
    var imageSortType = 'Featured';
    if(window.location.hash != "") {
        imageSortType = window.location.hash.substring(1);
    }
    thumbnailCategory(imageSortType);
  }, [window.location]);
  

  const [imageSort, setImageSort] = useState('index')
  const imageComponents = []
  for(var i = 0; i < imageList.length; i++) {
    imageComponents.push(
      <Image
        key = {i}
        index = {i}
        url = {imageList[i][0]}
        largeURL={imageList[i][1]}
        title={imageList[i][2]}
        info={imageList[i][3]}
        showThumbnail = {showThumbnail}
        showOverlay = {showOverlay}
        toggleOverlay = {toggleOverlay}
        showNextImage = {showNextImage}
        showPrevImage = {showPrevImage}
      />
    )
  }

  function sortImages(sortBy) {
    setImageSort(sortBy);
  }

  return (
    <>
    <ImageBrowserNav 
        thumbnailCategory = {thumbnailCategory}
    />
    <section className='photoContainer'>
        <section className='photoDisplay'>
            <Sort sortBy={imageSort}>
              {imageComponents}
            </Sort>
        </section>
    </section>
    <button 
      style={{position: 'fixed', bottom: 10, left: 10, zIndex: 10000}}
      onClick={() => sortImages('url')}>sort by url</button> 
    <button style={{position: 'fixed', bottom: 10, left: 100, zIndex: 10000}}
      onClick={() => sortImages('index')}>sort by key</button> 
    </>
  );
}

export default App;
