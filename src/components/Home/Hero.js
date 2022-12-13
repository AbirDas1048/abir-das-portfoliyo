import React from 'react';
import backgroundImage from '../../assets/backgroundImage.jpg';
import myImage from '../../assets/abir2.jpg';
import { Typewriter } from 'react-simple-typewriter'
import './Hero.css';

const Hero = () => {
    return (
        <section id='hero'>
            <div className="hero min-h-screen relative overflow-hidden" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center ">
                    <div className="max-w-md">
                        <div className="avatar">
                            <div className="w-52 rounded-full">
                                <img src={myImage} alt="myImage" />
                            </div>
                        </div>
                        <h1 className="mb-5 text-5xl font-bold text-white">Abir Das</h1>

                        <p className="mb-16 text-xl font-bold text-neutral-content">I'm a <span>
                            {/* Style will be inherited from the parent element */}
                            <Typewriter
                                words={['Full Stack Web Developer', 'MERN Stack Developer']}
                                loop={5}
                                cursor
                                cursorStyle='_'
                                typeSpeed={100}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span></p>
                        {/* <button className="btn btn-primary absolute bottom-0 m-auto inset-x-0">Get Started</button> */}
                        {/* <a href="#about" className="scroll-downs absolute bottom-0 m-auto">
                            <div className="mousey">
                                <div className="scroller"></div>
                            </div>
                        </a> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;