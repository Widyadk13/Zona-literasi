import React from "react";
import Login from "./Login";

function LogOut() {
  const user = localStorage.getItem("token");
  return (
    <div class="justify-content-sm-lg-xl-between mt-5 mb-5" style={{}}>
      <div class="pt-5 pb-5">
        {user ? (
          <Login />
        ) : (
          <a href="logout">
            <i class="fa-solid fa-user-check"></i>
          </a>
        )}
      </div>
      <div>
        <div href="">
          <img alt="book" src="https://i.pinimg.com/originals/3d/38/27/3d38278501efdfc3ba3223deb7104e57.jpg" className="d-block w-60 h-50" />
          
        </div>
      </div>
    </div>
  );
}

export default LogOut;
