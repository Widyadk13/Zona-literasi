import React from "react";
import Login from "./Login";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  
} from 'mdbreact';
import './LogOut.css'

function LogOut() {
    return (

            <div class="rounded">
                   
                   <MDBCard className="img-fluid">
                     <MDBCardBody className="imgBtn">
                       <MDBBtn > <Login /> </MDBBtn>
                     </MDBCardBody>
                   </MDBCard>
            </div>
       
    )
}



export default LogOut;
