import React, { useEffect } from "react"
import javierLogo from '../../assets/img/javier-logo.png'
import { SearchBoxCv } from "../SearchBoxCv/SearchBoxCv"
import javier from '../../assets/img/javier-diez.jpeg'
import './NavbarCv.css'
import { Link } from "react-router-dom"
import Swiper from "swiper"

export const NavbarCv = () => {

    useEffect(() => {
        const swiper = new Swiper('.swiper-container', {
            slidesPerView: 'auto', // Mostrará tantos slides como quepan en el contenedor
            spaceBetween: 20, // Espacio entre las tarjeta

        });
    }, []);

    return (
        <>
            <div className="text-center ">
                <Link to="/home"><img className="javier-logo-mobile" src={javierLogo} /></Link>
            </div>
            <div className="d-flex justify-content-between align-items-center container mt-4">
                
                <div className="d-flex align-items-center">
                <div>
                    <Link to="/home"><img className="javier-logo" src={javierLogo} /></Link>
                </div>
                    <div>
                        <SearchBoxCv />
                    </div>
                </div>
                <div className="d-flex align-items-center gap-3 icon-photo-cv">
                    <span className="material-symbols-outlined">
                        apps
                    </span>
                    <img className='rounded-circle navbar-profile-photo' src={javier} />
                </div>

            </div>
            <div className="titulos-cv container">
                <div className="swiper-container-paginas">
                    <div className="swiper-wrapper-paginas scrollableDiv-paginas d-flex">


                        <div className='swiper-slide-paginas ps-4 pt-3 fade-in'>
                            <div className="d-flex gap-4">
                                <Link className="titulos-cv-style-todo text-decoration-none" to="/curriculum_vitae">Todo</Link>
                                <Link className="titulos-cv-style" to="">Experiencia</Link>
                                <Link className="titulos-cv-style" to="">Estudios</Link>
                                <Link className="titulos-cv-style" to="">Cursos</Link>
                                <Link className="titulos-cv-style" to="">Intereses</Link>
                                <Link className="titulos-cv-style" to="">Información</Link>
                                <Link className="titulos-cv-style" to="">Contacto</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}
