import React from "react";
import Login from "./Login";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  
} from 'mdbreact';

function LogOut() {
    return (

            <div class="pt-5 pb-5 rounded">
                   
                   <MDBCard>
                     <MDBCardImage className="img-fluid" src="https://img.idxchannel.com/media/700/images/idx/2022/02/23/Buku_Bisnis_Terbaik.jpg"
                        />
                     <MDBCardBody>
                       <MDBBtn href="#"><Login /></MDBBtn>
                     </MDBCardBody>
                   </MDBCard>
            </div>
       
    )
}



export default LogOut;
