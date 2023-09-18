import { useState } from 'react';

export default function SortMenu({sortImages}) {

    const [showSort, setShowSort] = useState(false);
    const [currentSort, setCurrentSort] = useState(['Featured', true])

    return (
        <>
        {/* {showSort && (
            <button className="sortMenu" onClick={() => setShowSort(!showSort)}>Sort by: {currentSort} ⌄</button>
        )} */}
        {/* {!showSort && ( */}
            <>
            <div className='sortMenu' onClick={() => setShowSort(!showSort)}>
                <button
                    className={currentSort[0] == 'Featured' ? "photoNav sortButton active" : "photoNav sortButton"}
                    onClick={() => {
                        sortImages(['index', true]);
                        setCurrentSort(['Featured', true]);
                    }}>Featured</button>
                <button 
                    className={currentSort[0] == 'Date' && !currentSort[1] ? "photoNav sortButton active" : "photoNav sortButton"}
                    onClick={() => {
                        sortImages(['date', false]);
                        setCurrentSort(['Date', false]);
                    }}>Date: New to Old</button>
                <button 
                    className={currentSort[0] == 'Date' && currentSort[1] ? "photoNav sortButton active" : "photoNav sortButton"}
                    onClick={() => {
                        sortImages(['date', true]);
                        setCurrentSort(['Date', true]);
                    }}>Date: Old to New</button>   
                <button 
                    className={currentSort[0] == 'Title' && currentSort[1] ? "photoNav sortButton active" : "photoNav sortButton"}
                    onClick={() => {
                        sortImages(['title', true]);
                        setCurrentSort(['Title', true]);
                    }}>Title: A to Z</button>
                <button 
                    className={currentSort[0] == 'Title' && !currentSort[1] ? "photoNav sortButton active" : "photoNav sortButton"}
                    onClick={() => {
                        sortImages(['title', false]);
                        setCurrentSort(['Title', false]);
                    }}>Title: Z to A</button>    
                <button 
                    className={currentSort[0] == 'Random' ? "photoNav sortButton active" : "photoNav sortButton"}
                    onClick={() => {
                        sortImages(['Random', true]);
                        setCurrentSort(['Random', true]);
                    }}>Random</button> 
            </div>
            </>
        {/* )} */}
      </>
    )
}