import { NavLink } from "react-router-dom";

export default function Featured({image, title, link, target}) {

    return (
    <>
    <NavLink to={link} target={target}>
        <div className="featuredContainer">
            <img src={image} />
            <h2>{title}</h2>
        </div>
    </NavLink>
    </>
    );

}