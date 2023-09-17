import Thumbnail from "./Thumbnail";
import ImageOverlay from "./ImageOverlay";
import { useRef, useState } from "react";

export default function Image({index, url, largeURL, title, info, showThumbnail, showOverlay, toggleOverlay, showNextImage, showPrevImage}) {

    return (
        <>
        {showThumbnail[index] && (<Thumbnail 
            index = {index}
            url = {url}
            title={title}
            toggleOverlay = {toggleOverlay}
        />)}
        {showOverlay[index] && (<ImageOverlay
            index = {index}
            largeURL={largeURL}
            title={title}
            info={info}
            showNextImage = {showNextImage}
            showPrevImage = {showPrevImage}
            toggleOverlay = {toggleOverlay}
            showOverlay = {showOverlay[index]}
        />)}
        </>
    )

}