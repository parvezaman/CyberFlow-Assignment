import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import navside from '../../../Resources/nav-side.png';
import './Feature.css';
import LowerPart from './LowerPart';

const Features = () => {
    return (
        <>
            {/* Upper section start           Upper section start                Upper section start */}

            <section className='row upper-section'>
                <div className='col-lg-6'>
                    <div className='nav-container'>
                        <Navbar bg="primary" variant="dark" expand="lg">
                            <Container>
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
                    <div>
                        <Container className='me-5 text-end nav-text d-flex justify-content-center align-items-center'>
                            <div>
                                <h1 className='me-5'>Your site name</h1>
                                <h3 className='me-5'>Your slogan comes here</h3>
                            </div>
                        </Container>
                    </div>
                </div>

                <div className='col-lg-6'>
                    <div className='upper-bar'>

                    </div>
                    <div className='text-center nav-image-container'>
                        <img className='img-fluid nav-image' src={navside} alt="" />
                    </div>
                </div>
            </section>
            {/* Upper section end           Upper section end                Upper section end */}



            {/* Lower section start                  Lower section start              Lower section start */}



            <LowerPart />




            {/* Lower section end                  Lower section end              Lower section end */}
        </>
    );
};

export default Features;