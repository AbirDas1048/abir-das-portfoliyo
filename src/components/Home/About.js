import React from 'react';
import abir3 from '../../assets/abir3.JPG';

const About = () => {
    return (
        <div className='w-5/6 mx-auto'>

            <section id='about' className='my-5'>
                <h3 className='text-3xl text-center text-white'>About Myself</h3>
                <p className='text-xl p-5'>To establish a dynamic carrier through challenging job opportunities to provide transparent and quality services to acquire adequate knowledge to establish a career, where my acquired skills and innate abilities can be most effectively utilized.</p>
            </section>

            <section id='experience' className='my-5 text-center'>
                <h3 className='text-3xl text-white'>Experience</h3>
                <div className="steps steps-vertical p-5">

                    <div className="step step-secondary mb-3">
                        <div className='text-left'>
                            <p className='text-lg text-white'>Software Developer</p>
                            <p className='text-md'><span className='text-sm'>at</span> Devenport</p>
                            <p className='text-sm'>December, 2022 - Present</p>
                        </div>
                    </div>
                    <div className="step step-primary mb-3">
                        <div className='text-left'>
                            <p className='text-lg text-white'>Software Engineer</p>
                            <p className='text-md'><span className='text-sm'>at</span> W3xplorers Bangladesh</p>
                            <p className='text-sm'>February, 2021 - November, 2022</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id='educational-background' className='my-5 text-center'>
                <h3 className='text-3xl text-white'>Educational Background</h3>
                <div className="hero mt-5">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={abir3} className="w-1/4 rounded-lg shadow-2xl" alt='' />
                        <div className='text-left'>
                            <h1 className="text-xl font-bold">Graduated From</h1>
                            <p className="text-lg">Premier University</p>
                            <p className='text-md'>Dept. of Computer Science & Engineering</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;