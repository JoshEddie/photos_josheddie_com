import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../css/ImageBrowserNav.css';

import Header from './Header'
import Navigation from './Navigation'
import SortMenu from './SortMenu';

export default function ImageBrowserNav({sortImages}) {

    const [showMore, setShowMore] = useState(false)

    return (
        <>
        <Header />
        <nav className={showMore ? "imageFilter more" : "imageFilter"}>

            <Navigation hideShowMore={() => setShowMore(false)}/>

            <button className={showMore ? "photoNav active" : "photoNav"} onClick={() => setShowMore(!showMore)}>More</button>
            {showMore && (<nav className="moreFilter" onClick={() => setShowMore(!showMore)}>
                <Navigation />
                <span class="featuredHeader">Featured Sets:</span>
                <NavLink className='photoNav featuredSet' to="idaho">
                    Idaho
                </NavLink>
                <NavLink className='photoNav featuredSet' to="joshcolby">
                    Josh & Colby
                </NavLink>
                <NavLink className='photoNav featuredSet' to="comicpalooza2021">
                    Comicpalooza 21
                </NavLink>
            </nav>
            )}

            <SortMenu sortImages={sortImages}/>

        </nav>
        </>
    )

}