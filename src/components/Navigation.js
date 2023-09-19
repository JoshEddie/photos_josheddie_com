import { NavLink } from 'react-router-dom';

export default function Navigation({hideShowMore}) {
    return (
        <>
            {/* <a 
                href="https://josheddiephotography.pixieset.com/shop/" 
                className="photoNav nav4" 
                target="_Blank"
                onClick={hideShowMore}>
                    Shop
            </a> */}
            <NavLink 
                className='photoNav nav1' to="all"
                onClick={hideShowMore}>
                    All
            </NavLink>
            <NavLink 
                className='photoNav nav2' to="nature"
                onClick={hideShowMore}>
                    Nature
            </NavLink>
            <NavLink 
                className='photoNav nav6' to="landscape"
                onClick={hideShowMore}>
                    Landscape
            </NavLink>
            <NavLink 
                className='photoNav nav8' to="animals"
                onClick={hideShowMore}>
                    Animals
            </NavLink>
            <NavLink 
                className='photoNav nav7' to="black-&-white"
                onClick={hideShowMore}>
                    Black & White
            </NavLink>
            <NavLink 
                className='photoNav nav3' to="portraits"
                onClick={hideShowMore}>
                    Portraits
            </NavLink>
            <NavLink 
                className='photoNav nav5' to="familykids"
                onClick={hideShowMore}>
                    Family & Kids
            </NavLink>
            <NavLink 
                className='photoNav nav9' to="cosplay"
                onClick={hideShowMore}>
                    Cosplay
            </NavLink>
        </>
    );
}