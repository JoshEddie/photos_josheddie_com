import { useState } from 'react';

export default function SortMenu({sortImages}) {

    const [showSort, setShowSort] = useState(false);
    const [currentSort, setCurrentSort] = useState(['Featured', true])

    return (
        <>
        <button className={showSort ? "sortMenuButton active" : "sortMenuButton"} onClick={() => setShowSort(!showSort)}>Sort By: {currentSort}</button>
        <div className={showSort ? "sortMenu show" : "sortMenu"} onClick={() => setShowSort(!showSort)}>
            <button
                className={currentSort[0] == 'Featured' ? "photoNav sortButton active" : "photoNav sortButton"}
                onClick={() => {
                    sortImages(['index', true]);
                    setCurrentSort(['Featured', true]);
                }}>Featured</button>
            <button 
                className={currentSort[0] == 'Date - New to Old' && !currentSort[1] ? "photoNav sortButton active" : "photoNav sortButton"}
                onClick={() => {
                    sortImages(['date', false]);
                    setCurrentSort(['Date - New to Old', false]);
                }}>Date: New to Old</button>
            <button 
                className={currentSort[0] == 'Date - Old to New' && currentSort[1] ? "photoNav sortButton active" : "photoNav sortButton"}
                onClick={() => {
                    sortImages(['date', true]);
                    setCurrentSort(['Date - Old to New', true]);
                }}>Date: Old to New</button>   
            <button 
                className={currentSort[0] == 'Title - A to Z' && currentSort[1] ? "photoNav sortButton active" : "photoNav sortButton"}
                onClick={() => {
                    sortImages(['title', true]);
                    setCurrentSort(['Title - A to Z', true]);
                }}>Title: A to Z</button>
            <button 
                className={currentSort[0] == 'Title - Z to A' && !currentSort[1] ? "photoNav sortButton active" : "photoNav sortButton"}
                onClick={() => {
                    sortImages(['title', false]);
                    setCurrentSort(['Title - Z to A', false]);
                }}>Title: Z to A</button>    
            <button 
                className={currentSort[0] == 'Random' ? "photoNav sortButton active" : "photoNav sortButton"}
                onClick={() => {
                    sortImages(['Random', true]);
                    setCurrentSort(['Random', true]);
                }}>Random</button> 
        </div>
        </>
    )
}