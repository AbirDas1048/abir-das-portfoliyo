import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer footer-center p-4 bg-neutral text-base-content rounded">
            <div className="grid grid-flow-col gap-4">
                <a className="link link-hover" href='/home'>Home</a>
                <a className="link link-hover" href='#projects'>My Work</a>
                <a className="link link-hover" href='#contact'>Contact</a>
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