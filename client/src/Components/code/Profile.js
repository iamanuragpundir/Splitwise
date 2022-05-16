import React, {useEffect} from 'react'
import {GoogleLogout } from 'react-google-login';
import { useNavigate } from 'react-router';

function Profile(props) {
    const navigate = useNavigate();

    const handleLogout = (response) => {
        console.log("logout")
        navigate('/')
        props.updateUser(response, false)
        props.closeProfileBox();
    }
    
  return (
      <div>
          <span>Account</span><br/>
          <GoogleLogout
              clientId="84478547183-qvd772o7l4697bdmvf931rkm4i05ds8f.apps.googleusercontent.com"
              render={renderProps => (
                  <a href="#" onClick={renderProps.onClick} disabled={renderProps.disabled}>Logout</a>
              )}
            //   buttonText="Logout"
              onLogoutSuccess={handleLogout}
          />
      </div>
  )
}

export default Profile