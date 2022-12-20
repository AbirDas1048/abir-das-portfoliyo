import React from 'react';
import { Link } from 'react-router-dom';

const Project = ({ project }) => {
    return (
        <div className="card bg-neutral shadow-xl">
            <figure className="px-10 pt-10">
                <img src={project.image} alt="Shoes" className="rounded-xl h-[350px]" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-white">{project.name}</h2>
                <p className='text-left'>{project.description}</p>
                <div className="card-actions">
                    <Link to={`/projects/${project.id}`} className="btn btn-primary btn-sm">Details</Link>
                </div>
            </div>
        </div>
    );
};

export default Project;