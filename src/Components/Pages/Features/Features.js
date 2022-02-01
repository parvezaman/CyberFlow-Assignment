import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import navside from '../../../Resources/nav-side.png';
import './Feature.css';

const Features = () => {
    return (
        <>
            {/* Upper section start           Upper section start                Upper section start */}

            <section className='d-md-flex justify-content upper-section'>
                <div className='w-lg-50'>
                    <div className='nav-container'>
                        <Navbar bg="primary" variant="dark" expand="lg">
                            <Container>
                                {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="me-auto">
                                        <Nav.Link href="#home">HOME</Nav.Link>
                                        <Nav.Link href="#link">ABOUT US</Nav.Link>
                                        <Nav.Link href="#link">ARTICLES</Nav.Link>
                                        <NavDropdown title="PHOTOS" id="basic-nav-dropdown">
                                            <NavDropdown.Item href="#action/3.1">PHOTOS 1</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.2">PHOTOS 2</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.3">PHOTOS 3</NavDropdown.Item>
                                            <NavDropdown.Divider />
                                        </NavDropdown>
                                        <Nav.Link href="#link">CONTACT US</Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </div>
                    <Container className='nav-text'>
                        <h1 className='ms-5'>Your site name</h1>
                        <h3 className='ms-5'>Your slogan comes here</h3>
                    </Container>
                </div>

                <div className='w-lg-50 text-center'>
                    <img className='img-fluid' src={navside} alt="" />
                </div>
            </section>
            {/* Upper section end           Upper section end                Upper section end */}

            {/* Lower section start                  Lower section start              Lower section start */}







            {/* Lower section end                  Lower section end              Lower section end */}
        </>
    );
};

export default Features;