import '../css/ImageBrowser.css';

import Image from './Image'
import ImageBrowserNav from './ImageBrowserNav'
import React, { useState, useEffect } from 'react';

var images = [
  ["photos/Photo-0001.jpg", "photos/Photo-0001_large.jpg", "Hummingbird", "Seattle, WA | June, 2018", "Featured Fine-Art Animals Nature"],
  ["photos/Photo-0002.jpg", "photos/Photo-0002_large.jpg", "Hummingbird", "Seattle, WA | June, 2018", "Featured Fine-Art Animals Nature"],
  ["photos/Photo-0003.jpg", "photos/Photo-0003_large.jpg", "Hummingbird", "Seattle, WA | June, 2018", "Featured Fine-Art Animals Nature"],
  ["photos/Photo-0004.jpg", "photos/Photo-0004_large.jpg", "Hummingbird", "Seattle, WA | June, 2018", "Featured Fine-Art Nature"],
  ["photos/Photo-0005.jpg", "photos/Photo-0005_large.jpg", "Hummingbird", "Seattle, WA | June, 2018", "Featured Fine-Art Nature"],
  ["photos/Photo-0006.jpg", "photos/Photo-0006_large.jpg", "Hummingbird", "Seattle, WA | June, 2018", "Featured Fine-Art Animals Nature"],
  ["photos/Photo-0007.jpg", "photos/Photo-0007_large.jpg", "Hummingbird", "Seattle, WA | June, 2018", "Featured Fine-Art Animals Nature"],
  ["photos/Photo-0008.jpg", "photos/Photo-0008_large.jpg", "Hummingbird", "Seattle, WA | June, 2018", "Featured Fine-Art Nature"],
  ["photos/Photo-0009.jpg", "photos/Photo-0009_large.jpg", "Hummingbird", "Seattle, WA | June, 2018", "Featured Fine-Art Nature"],
  ["photos/Photo-0010.jpg", "photos/Photo-0010_large.jpg", "Hummingbird", "Seattle, WA | June, 2018", "Featured Fine-Art Nature"]
]

function App() {

  const [showThumbnail, setShowThumbnail] = useState(Array(images.length).fill(true));
  const [showOverlay, setShowOverlay] = useState(Array(images.length).fill(false))

  var newOverlay = [];

  function toggleOverlay(i, newArray) {

    newOverlay = newArray ? showOverlay.slice() : newOverlay;
    newOverlay[i] = showOverlay[i] ? false : true;
    setShowOverlay(newOverlay);

  }
  
  function showNextImage(i) {

    toggleOverlay(i, true);
    if (i === images.length - 1) {
      i = -1;
    }
    while(showThumbnail[i + 1] === false) {
      i++;
    }
    toggleOverlay(i + 1, false);

  }

  function showPrevImage(i) {

    toggleOverlay(i, true);
    if (i === 0) {
      i = images.length;
    }
    while(showThumbnail[i - 1] === false) {
      i--;
    }
    toggleOverlay(i - 1, false);

  }

  function thumbnailCategory(category) {

    var newThumbnail = Array(images.length).fill(false);
    for(let i = 0; i < images.length; i++) {
      if(images[i][4].toLowerCase().includes(category.toLowerCase())) {
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
  

  const imageComponents = []
  for(var i = 0; i < images.length; i++) {
    imageComponents.push(
      <Image
        key={i}
        index = {i}
        url = {images[i][0]}
        largeURL={images[i][1]}
        title={images[i][2]}
        info={images[i][3]}
        keywords={images[i][4]}
        showThumbnail = {showThumbnail}
        showOverlay = {showOverlay}
        toggleOverlay = {toggleOverlay}
        showNextImage = {showNextImage}
        showPrevImage = {showPrevImage}
      />
    )
  }

  return (
    <>
    <ImageBrowserNav 
        thumbnailCategory = {thumbnailCategory}
    />
    <section className='photoContainer'>
        <section className='photoDisplay'>
            {imageComponents}
        </section>
    </section>
    </>
  );
}

export default App;
