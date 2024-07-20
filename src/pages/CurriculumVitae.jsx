import { InfoCard } from "../components/InfoCard/InfoCard";
import { NavbarCv } from "../components/NavbarCv/NavbarCv";
import javier from '../../src/assets/img/javier-diez.jpeg'
import linkedin from '../../src/assets/img/linkedin.webp'
import github from '../../src/assets/img/github.svg'
import maletin from '../../src/assets/img/maletin.png'
import estudios from '../../src/assets/img/estudios.png'
import conocimiento from '../../src/assets/img/conocimiento.png'
import proyectos from '../../src/assets/img/proyectos.png'

export const CurriculumVitae = () => {
    return (
        <>
            <NavbarCv />
            <div className="d-flex justify-content-evenly">
                <div className="container">
                    <InfoCard title={"Quién soy - Javier Diez"} url={"https://www.javierdiez.netlify.app/javierdiez"} urlTitle={"Quién soy"} img={javier} description={"Te cuento brevemente quién soy y cuáles son mis intereses principales. Te recomiendo primero visitar esta sección para que sepas quién está detrás de todo lo que vas a leer."} />
                    <InfoCard title={"Experiencia - Empleos"} url={"https://www.linkedin.com/javierdiezz"} urlTitle={"Experiencia"} img={maletin} description={"Te cuento mi experiencia laboral a lo largo de toda mi vida. Podrás conocer donde trabajé, cuánto tiempo y cuáles fueron mis tareas principales. Todos mis empleos están relacionados al mundo IT."} />
                    <InfoCard title={"Educación - Cursos"} url={"https://www.javierdiez.netlify.app/educacion"} urlTitle={"Educación"} img={estudios} description={"Me encanta estudiar y seguir aprendiendo cosas nuevas todos los días. En esta sección te cuento todo lo que aprendí y estudié a lo largo de mi vida profesional. Títulos universitarios, cursos y bootcamps."} />
                    <InfoCard title={"Conocimientos - Aptitudes"} url={"https://www.javierdiez.netlify.app/conocimientos"} urlTitle={"Conocimientos y Aptitudes"} img={conocimiento} description={"El estudio y el aprendizaje continuo me ha dado la oportunidad de desarrollar muchas habilidades, herramientas y programas que son de gran utilidad en el mundo actual. Te cuento todo lo que sé usar en esta sección."} />
                    <InfoCard title={"Proyectos"} url={"https://www.javierdiez.netlify.app/proyectos"} urlTitle={"Proyectos"} img={proyectos} description={"Para aprender hay que hacer, y así hice durante mi etapa de estudio y aprendizaje. Te muestro todos los proyectos que fui desarrollando a lo largo de mi crecimiento como programador. Algunos más simples, otros más complejos, pero todos hechos con dedicación y cariño."} />
                    <InfoCard title={"Javier Diez - Linkedin"} url={"https://www.linkedin.com/javierdiezz"} urlTitle={"Linkedin"} img={linkedin} description={"En Linkedin podrás encontrar, además de todo mi curriculum, las publicaciones que voy haciendo regularmente comentando mis progresos, proyectos y novedades. No dejes de visitar mi perfil!"} />
                    <InfoCard title={"Javier Diez - Github"} url={"https://www.github.com/javidiez"} urlTitle={"Github"} img={github} description={"En Github encontrarás todos mis proyectos, divididos en repositorios y en cada uno, carpetas y archivos que fueron utilizados para desarrollarlos. Te invito a revisarlos."} />
                </div>
                <div>

                </div>
            </div>
        </>
    )
}

