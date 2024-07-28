
import { NavbarCv } from "../components/NavbarCv/NavbarCv";
import { FooterCv } from "../components/FooterCv/FooterCv";
import { InfoCard } from "../components/InfoCard/InfoCard";
import google from '../../src/assets/img/google.jpeg'
import wordpress from '../../src/assets/img/wordpress.jpeg'
import odoo from '../../src/assets/img/odoo.jpeg'
import dev from '../../src/assets/img/dev.png'
import office from '../../src/assets/img/office.jpeg'
import git from '../../src/assets/img/git.png'
import extras from '../../src/assets/img/extras.png'


export const Conocimientos = () => {

    return (
        <>
            <NavbarCv claseConoc={'titulos-cv-style-conoc'} />
            <div className="container row d-flex flex-wrap justify-content-center">
                <div className="col-12 col-sm-8">
                    <InfoCard title={'Desarrollo web'} url={"Múltiples lenguajes"} urlTitle={"Fullstack Developer"} img={dev} description={"Me encanta el desarrollo web, por lo que dediqué tiempo a formarme en los siguientes lenguajes: HTML, CSS, Bootstrap, Javascript, React, Python, Flask, SQL."} />

                    <InfoCard title={'Odoo ERP'} url={"Sistema de gestión empresarial"} urlTitle={"Consultoría y gestión de proyectos"} img={odoo} description={"Tengo más de 10 años de experiencia en el uso e implantación de Odoo en todo tipo de empresas. Siendo Consultor, Project Manager y Líder del equipo de Consultores, pude desarrollarme y volverme experto en este sistema."} />

                    <InfoCard title={'Git - Github - Gitlab'} url={"Manejo de versiones"} urlTitle={"Git"} img={git} description={"En las empresas que trabajé, por supuesto que trabajaban con la tecnología Git, y en algunas he trabajado con Github y en otras con Gitlab, brindadome así un conocimiento amplio de las distintas herramientas que se ofrecen en el mercado respecto a este punto."} />

                    <InfoCard title={'Google Apps'} url={"Aplicaciones de Google"} urlTitle={"Google"} img={google} description={"Debido a los proyectos web que fui desarrollando a lo largo de mi vida, fui aprendiendo y trabajando con distintas herramientas de Google, tales como: Google Analytics, Google Adsense, Google Play Console, Google Search Console, Google Drive, Gmail, Google Calendar, Blogger."} />

                    <InfoCard title={'Wordpress'} url={"Gestión de contenido"} urlTitle={"CMS"} img={wordpress} description={"Una de las plataformas principales para la publicación de contenido, desarrollo web y creación de blogs. Tuve algunos proyectos creados bajo este CMS, lo que me permitieron conocer las bases de su funcionamiento y sus extensiones."} />

                    <InfoCard title={'Paquete Office'} url={"Microsoft Office"} urlTitle={"Herramientas de trabajo"} img={office} description={"Tengo los conocimientos fundamentales para trabajar con los programas que integran este paquete, principalmente Word, Excel y PowerPoint."} />

                    <InfoCard title={'Conocimientos extras'} url={"Conocimientos adicionales"} urlTitle={"Es bueno saber"} img={extras} description={"Detallo aquí otros conocimientos que tengo: Ubuntu, terminal/consola, Windows, pgAdmin, chatGPT, Copilot, Gemini, Slack, SEO, Hootsuite, Netlify, QuickDBD, OBS Studio, trading, TradingView."} />

                </div>
            </div>
            <FooterCv />
        </>
    )
}
