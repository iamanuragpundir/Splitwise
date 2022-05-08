import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router'
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { Link } from "react-router-dom";
import { sign_in } from '../../Splitwise-Google-Signin';
import SplitwiseLogo from '../../assets/images/Splitwise_logo.png';
import ProfilePicLogo from '../../assets/images/profile_pic_logo.png';
import '../styles/Navbar.css';

function Navbar(props) {

    const navigate = useNavigate();
    // const [picSrc, set_picSrc] = useState({ProfilePicLogo})
    const [userName, set_userName] = useState("")

    useEffect(() => {
        if (props.signed) {
            const firstName = props.user.profileObj.givenName;
            const lastName = props.user.profileObj.familyName;

            const name = firstName[0].toUpperCase() + firstName.substring(1) + " " + lastName[0].toUpperCase() + lastName.substring(1);
            set_userName(name);
        }
    })
    const handleLogin = (response) => {
        console.log(response);

        if (response.error) {
            console.log(response.error)
            return
        }

        if (response.profileObj !== null) { //sign-in was successfull
            console.log(response.profileObj)

            //check if this is a new user


            //if an old user
            props.updateUser(response, true);
        }

    }

    const handleLogout = (response) => {
        navigate('/')
        props.updateUser(response, false)
    }
    const prof_icon = (props.signed)
        ? <div>
            {/* <img width="40px" height="40px" src={picSrc} /> */}
            <h6>{userName}</h6>
            <GoogleLogout
                clientId="84478547183-qvd772o7l4697bdmvf931rkm4i05ds8f.apps.googleusercontent.com"
                // render={renderProps => (
                //     <a href="#" onClick={renderProps.onClick} disabled={renderProps.disabled}>Logout</a>
                // )}
                buttonText="Logout"
                onLogoutSuccess={handleLogout}
            />
        </div>

        : <GoogleLogin
            clientId="84478547183-qvd772o7l4697bdmvf931rkm4i05ds8f.apps.googleusercontent.com"
            buttonText="Sign in with Google"
            onSuccess={handleLogin}
            onFailure={handleLogin}
            cookiePolicy={'single_host_origin'}
        />
    return (
        <nav className="navbar container-navbar navbar-expand-lg navbar-light  pt-0 pb-0">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img width="40px" height="35px" src={SplitwiseLogo} />
                </Link>
                <Link className="navbar-brand" to="/">Splitwise</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-6">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/friends" className="nav-link" >Friends</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/groups">Groups</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/activity">Activity</Link>
                        </li>
                        {/* <button type="button" className="btn btn-secondary" >Create a Group</button> */}
                    </ul>

                    {prof_icon}
                </div>
            </div>



        </nav>
    )
}

export default Navbar
