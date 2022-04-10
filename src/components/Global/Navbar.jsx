import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container, } from 'reactstrap';
import Login from "./Login";
import './Navbar.css'


export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
        this.user = localStorage.getItem("token")
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {


        return (

            <div class="navbar-light bg-white fixed-top mediumnavigation nav-up">
                <Navbar color="light" light expand="md">
                    <Container>
                        <NavbarBrand href="">
                            <img
                                alt="Logo"
                                src="https://drive.google.com/uc?export=view&id=1aAS1Js45TPgTWDEghLg5-d9crL-OgNo2"
                                width="150"
                                height="60"
                                className="d-inline-block align-top"
                            />
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="/">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/AboutUs">About Us</NavLink>
                                </NavItem>
                                  {this.user ? 
                                    <NavItem>
                                    <NavLink href="/Booklist">Find Books  </NavLink>  
                                    <div class="navbar2" >
                                    <Login />
                                    </div>
                                    </NavItem>
                                    : <>  
                                    <NavItem>
                                    <NavLink href="logout">Find Books</NavLink>
                                </NavItem>
                                {/* <Login />  */}
                                   </>}
                                   
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}