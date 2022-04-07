import React from "react";
import Login from "./Login";

function LogOut() {
    const user = localStorage.getItem("token")
    return (
        <div class="justify-content-sm-lg-xl-between mt-5 mb-5">
            <div class="pt-5 pb-5">
                {user ? <Login /> :
                    <a href="logout">
                        <i class="fa-solid fa-user-check"></i>
                    </a>
                }
            </div>
        </div>
    )
}

export default LogOut;