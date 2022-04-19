import React from 'react'
import Splitwise_logo from '../../assets/images/Splitwise_logo.png';
import '../styles/Navbar.css';

function Navbar() {
    return (
        <nav className="navbar container-navbar navbar-expand-lg navbar-light  pt-0 pb-0">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img width="180px" height="60px" src={Splitwise_logo} />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-5">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Friends</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Groups</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Activity</a>
                        </li>
                    </ul>    
                    <button type="button" className="btn btn-secondary">Create a Group</button>
                    <a className="nav-link active" aria-current="page" href="#"><h5>Profile</h5></a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
