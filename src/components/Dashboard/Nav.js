import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../Dashboard/DynamicRoutes/AllRoutes'

function Nav() {
    return (
        <div className="col-sm-12" style={{ margin: "0", padding: "0", background: "#099e96" }}>
            <nav className="navbar navbar-expand-lg navbar-light border-bottom" style={{ background: "#099e96" }}>
                <button className="btn" id="menu-toggle"><span className="navbar-toggler-icon"></span></button>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav m-auto mt-2 mt-lg-0 d-flex justify-content-between" style={{ width: '800px' }}>
                        <li className="nav-item ">
                            <Link className="nav-link text-white" to="#">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="#">About</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle text-white" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                User</Link>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to="#">Action</Link>
                                <Link className="dropdown-item" to="#">Another action</Link>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" to="#">Something else here</Link>
                                <Link className="dropdown-item" to="#">Another action</Link>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" to="#">Something else here</Link>
                                <Link className="dropdown-item" to="#">Another action</Link>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link text-white dropdown-toggle" data-toggle="dropdown" to="#" role="button" aria-haspopup="true" aria-expanded="false">Admin</Link>
                            <div className="dropdown-menu">
                                <Link className="dropdown-item" to="#">Action</Link>
                                <Link className="dropdown-item" to="#">Another action</Link>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" to="#">Something else here</Link>
                                <Link className="dropdown-item" to="#">Another action</Link>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" to="#">Something else here</Link>
                                <Link className="dropdown-item" to="#">Another action</Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="#">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="#">About</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link text-white dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                User</Link>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to="#">Action</Link>
                                <Link className="dropdown-item" to="#">Another action</Link>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" to="#">Something else here</Link>
                                <Link className="dropdown-item" to="#">Another action</Link>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" to="#">Something else here</Link>
                                <Link className="dropdown-item" to="#">Another action</Link>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link text-white dropdown-toggle" data-toggle="dropdown" to="#" role="button" aria-haspopup="true" aria-expanded="false">Admin</Link>
                            <div className="dropdown-menu">
                                <Link className="dropdown-item" to="#">Action</Link>
                                <Link className="dropdown-item" to="#">Another action</Link>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" to="#">Something else here</Link>
                                <Link className="dropdown-item" to="#">Another action</Link>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" to="#">Something else here</Link>
                                <Link className="dropdown-item" to="#">Another action</Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>


        </div>
    )
}

export default Nav
