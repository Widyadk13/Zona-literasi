import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

export default function Login() {
    
    
    const clientId = "648341299149-1o6kq6frd26fd9pibhaivjrvsqpso70v.apps.googleusercontent.com";
   
    const [loginButton, setLoginButton] = useState(true); 
    const [logoutButton, setLogoutButton] = useState(false); 
      
    const loginSuccess = (res) => {
        console.log("LogSuccess : ", res.profileObj); 
        
        setLoginButton(false);
        setLogoutButton(true);
    }
    
    const failureSuccess = (res) => {
        console.log("Login Failed! : ", res);
    }
    
    const signoutSuccess = () => {
        alert("You've been signed out successfully.");
        setLoginButton(true);
        setLogoutButton(false);
        console.clear();
    }
    
    return (
        <div>
        {}
            { loginButton ?
                <GoogleLogin
                    clientId = {clientId}
                    buttonText = "Sign In With Google"
                    onSuccess = {loginSuccess}
                    onFailure = {failureSuccess}
                    cookiePolicy = {'single_host_origin'}
                /> : null
            }
            { logoutButton ?
                <GoogleLogout
                    clientId = {clientId}
                    buttonText = "Logout"
                    onLogoutSuccess = {signoutSuccess}
                /> : null
            }
        </div>
    )
}