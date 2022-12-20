import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Slider from "react-slick";
import { FaGlobe, FaCode, FaServer } from "react-icons/fa";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-photo-view/dist/react-photo-view.css';


const Projects = () => {
    const [project] = useLoaderData();
    const { name, image, description, screenshots, liveSiteLink, githubClientSiteLink, githubServerSiteLink, mainFeature } = project;


    var settings = {
        className: "center",
        centerMode: true,
        centerPadding: "60px",
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        // adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='w-5/6 mx-auto'>

            <section className='my-5'>
                <h3 className='text-3xl text-center text-white'>Project Details</h3>
                {/* <p className='text-xl p-5'>{ }</p> */}
                <div className="hero min-h-screen bg-base-200 mt-5">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={image} className="max-w-sm rounded-lg shadow-2xl sm:block hidden" alt='' />
                        <div>
                            <h1 className="text-5xl font-bold">{name}</h1>
                            <p className="py-6">{description}</p>
                            <p className='text-md underline'>Links</p>
                            <div className='flex my-2'>
                                {
                                    liveSiteLink && <a href={liveSiteLink} rel="noopener noreferrer" target="_blank" title='Live Site Link'><FaGlobe className='w-6 h-6 mr-2'></FaGlobe></a>
                                }
                                {
                                    githubClientSiteLink && <a href={githubClientSiteLink} rel="noopener noreferrer" target="_blank" title='Code Client Site Link'><FaCode className='w-6 h-6  mr-2'></FaCode></a>
                                }
                                {
                                    githubServerSiteLink && <a href={githubServerSiteLink} rel="noopener noreferrer" target="_blank" title='Code Server Site Link'><FaServer className='w-6 h-6 mr-2'></FaServer></a>
                                }

                            </div>

                            <p className='text-md underline my-2'>Main Features</p>
                            <ul style={{ listStyleType: "disc", margin: "0 50px" }}>
                                {
                                    mainFeature && mainFeature.map((feature, idx) => <li key={idx}>{feature.title}</li>)
                                }
                            </ul>


                        </div>
                    </div>
                </div>
                <div className='my-5'>
                    <h2 className='text-xl my-5 text-center'>Screenshots</h2>


                    <PhotoProvider>
                        <Slider {...settings}>

                            {
                                screenshots.map(screenshot =>
                                    <PhotoView key={screenshot.ss_id} src={screenshot.ss}>
                                        <div key={screenshot.ss_id} className="px-5">

                                            <img src={screenshot.ss} alt="" className='w-full cursor-pointer h-[150px]' />

                                            {/* <img src={screenshot.ss} alt="" className='w-full' /> */}
                                            <p className='text-center'>{screenshot.caption}</p>
                                        </div>
                                    </PhotoView>)
                            }

                        </Slider>
                    </PhotoProvider>

                    {/* <PhotoProvider>
                        <div className="foo">
                            {images.map((item, index) => (
                                <PhotoView key={index} src={item}>
                                    <img src={item} alt="" />
                                </PhotoView>
                            ))}
                        </div>
                    </PhotoProvider> */}
                </div>
            </section >


        </div >
    );
};

export default Projects;