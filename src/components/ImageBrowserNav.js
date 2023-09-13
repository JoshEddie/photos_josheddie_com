import '../css/ImageBrowserNav.css';

import Header from './Header'
import Navigation from './Navigation'

export default function ImageBrowserNav({thumbnailCategory}) {

    return (
        <>
        <Header />
        <Navigation 
            thumbnailCategory = {thumbnailCategory}
        />
        </>
    )

}