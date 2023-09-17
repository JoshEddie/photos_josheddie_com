import { Link } from 'react-router-dom';
import { SmallLogo } from "./Logo";

export default function Header() {
    return (
        <header className="header">
            <Link to="/">
                <SmallLogo />
            </Link>
        </header>
    )
}