import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer footer-center mt-5 p-4 bg-neutral text-base-content rounded">
            <div className="grid grid-flow-col gap-4">
                <Link to="/">Home</Link>
                <Link to="/about">About Me</Link>
                <Link to="/blog">Blog</Link>
            </div>

            <div>
                <div className="grid grid-flow-col gap-4">
                    <a href="https://www.linkedin.com/in/abir-das-6b0996121/" rel="noopener noreferrer" target="_blank" ><FaLinkedinIn className='w-6 h-6'></FaLinkedinIn></a>
                    <a href="https://github.com/AbirDas1048/" rel="noopener noreferrer" target="_blank" ><FaGithub className='w-6 h-6'></FaGithub></a>
                    <a href="https://www.facebook.com/abir.das.421/" rel="noopener noreferrer" target="_blank" ><FaFacebookF className='w-6 h-6'></FaFacebookF></a>
                    <a href="https://www.instagram.com/abir_das_1048/" rel="noopener noreferrer" target="_blank" ><FaInstagram className='w-6 h-6'></FaInstagram></a>
                </div>
            </div>
            <div>
                <p>Copyright © 2022 - Developed By Abir Das</p>
            </div>
        </footer>
    );
};

export default Footer;