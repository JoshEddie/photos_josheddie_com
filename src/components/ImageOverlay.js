
import '../css/image.css';

export default function ImageOverlay({index, largeURL, title, info, showNextImage, showPrevImage, toggleOverlay}) {

    return (
        <>
        <div className="imageOverlay">
            <div 
                className='bgImage'
                style={{
                    backgroundImage: 'url("' + largeURL + '")'
                }}
            ></div>
            <div className='largeImageContainer'>
                <button 
                    className='navButton closeImage'
                    onClick = {() => toggleOverlay(index)}
                >&times;</button>
                <button
                    className='navButton prevPhoto backNext'
                    onClick={() => showPrevImage(index)}
                >‹</button>
                <button
                    className='navButton nextPhoto backNext'
                    onClick={() => showNextImage(index)}
                >›</button>
                <img
                    src = {largeURL}
                    alt = {title}
                    onClick={() => showNextImage(index)}
                />
            </div>
            <div className='infoContainer'>
                <h1>{title}</h1>
                <h2>{info}</h2>
            </div>
        </div>
        </>
    )

    // <div class="ImageOverlay open" id="photograph-1-large">
    //     <div class="overlayBackgroundImage" id="overlayBackgroundImage-1" style="background-image: url(&quot;../images/photos/Large/Photo-0120.jpg?v=2&quot;);"></div>
    //     <div class="ImageContainer Ver">
    //         <a class="closeImage Ver" title="Close Photo" style="cursor: pointer;">×</a>
    //         <aside id="back-0" class="backDIV" title="Previous Photo">
    //             <a class="backnext Ver">‹</a>
    //         </aside>
    //         <aside id="next-2" class="nextDIV" title="Next Photo">
    //             <a class="backnext Ver">›</a>
    //         </aside>
    //         <img class="ImageLarge" id="largeImg-1" src="images/photos/Large/Photo-0120.jpg?v=2">
    //     </div>
    //     <div class="ImageInfo">
    //         <h1>Silhouette Tree Sunset</h1>
    //         <h2>Houston, TX | January, 2022</h2>
    //     </div>
    // </div>

}