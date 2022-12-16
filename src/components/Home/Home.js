import React, { useEffect, useState } from 'react';
import Project from '../Projects/Project';
// import Contact from './Contact';
import Hero from './Hero';

const Home = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('projectsData.json')
            .then(res => res.json())
            .then(data => {
                setProjects(data);
            })
    }, []);

    //console.log(projects);
    return (
        <div>
            <Hero></Hero>
            <section id='projects'>
                <h2 className='text-3xl mt-5 text-center text-white'>My Works</h2>
                <div className='mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-5 '>
                    {
                        projects.map(project => <Project key={project._id} project={project}></Project>)
                    }
                </div>
            </section>


            {/* <Contact></Contact> */}

        </div>
    );
};

export default Home;