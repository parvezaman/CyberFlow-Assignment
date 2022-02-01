import React from 'react';
import { Container } from 'react-bootstrap';

const LowerPart = () => {
    return (
        <section className='row'>
            <div className='left-side col-md-4'>
                <Container>
                    <h1 className='text-light'>Website add ons</h1>
                    <p>Check out our easy to integrate Web Site Add-ons!</p>
                    <br />
                    <ul>
                        <li>Smart Survey</li>
                        <li>Smart multi Poll</li>
                        <li>Smart Poll</li>
                        <li>Smart Guest Book</li>
                        <li>Smart Quote</li>
                    </ul>
                </Container>
            </div>

            <div className='right-side col-md-8'>
                <h1>Features of this CSS Personal / General Template</h1>

                <ul>
                    <li>Attractive general or personal web site design using bright colors</li>
                    <li>Optimized, fast-loading and W3C certified valid CSS a HTML code</li>
                    <li>Easy-to-edit Text Links with easy-to-use Drop-down Menus</li>
                    <li>Tableless layout CSS design. All 11 linked HTML pages included</li>
                    <li>Cross Browser Compatible - <span className='text-warning'>Tested for IE 5+, Netscape 6+, Opera 7+, Firefox 1.0+</span></li>
                    <li>Designed to stretch and fit all resolutions (000 x 600 and higher) </li>
                </ul>

                <br />

                <h3><span className='text-warning'>Buy Now</span> for Only $59.95! <a href="">Add to Cart</a> </h3>

                <br /><br />

                <p>Smart Webby offers professional web templates at affordable prices. Choose from a variety of high quality website designs to find the perfect template for your line of business. <a href="">More temnlates from smartwebbv.com</a>  </p>
            </div>
        </section>
    );
};

export default LowerPart;