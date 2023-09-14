import React, { useState, useEffect, useRef } from 'react';

import '../css/ImageBrowser.css';

import {imageList} from './imageList';
import Image from './Image'
import ImageBrowserNav from './ImageBrowserNav'
import Sort from './Sort';
import Copyright from './Copyright';

function App() {

  const [showThumbnail, setShowThumbnail] = useState(Array(imageList.length).fill(true));
  const [showOverlay, setShowOverlay] = useState(Array(imageList.length).fill(false))

  var newOverlay = [];

  function toggleOverlay(i, newArray) {

    newOverlay = newArray ? showOverlay.slice() : newOverlay;
    newOverlay[i] = showOverlay[i] ? false : true;
    setShowOverlay(newOverlay);

  }
  
  function showNextImage(index) {

    toggleOverlay(index, true);

    var photo = ref.current.children[0];

    while (photo.children[0].id != index) {
      photo = photo.nextSibling;
    }

    var photoId;
    if(photo.nextSibling.nextSibling === null) {
      photoId = ref.current.children[0].children[0].id
    }
    else {
      photoId = photo.nextSibling.nextSibling.children[0].id
    }
    toggleOverlay(photoId, false);

  }

  function showPrevImage(index) {

    toggleOverlay(index, true);

    var photo = ref.current.lastChild;

    while (photo.children[0].id != index || photo.className === 'imageOverlay') {
      photo = photo.previousSibling;
    }

    var photoId;
    if(photo.previousSibling === null) {
      photoId = ref.current.lastChild.children[0].id
    }
    else {
      photoId = photo.previousSibling.children[0].id
    }
    toggleOverlay(photoId, false);

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
  

  const ref = useRef();
  const [imageSort, setImageSort] = useState('index')
  const imageComponents = []
  for(var i = 0; i < imageList.length; i++) {
    imageComponents.push(
      <Image
        key = {i}
        index = {i}
        innerRef={ref}
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
        <section className='photoDisplay' ref={ref}>
            <Sort sortBy={imageSort}>
              {imageComponents}
            </Sort>
        </section>
    </section>
    <Copyright />
    <button 
      style={{position: 'fixed', bottom: 10, left: 10, zIndex: 10000}}
      onClick={() => sortImages('url')}>sort by url</button> 
    <button style={{position: 'fixed', bottom: 10, left: 100, zIndex: 10000}}
      onClick={() => sortImages('index')}>sort by key</button> 
    </>
  );
}

export default App;
