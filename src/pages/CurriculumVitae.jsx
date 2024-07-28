import { useState, useEffect } from "react";
import { InfoCard } from "../components/InfoCard/InfoCard";
import { NavbarCv } from "../components/NavbarCv/NavbarCv";
import javier from '../../src/assets/img/javier-diez.jpeg'
import linkedin from '../../src/assets/img/linkedin.webp'
import github from '../../src/assets/img/github.svg'
import maletin from '../../src/assets/img/maletin.png'
import estudios from '../../src/assets/img/estudios.png'
import conocimiento from '../../src/assets/img/conocimiento.png'
import proyectos from '../../src/assets/img/proyectos.png'
import { FooterCv } from "../components/FooterCv/FooterCv";
import { PersonalCard } from "../components/PersonalCard/PersonalCard";

export const CurriculumVitae = () => {

    return (
        <>
            <NavbarCv claseTodo={'titulos-cv-style-todo'} />
            <div className="row d-flex flex-wrap justify-content-center">
                <div className="col-12 col-lg-6">
                    <InfoCard title={"Quién soy - Javier Diez"} url={"https://www.javierdiez.netlify.app"} urlTitle={"Quién soy"} img={javier} description={"Te cuento brevemente quién soy y cuáles son mis intereses principales. Te recomiendo primero visitar esta sección para que sepas quién está detrás de todo lo que vas a leer."} LinkTo={'/quien-soy'} />
                    <InfoCard title={"Experiencia - Empleos"} url={"https://www.javierdiez.netlify.app"} urlTitle={"Experiencia"} img={maletin} description={"Conoce mi experiencia laboral a lo largo de toda mi vida. Podrás conocer donde trabajé, cuánto tiempo y cuáles fueron mis tareas principales. Todos mis empleos están relacionados al mundo IT."} LinkTo={'/experiencia'}/>
                    <InfoCard title={"Educación - Cursos"} url={"https://www.javierdiez.netlify.app"} urlTitle={"Educación"} img={estudios} description={"Me encanta estudiar y seguir aprendiendo cosas nuevas todos los días. En esta sección te cuento todo lo que aprendí y estudié a lo largo de mi vida profesional. Títulos universitarios, cursos y bootcamps."} LinkTo={'/educacion'} />
                    <InfoCard title={"Conocimientos - Aptitudes"} url={"https://www.javierdiez.netlify.app"} urlTitle={"Conocimientos y Aptitudes"} img={conocimiento} description={"El estudio y el aprendizaje continuo me ha dado la oportunidad de desarrollar muchas habilidades, herramientas y programas que son de gran utilidad en el mundo actual. Te cuento todo lo que sé usar en esta sección."} LinkTo={'/conocimientos'}/>
                    <InfoCard title={"Proyectos"} url={"https://www.javierdiez.netlify.app"} urlTitle={"Proyectos"} img={proyectos} description={"Para aprender hay que hacer, y así hice durante mi etapa de estudio y aprendizaje. Te muestro todos los proyectos que fui desarrollando a lo largo de mi crecimiento como programador. Algunos más simples, otros más complejos, pero todos hechos con dedicación y cariño."} LinkTo={'/proyectos'}/>
                    <InfoCard title={"Javier Diez - Linkedin"} LinkTo={"https://www.linkedin.com/in/javier-diezz/"} url={"https://www.linkedin.com/javierdiezz"} urlTitle={"Linkedin"} img={linkedin} description={"En Linkedin podrás encontrar, además de todo mi curriculum, las publicaciones que voy haciendo regularmente comentando mis progresos, proyectos y novedades. No dejes de visitar mi perfil!"}/>
                    <InfoCard title={"Javier Diez - Github"} LinkTo={"https://www.github.com/javidiez"} url={"https://www.github.com/javidiez"} urlTitle={"Github"} img={github} description={"En Github encontrarás todos mis proyectos, divididos en repositorios y en cada uno, carpetas y archivos que fueron utilizados para desarrollarlos. Te invito a revisarlos."} />
                </div>
                <div className="col-12 col-lg-3 mt-4">
                    <PersonalCard />
                </div>
            </div>
            <FooterCv />
        </>
    )
}

