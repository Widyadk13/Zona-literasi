import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

export default function Login() {


    const clientId = "648341299149-1o6kq6frd26fd9pibhaivjrvsqpso70v.apps.googleusercontent.com";

    const [, setLoginButton] = useState(true);
    const [, setLogoutButton] = useState(false);

    const loginSuccess = (res) => {
        console.log("LogSuccess : ", res);
        localStorage.setItem("token", res.tokenId)
        window.location.reload();
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
        localStorage.removeItem("token")
        window.location.reload();
    }

    const user = localStorage.getItem("token")
    console.log(user);
    return (
        <>
            {user ?
                <GoogleLogout
                    clientId={clientId}
                    buttonText="Logout"
                    onLogoutSuccess={signoutSuccess}
                /> :
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Sign In With Google"
                    onSuccess={loginSuccess}
                    onFailure={failureSuccess}
                    cookiePolicy={'single_host_origin'}
                />
            }
        </>
    )
}