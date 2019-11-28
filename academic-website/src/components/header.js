import React from 'react';
import { Link } from 'react-router-dom'

class Header extends React.Component {

    render() {
        return (
            <div>
                <header className="header_area">
                    <div className="main_menu" id="mainNav">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <div className="container">
                                <a className="navbar-brand logo_h" href="index.html"><img src="img/logo.png" alt="" /><img src="img/logo-2.png" alt="" /></a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                                <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                                    <ul className="nav navbar-nav menu_nav ml-auto">

                                        <li className="nav-item active"><Link to="/" className="nav-link">Home</Link></li>
                                        <li className="nav-item"><Link to="/login" className="nav-link">Entrar</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </header>
            </div>
        );
    }
}
export default Header;