import {Link, NavLink, useLocation} from "react-router-dom";
import Navigation from "../navigation/Navigation";

export default function Header({auth, openBurger}) {
    const location = useLocation()
    const path = location.pathname

    return(
        <header id="header">
            {path !== '/' && path !== '/movies' && path !== '/saved-movies' && path !== '/profile' ? null : (
                <section>
                    {!auth ? (
                        <div className="header">
                            <Link className="header__link-logo link" to="/"/>
                            <div className="header__links">
                                <Link to="/signup" className="header__signin link">Регистрация</Link>
                                <Link to="/signin" className="header__signup link">Войти</Link>
                            </div>
                        </div>
                    ) : (
                        <Navigation openBurger={openBurger} />
                    )}
                </section>
            )}
        </header>
    )
}