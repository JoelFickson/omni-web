import React from "react";
import "../../styles/main.css"
import {Link} from "react-router-dom";
import {ThreeBarsIcon} from "@primer/octicons-react";


const AppBar = () => {


    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/app">
                    Omnipresent
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <ThreeBarsIcon size={16}/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/admin">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/employees">
                                Employees
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Employees
                            </Link>


                        </li>

                    </ul>

                </div>
            </div>
        </nav>

    )
}


export default AppBar;