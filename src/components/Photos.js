import { Outlet, useOutletContext } from "react-router-dom";
import React, { useState, useRef } from 'react';

import ImageBrowser from './ImageBrowser'
import ImageBrowserNav from './ImageBrowserNav'
import Copyright from "./Copyright";
import Sort from './Sort';

export default function Photos({type}) {

    const [imageSort, setImageSort] = useState(['index', true]);

    function sortImages(sortBy) {
        setImageSort(sortBy);
    }

    return (
        <>
        <ImageBrowserNav sortImages = {sortImages}/>
        <Outlet context={imageSort}/>
        <Copyright />
        </>
    )
}