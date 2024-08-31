
import { NavbarCv } from "../components/NavbarCv/NavbarCv";
import { FooterCv } from "../components/FooterCv/FooterCv";
import { InfoCard } from "../components/InfoCard/InfoCard";
import jj from '../../src/assets/img/jj.png'
import geek from '../../src/assets/img/geek.jpeg'
import dalto from '../../src/assets/img/dalto.png'
import fcc from '../../src/assets/img/fcc.jpeg'
import udemy from '../../src/assets/img/udemy.jpeg'
import edIt from '../../src/assets/img/edit.jpeg'
import unr from '../../src/assets/img/unr.jpeg'


export const Educacion = () => {

    return (
        <>
            <NavbarCv claseEdu={'titulos-cv-style-edu'}/>
            <div className="container row d-flex flex-wrap justify-content-center">
                <div className="col-12 col-sm-8">
                    <InfoCard title={'Analista de Sistemas de la Computación'} url={"2012 - 2015"} urlTitle={"Inst. Superior J.J. Urquiza"} img={jj} description={"La mejor decisión que pude haber tomado es estudiar lo que estudié. Me formé para adentrarme en un mundo apasionante y en constante evolución. Aprendí las bases de las tecnologías, sistemas y computadoras para en los siguientes años, poner todo ello en práctica. (Ubicación: Rosario, Argentina)"}/>

                    <InfoCard title={'Analista Programador'} url={"2012 - 2013"} urlTitle={"Inst. Superior J.J. Urquiza"} img={jj} description={"Título intermedio que entregaba la institución. Preparados para salir al mundo laboral como programador, dándonos los conceptos fundamentales y la lógica del desarrollo web. (Ubicación: Rosario, Argentina)"}/>

                    <InfoCard title={'Fullstack Developer'} url={"2024"} urlTitle={"4Geeks Academy"} img={geek} description={"Bootcamp completo sobre el desarrollo FullStack. Tocando las tecnologías prinicipales tales como HTML, CSS, Bootstrap, Javascript, React, Jest, Python, Flask y SQLAlchemy. (Ubicación: Sevilla, España)"}/>

                    <InfoCard title={'Javascript'} url={"2024"} urlTitle={"freeCodeCamp"} img={fcc} description={"Curso inicial de Javascript, repasando los fundamentos de este lenguaje y realizando algunos proyectos prácticos que pueden encontrar en mi Github. (Ubicación: Sevilla, España)"}/>

                    <InfoCard title={'Bootstrap'} url={"2024"} urlTitle={"freeCodeCamp"} img={fcc} description={"Curso sobre este framework para estilizar y crear sitios webs responsivos de una forma rápida y sencilla. Una tecnología que aplico a todos mis proyectos y que me encanta por todas las herramientas que ofrece. (Ubicación: Sevilla, España)"}/>

                    <InfoCard title={'Python'} url={"2024"} urlTitle={"Soy Dalto"} img={dalto} description={"Curso inicial de Python, repasando los aspectos principales de este lenguaje. También se repasó el uso de Pandas para la gestión de archivos CSV. (Ubicación: Sevilla, España)"}/>

                    <InfoCard title={'Javascript - Nivel 1'} url={"2024"} urlTitle={"Soy Dalto"} img={dalto} description={"Curso inicial de Javascript, repasando los fundamentos de este lenguaje y realizando algunos proyectos prácticos que pueden encontrar en mi Github. (Ubicación: Sevilla, España)"}/>

                    <InfoCard title={'HTML5 - CSS3'} url={"2024"} urlTitle={"Soy Dalto"} img={dalto} description={"Curso completo donde se repasa en detalle cada una de las características de HTML y CSS. se hace incapié en el uso de todas las etiquetas y todos los estilos que pueden combinarse entre estos dos 'lenguajes' para crear sitios web atractivos y potentes. (Ubicación: Sevilla, España)"}/>

                    <InfoCard title={'FrontEnd Web Development'} url={"2021 - 2022"} urlTitle={"Udemy"} img={udemy} description={"Curso sobre desarrollo web donde, además de mostrar el funcionamiento de HTML y CSS, se agregan las utilidades del lenguaje Javascript. (Ubicación: Sevilla, España)"}/>

                    <InfoCard title={'Excel Fundamentos'} url={"2018"} urlTitle={"EducaciónIT"} img={edIt} description={"Curso para no perder de vistas los usos básicos y fundamentales de esta herramienta tan potente como es Excel. (Ubicación: Sevilla, España)"}/>

                    <InfoCard title={'Licenciatura en Comunicación Social'} url={"2010 - 2012"} urlTitle={"Universidad Nacional Rosario"} img={unr} description={"Carrera universtaria, destinada a la investigación y creación de contenido, tanto escrito como radial. También se integraban temas como el marketing y publicadad. No finalizada. (Ubicación: Rosario, Argentina)"}/>

            </div>
            </div>
            <FooterCv />
        </>
    )
}
