import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container, } from 'reactstrap';

export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div class="navbar-light bg-white fixed-top mediumnavigation nav-up">
                <Navbar color="warning" light expand="md">
                    <Container>
                        <NavbarBrand href="">
                            <img
                                alt=""
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
                                    <NavLink href="/components/">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="">About Us</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="">Find Books</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="">Login</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="">Sign Up</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}