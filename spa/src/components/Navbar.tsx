import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [burgerOpen, setBurgerOpen] = useState(false);

    const handleMenuClik = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        setBurgerOpen(!burgerOpen);
    }

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    Notifications
                </a>

                <a role="button" className={burgerOpen ? "navbar-burger is-active" : "navbar-burger"} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={handleMenuClik}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className={burgerOpen ? "navbar-menu is-active" : "navbar-menu"}>
                <div className="navbar-start">
                    <Link className="navbar-item" to={"logs"}>
                        Logs
                    </Link>

                    <Link className="navbar-item" to={"publish"}>
                        Publish
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;