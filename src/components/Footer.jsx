import React from "react"
import { Container } from "reactstrap"

const Footer = () =>
<Container>
 <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">ZONA LITERASI</h5>
                <p>Membuat anda cerdas dengan banyak membaca</p>
            </div>
            
            <div className="col-md-1 ml-auto">
            <i class="fa-brands fa-instagram fa-3x"></i>
                <ul className="list-unstyled">
                    <li><a href="https://www.instagram.com/dandysetiawanp/?hl=id">Instagram</a></li>  
                </ul>
            </div>
           
            <div className="col-ml-ml-auto">
            <i class="fa-brands fa-facebook fa-3x"></i>
                <ul className="list-unstyled">
                    <li><a href="https://www.instagram.com/dandysetiawanp/?hl=id">Facebook</a></li>  
                </ul>
            </div>
        </div>
    </div>
    <div className="footer-copyright text-center py-3">© 2022 Copyright:
        <a href="https://zonaliterasi.com/"> zonaliterasi.com</a>
    </div>
</footer>
</Container>

export default Footer