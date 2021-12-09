import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <section className="section footer bg-dark text-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h6>Company Info</h6>
                        <hr />
                        <p className="text-white">
                            simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text.
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h6>Quick Links</h6>
                        <hr />
                        <div><Link to="/">Home</Link></div>
                        <div><Link to="/about">About</Link></div>
                        <div><Link to="/contact">Contact</Link></div>
                        <div><Link to="#">Blog</Link></div>
                    </div>
                    <div className="col-md-4">
                        <h6>Contact Information</h6>
                        <hr />
                        <div><p className="text-white mb-1">#22 Coventry UK</p></div>
                        <div><p className="text-white mb-1">+4475432...</p></div>
                        <div><p className="text-white mb-1">+4475432...</p></div>
                        <div><p className="text-white mb-1">email@domain.com</p></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer
