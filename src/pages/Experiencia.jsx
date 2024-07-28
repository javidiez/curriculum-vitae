
import { NavbarCv } from "../components/NavbarCv/NavbarCv";
import { FooterCv } from "../components/FooterCv/FooterCv";
import { InfoCard } from "../components/InfoCard/InfoCard";
import fl from '../../src/assets/img/fl-logo.jpeg'
import gt from '../../src/assets/img/gt-logo.jpeg'
import adhoc from '../../src/assets/img/adhoc_logo.jpeg'
import bt from '../../src/assets/img/bt-logo.jpeg'
import tm from '../../src/assets/img/tm-logo.jpeg'
import manos from '../../src/assets/img/manos-logo.jpeg'
import sm from '../../src/assets/img/sm-logo.jpeg'


export const Experiencia = () => {

    return (
        <>
            <NavbarCv />
            <div className="container row d-flex flex-wrap justify-content-center">
                <div className="col-12 col-sm-8">
                    <InfoCard title={'Project Manager - Odoo'} url={"jun. 2022 - mar. 2024 (1 año y 10 meses)"} urlTitle={"Factor Libre"} img={fl} description={"En Factor Libre continué mi tarea de dar consultoría a las empresas y gestionar los proyectos, esta vez coordinando con distintas áreas de la empresa para que en equipo las implementaciones avancen. Al mismo tiempo fui parte del equipo de 'Pedidos' donde desarrollábamos mejoras y nuevas funcionalidades para el sector de Compra y Venta de las empresas. (Ubicación: Madrid, España)"}/>

                    <InfoCard title={'Project Business Analyst - Odoo'} url={"sept. 2021 - jun. 2022 (10 meses)"} urlTitle={"GuadalTech Soluciones Tecnológicas"} img={gt} description={"Tras mi regreso a España (Sevilla), GuadalTech me abrió las puertas para que pueda continuar mi carrera como Gestor de proyectos y Consultor, llevando a cabo más de 10 proyectos, desde el proceso comercial haciendo demos a los posibles clientes hasta su formación y soporte post salida a producción. (Ubicación: Sevilla, España)"}/>

                    <InfoCard title={'Consultant Team Leader - Odoo'} url={"sept. 2019 - ago. 2021 (2 años)"} urlTitle={"Adhoc SA"} img={adhoc} description={"En mi segunda temporada en Adhoc, mi rol fue liderar el equipo de Consultores, siendo el responsable de que los proyectos se desarrollen en tiempo y forma, manteniendo reuniones con los consultores y clientes, y así contemplar que todo avance de forma óptima. (Ubicación: Rosario, Argentina)"}/>

                    <InfoCard title={'CEO & Founder'} url={"ago. 2012 - jul. 2021 (9 años)"} urlTitle={"Busco Trabajo"} img={bt} description={"Busco trabajo​ es un espacio para la búsqueda de trabajo como así también para hacer ofertas laborales. Se conforma como una plataforma para juntar a aquellas personas que a través de Internet intentan conectarse con otras de su mismo rubro y poder trabajar juntas. (Ubicación: Rosario, Argentina)"}/>

                    <InfoCard title={'Project Manager - Odoo'} url={"nov. 2018 - abr. 2019 (6 meses)"} urlTitle={"Wedoo (Birtum)"} img={tm} description={"Tras emigrar a Barcelona, Wedoo fue la empresa donde tuve la oportunidad de seguir creciendo como Consultor y gestor de proyectos. Llevando a cabo por completo las implantaciones, visitando a los clientes y dando soporte funcional y técnico, llevé a cabo más de 10 proyectos de todo tipo. (Ubicación: Barcelona, España)"}/>

                    <InfoCard title={'Project Business Analyst - Odoo'} url={"mar. 2014 - oct. 2018 (4 años y 8 meses)"} urlTitle={"Adhoc SA"} img={adhoc} description={"En Adhoc comencé trabajando en el sector de Soporte, recibiendo y resolviendo las indicdencias de los clientes. Luego me desarrollé como Consultor, llevando a cabo más de 50 implementaciones, gestionando los proyectos de principio a fin, capacitando a las empresas en todos los módulos del ERP Odoo. (Ubicación: Rosario, Argentina)"}/>

                    <InfoCard title={'Community Manager'} url={"ago. 2013 - ene. 2015 (1 año y 6 meses)"} urlTitle={"Manos a la Obra"} img={manos} description={"Para Manos a la Obra estuve encargado de la redacción de contenido, diseño del plan fotográfico y documental, y la gestión de mensajería, tanto en Facebook como en Twitter. (Ubicación: Rosario, Argentina)"}/>

                    <InfoCard title={'Community Manager'} url={"jun. 2022 - mar. 2024 (6 meses)"} urlTitle={"Sersomedia"} img={sm} description={"En Sersomedia tiene la tarea de crear contenido para Facebook para distintas compañías de distintos rubros, entre ellas, una revista digital y una empresa de venta de artículos para motos. (Ubicación: Rosario, Argentina)"}/>

                </div>
            </div>
            <FooterCv />
        </>
    )
}
