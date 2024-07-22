import React from "react"
import './PersonalCard.css'
import { Link } from "react-router-dom"
import javier from '../../assets/img/javier-diez.jpeg'
import logoLikedin from '../../assets/img/logo-linkedin.png'
import logoGithub from '../../assets/img/logo-github.webp'
import logoX from '../../assets/img/logo-x.avif'

export const PersonalCard = () => {
    return (
        <div className="personal-card container px-4">
            <div>
                <p className="profile-name pb-2">Javier Diez</p>
                <div className="d-flex justify-content-between">
                    <div className="d-flex">
                        <p className="text-secondary pe-2">Programador FullStack</p>
                        <span class="material-symbols-outlined">
                            more_vert
                        </span>
                    </div>
                    <div>
                        <Link to="quien_soy">
                            <span class="material-symbols-outlined arrow-icon">
                                chevron_right
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="photo-block">
                <img src={javier} alt="javier-photo" className="rounded mt-3 img-fluid" />
            </div>
            <div className="pb-4">
                <p className="pt-4 pb-3 profile-description">Javier Diez es un programador FullStack argentino que vive en Sevilla, España. Desde hace 12 años que trabaja en el mundo IT pasando por distintos puestos tal como Account Manager, Help Desk Analyst, Project Manager, Consultant Team Leader y Service Manager. Es apasionado de la programación, la tecnología y los deportes, le gusta viajar y tiene como meta ser un gran programador.</p>
                <p className="pb-2"><span className="fw-bold">Nacimiento:</span> 02 de abril de 1992 (32 años), <a href="https://es.wikipedia.org/wiki/Rosario_(Argentina)" target="_blank" className="text-decoration-none">Rosario, Santa Fe, Argentina</a></p>
                <p className="pb-2"><span className="fw-bold">Títulos:</span> Analista de Sistemas, Analista Programador, Programador FullStack</p>
                <p className="pb-2"><span className="fw-bold">Habilidades blandas:</span> Comunicación efectiva, trabajo en equipo, resolución de problemas, adaptabilidad y flexibilidad.</p>
                <p className="pb-2"><span className="fw-bold">Idiomas:</span> Español (nativo) - Inglés (intermedio)</p>
                <p className="pb-2"><span className="fw-bold">Intereses:</span> Programación, tecnología, series, películas, fútbol, pádel, viajes</p>
                <p className="pb-2"><span className="fw-bold">Frase favorita:</span> "Hazlo, y si te da miedo, hazlo con miedo."</p>
            </div>
            <div className="perfiles">
                <p className="fs-2 pb-2">Perfiles</p>
                <div className="d-flex gap-3">
                    <a target="_blank" href="https://www.linkedin.com/in/javier-diezz/" rel="noopener noreferrer" title="Linkedin"><img className="profile-icons" src={logoLikedin}/></a>
                    <a target="_blank" href="https://github.com/javidiez" rel="noopener noreferrer" title="Github"><img className="profile-icons" src={logoGithub}/></a>
                    <a target="_blank" href="https://x.com/jeydi_dev" rel="noopener noreferrer" title="X"><img className="profile-icons" src={logoX}/></a>
                </div>
            </div>
        </div>
    )
}
