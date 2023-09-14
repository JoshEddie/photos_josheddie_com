
import '../css/image.css';

export default function ImageOverlay({index, largeURL, title, info, showNextImage, showPrevImage, toggleOverlay, overlayRef}) {

    return (
        <>
        <div className="imageOverlay" ref={overlayRef}>
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
                />
            </div>
            <div className='infoContainer'>
                <h1>{title}</h1>
                <h2>{info}</h2>
            </div>
        </div>
        </>
    )

}