import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

export const Footer = () => {
    return (
        <>
            <div className='footer-block '>
                <div className='px-4 py-3'>
                    <p>España</p>
                </div>
                <hr />
                <div className='d-flex justify-content-between py-3 flex-wrap'>
                    <div className='px-4 d-flex gap-4'>
                        <Link className='footer-links' to="">Experiencia</Link>
                        <Link className='footer-links' to="">Estudios</Link>
                        <Link className='footer-links' to="">Contacto</Link>
                    </div>
                    <div className='px-4 d-flex gap-4 flex-wrap'>
                        <Link className='footer-links' to="">Quién soy</Link>
                        <Link className='footer-links' to="">Intereses</Link>
                        <Link className='footer-links' to="">Habilidades</Link>
                    </div>
                </div>
            </div>


        </>
    )
}
