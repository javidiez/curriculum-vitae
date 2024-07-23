import React, { useEffect, useState } from "react"
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

    const [checked, setChecked] = useState(
        localStorage.getItem("theme") === "dark" ? true : false
    );

    /**
     * Cada vez que el estado checked cambie, actualiza la propiedad
     * data-theme en el HTML para que use el tema que estamos almacenando
     * en el localStorage
     */
    useEffect(() => {
        document
            .getElementsByTagName("HTML")[0]
            .setAttribute("data-theme", localStorage.getItem("theme"));
    }, [checked]);

    /**
     * Actualiza el estado checked y el contenido de nuestro objeto
     * theme en el localStorage basados en el checkbox
     */
    const toggleThemeChange = () => {
        if (checked === false) {
            localStorage.setItem("theme", "dark");
            setChecked(true);
        } else {
            localStorage.setItem("theme", "light");
            setChecked(false);
        }
    };


    return (
        <div className="container-fluid row">
            <div className="text-center ">
            <Link to="/home" className="text-decoration-none javier-logo-mobile">
                            <span className="google-blue">J</span>
                            <span className="google-red">a</span>
                            <span className="google-yellow">v</span>
                            <span className="google-blue">i</span>
                            <span className="google-green">e</span>
                            <span className="google-red">r</span>
                        </Link>
            </div>
            <div className="d-flex justify-content-between align-items-center container mt-4 col-12 col-sm-9">

                <div className="d-flex align-items-center">
                    <div>
                        <Link to="/home" className="text-decoration-none javier-logo">
                            <span className="google-blue">J</span>
                            <span className="google-red">a</span>
                            <span className="google-yellow">v</span>
                            <span className="google-blue">i</span>
                            <span className="google-green">e</span>
                            <span className="google-red">r</span>
                        </Link>
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
                   <label>
                    <input
                    type="checkbox"
                    defaultChecked={checked}
                    onChange={() => toggleThemeChange()}
                    style={{display:"none"}}
                />
                    <span class="material-symbols-outlined sun-icon-cv">
                        brightness_4
                    </span>
                    <span class="material-symbols-outlined sun-icon-mobile">
                        brightness_4
                    </span>
            </label>
                    
                </div>

            </div>
            <div className="titulos-cv container col-12 col-lg-9">
                <div className="swiper-container-paginas">
                    <div className="swiper-wrapper-paginas scrollableDiv-paginas d-flex">


                        <div className='swiper-slide-paginas ps-4 pt-3 fade-in'>
                            <div className="d-flex gap-4">
                                <Link className="titulos-cv-style-todo text-decoration-none" to="/curriculum_vitae">Todo</Link>
                                <Link className="titulos-cv-style" to="">Experiencia</Link>
                                <Link className="titulos-cv-style" to="">Educación</Link>
                                <Link className="titulos-cv-style" to="">Conocimientos</Link>
                                <Link className="titulos-cv-style" to="">Proyectos</Link>
                                <Link className="titulos-cv-style" to="">Linkedin</Link>
                                <Link className="titulos-cv-style" to="">Github</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    )
}
