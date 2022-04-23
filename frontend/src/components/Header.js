import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import ModalComponent from './Modal'

function Header() {
    return (
        <header>
            <Navbar bg='primary' variant='dark' expand='lg' collapseOnSelect>
                <Container>
                    <Navbar.Brand href="#home">Mern Blog</Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='ms-auto'>
                            <Nav.Link>
                                <ModalComponent titleLogin="Login"   />
                            </Nav.Link>
                            <Nav.Link>
                                <ModalComponent titleRegister="Register"  />
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header