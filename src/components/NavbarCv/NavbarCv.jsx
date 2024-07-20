import React from "react"
import googleLogo from '../../assets/img/googlelogo.png'
import { SearchBoxCv } from "../SearchBoxCv/SearchBoxCv"
import javier from '../../assets/img/javier-diez.jpeg'
import './NavbarCv.css'
import { Link } from "react-router-dom"

export const NavbarCv = () => {
    return (
        <>
            <div className="d-flex justify-content-between align-items-center container mt-5">
                <div className="d-flex align-items-center">
                    <div>
                        <Link to="/home"><img className="google-logo" src={googleLogo} /></Link>
                    </div>
                    <div>
                        <SearchBoxCv />
                    </div>
                </div>
                <div className="d-flex align-items-center gap-3">
                    <span className="material-symbols-outlined">
                        apps
                    </span>
                    <img className='rounded-circle navbar-profile-photo' src={javier} />
                </div>

            </div>
            <div className="titulos-cv container">
                <div className="d-flex gap-4">
                    <Link className="titulos-cv-style" to="">Todo</Link>
                    <Link className="titulos-cv-style" to="">Experiencia</Link>
                    <Link className="titulos-cv-style" to="">Estudios</Link>
                    <Link className="titulos-cv-style" to="">Cursos</Link>
                    <Link className="titulos-cv-style" to="">Intereses</Link>
                    <Link className="titulos-cv-style" to="">Información</Link>
                    <Link className="titulos-cv-style" to="">Contacto</Link>
                </div>
            </div>
            <hr/>
        </>
    )
}
