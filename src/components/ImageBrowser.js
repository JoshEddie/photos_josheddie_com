import React, { useState, useEffect, useRef } from 'react';

import '../css/ImageBrowser.css';

import Image from './Image'
import Sort from './Sort';
import { useOutletContext } from 'react-router-dom';

function ImageBrowser({type, imageList}) {

  const [showThumbnail, setShowThumbnail] = useState(Array(imageList.length).fill(true));
  const [showOverlay, setShowOverlay] = useState(Array(imageList.length).fill(false));
  const [currentOverlay, setCurrentOverlay] = useState(null);
  const photoDisplayRef = useRef();
  const imageSort = useOutletContext();

  var newOverlay = [];

  function toggleOverlay(i, newArray) {

    showOverlay[i] ? setCurrentOverlay(null) : setCurrentOverlay(i);
    newOverlay = newArray ? showOverlay.slice() : newOverlay;
    newOverlay[i] = showOverlay[i] ? false : true;
    setShowOverlay(newOverlay);

  }
  
  function showNextImage(index) {

    toggleOverlay(index, true);

    var photo = photoDisplayRef.current.children[0];

    while (photo.children[0].id != index) {
      photo = photo.nextSibling;
    }

    var photoId;
    if(photo.nextSibling.nextSibling === null) {
      photoId = photoDisplayRef.current.children[0].children[0].id
    }
    else {
      photoId = photo.nextSibling.nextSibling.children[0].id
    }
    toggleOverlay(photoId, false);

  }

  function showPrevImage(index) {

    toggleOverlay(index, true);

    var photo = photoDisplayRef.current.lastChild;

    while (photo.children[0].id != index || photo.className === 'imageOverlay') {
      photo = photo.previousSibling;
    }

    var photoId;
    if(photo.previousSibling === null) {
      photoId = photoDisplayRef.current.lastChild.children[0].id
    }
    else {
      photoId = photo.previousSibling.children[0].id
    }
    toggleOverlay(photoId, false);

  }

  document.onkeydown = checkKey;

    function checkKey(event) {

    if(currentOverlay === null) {
      return;
    }

    if (event.key == 'ArrowLeft') {
      showPrevImage(currentOverlay);
    }
    else if (event.key == 'ArrowRight') {
      showNextImage(currentOverlay);
    }
    else if (event.key == 'Escape') {
      toggleOverlay(currentOverlay);
    }

  }
  
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
    thumbnailCategory(type);
  }, [type]);

  return (
    <>
    <section className='photoContainer'>
        <section className='photoDisplay' ref={photoDisplayRef}>
            <Sort sortBy={imageSort}>
              {imageComponents}
            </Sort>
        </section>
    </section>
    </>
  );
}

export default ImageBrowser;
