import React from "react";

export default function Layout({children}) {
    return (
        <React.Fragment>

            <nav className="navbar navbar-expand-lg fixed-top navbar-custom sticky sticky-dark">
                <div className="container">
                    <a className="navbar-brand logo text-uppercase" href="index.html">
                        <img src="assets/images/logo-light.png" className="logo-light" alt="" height="20"/>
                            <img src="assets/images/logo-dark.png" className="logo-dark" alt="" height="20"/>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <i className="mdi mdi-menu"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav ml-auto navbar-center" id="mySidenav">
                            <li className="nav-item active">
                                <a href="#home" className="nav-link">Home</a>
                            </li>
                            <li className="nav-item">
                                <a href="#services" className="nav-link">services</a>
                            </li>
                            <li className="nav-item">
                                <a href="#pricing" className="nav-link">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a href="#clients" className="nav-link">Clients</a>
                            </li>
                            <li className="nav-item">
                                <a href="#contact" className="nav-link">Contact</a>
                            </li>
                        </ul>

                        <div className="navbar-button">
                            <a href="" className="btn btn-sm btn-custom btn-round">Try it Free</a>
                        </div>
                    </div>
                </div>
            </nav>

            {children}
        </React.Fragment>
    )
}