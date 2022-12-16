import React from 'react';
import { Link } from 'react-router-dom';
import resume from '../../assets/Resume of Abir Das.pdf';

const Navbar = () => {
    const menuItems =
        <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Me</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><label htmlFor="contact-modal">Contact Me</label></li>
        </>
    return (
        // <div className="navbar bg-base-100">
        <>
            <div className="navbar sticky top-0 shadow-sm flex justify-between bg-base-100 text-base-content bg-opacity-90 z-30">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                menuItems
                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl" href='/' alt="">Abir Das</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            menuItems
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn" href={resume} rel="noopener noreferrer" target="_blank" alt="">My Resume</a>
                </div>
            </div >
            {/* The button to open modal */}
            {/* <label htmlFor="my-modal-3" className="btn">open modal</label> */}

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="contact-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="contact-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <h2 className='text-3xl text-center'>Contact with me</h2>
                    <form action="https://formspree.io/f/xwkzgdba" method="post" className='grid px-10 mx-auto mt-2'>

                        <div className="form-control w-full my-2">
                            {/* <label className="label"> <span className="label-text">Your Name</span></label> */}
                            <input type="text" id="name" name="name" placeholder="Your Name*" required className="input input-bordered w-full" />
                        </div>
                        {/* <br /> */}

                        <div className="form-control w-full my-2">
                            {/* <label className="label"> <span className="label-text">Product Name</span></label> */}
                            <input type="text" id="email" name="email" placeholder="Your Email*" required className="input input-bordered w-full" />
                        </div>

                        <div className="form-control w-full my-2">
                            {/* <label className="label"> <span className="label-text">Description</span></label> */}
                            <textarea id="message" name="message" placeholder="Your Message*" required className="textarea textarea-bordered" rows="5" cols="10"></textarea>
                        </div>

                        <div className="text-center">
                            <input className='btn btn-primary w-full my-4 max-w-md ' value="Send Mail" type="submit" />
                        </div>


                    </form>
                </div>
            </div>
        </>

    );
};

export default Navbar;