import { NavLink } from "react-router-dom";

export default function Featured({image, title, link}) {

    return (
    <>
    <NavLink to={link}>
        <div className="featuredContainer">
            <img src={image} />
            <h2>{title}</h2>
        </div>
    </NavLink>
    </>
    );

}