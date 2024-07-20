import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"
import javier from '../../assets/img/javier-diez.jpeg'

export const Navbar = () => {
    return (
        <div className='d-flex justify-content-between mt-4 px-4 navbar-style'>
            <div className='gap-4 navbar-left'>
                <Link className='nabvar-links' to=''>Sobre Javier</Link>
                <Link className='nabvar-links' to=''>Proyectos</Link>
            </div>
            <div className='d-flex gap-4 align-items-center navbar-right'>
                <a className='nabvar-links' target='_blank' href='https://github.com/javidiez'>Github</a>
                <a className='nabvar-links' target='_blank' href='https://www.linkedin.com/in/javier-diezz/'>Linkedin</a>
                <span className="material-symbols-outlined">
                    apps
                </span>
                <img className='rounded-circle navbar-profile-photo' src={javier} />
            </div>


        </div>
    )
}
