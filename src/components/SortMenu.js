import { useState } from 'react';

export default function SortMenu({sortImages}) {

    const [showSort, setShowSort] = useState(false);
    const [currentSort, setCurrentSort] = useState('Featured')

    return (
        <>
        {!showSort && (
            <button className="sortMenu" onClick={() => setShowSort(!showSort)}>Sort by: {currentSort} ⌄</button>
        )};
        {showSort && (
            <>
            <div className='sortMenu' onClick={() => setShowSort(!showSort)}>
                <button 
                    className='sortButton'
                    onClick={() => {
                        sortImages('index');
                        setCurrentSort('Featured');
                    }}>Featured</button>
                <button 
                    className='sortButton'
                    onClick={() => {
                        sortImages('url');
                        setCurrentSort('URL');
                    }}>URL</button>  
                <button 
                    className='sortButton'
                    onClick={() => {
                        sortImages('Random');
                        setCurrentSort('Random');
                    }}>Random</button> 
            </div>
            </>
        )};
      </>
    )
}