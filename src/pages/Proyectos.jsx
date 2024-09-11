
import { NavbarCv } from "../components/NavbarCv/NavbarCv";
import { FooterCv } from "../components/FooterCv/FooterCv";
import { InfoCard } from "../components/InfoCard/InfoCard";
import qmc from '../../src/assets/img/qmc.png'
import bonsai from '../../src/assets/img/bonsai.png'
import antenah from '../../src/assets/img/antenah.png'
import sw from '../../src/assets/img/sw.png'
import cripto from '../../src/assets/img/cripto.png'
import cine from '../../src/assets/img/cine.png'
import futbol from '../../src/assets/img/futbol.png'
import frases from '../../src/assets/img/frases.png'
import sisesabe from '../../src/assets/img/sisesabe.png'
import rgb from '../../src/assets/img/rgb.png'
import colors from '../../src/assets/img/colors.png'
import todo from '../../src/assets/img/todo.png'
import money from '../../src/assets/img/money.png'
import ecommerce from '../../src/assets/img/ecommerce.png'
import carefy from '../../src/assets/img/logo-carefy.png'
import domain from '../../src/assets/img/domain.png'
import gympoint from '../../src/assets/img/logo_gym.png'
import { useEffect } from "react";


export const Proyectos = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <NavbarCv claseProy={'titulos-cv-style-proy'} />
            <div className="container row d-flex flex-wrap justify-content-center">
                <div className="col-12 col-sm-8">

                    <InfoCard title={(<><a className="card-title" target="_blank" href='https://sample-service-name-2ja2.onrender.com/'>Carefy</a></>)} url={"HTML, CSS, Bootstrap, Javascript, React, Python, Flask, SQL Alchemy"} urlTitle={"Proyecto final"} img={carefy} description={"Carefy es una plataforma que tiene como objetivo conectar a cuidadores de personas adultas con familias que requieren profesionales para estas tareas. Para entrar al sitio web puede tardar unos minutos."} LinkTo={'https://sample-service-name-2ja2.onrender.com/'} />

                    <InfoCard title={(<><a className="card-title" target="_blank" href='https://github.com/javidiez/gympoint'>Gym Point</a></>)} url={"HTML, CSS, Bootstrap, Javascript, React, Python, Flask, SQL Alchemy"} urlTitle={"App para gimnsasios"} img={gympoint} description={"GymPoint es una aplicación destinada los gimnasios y tiene como objetivo poder ofrecerle a sus clientes una plataforma donde ver sus clases, reservarlas, consultar información del centro y el equipo humano que lo integra."} LinkTo={'https://github.com/javidiez/gympoint'} />

                    <InfoCard title={(<><a className="card-title" target="_blank" href='https://cinelandia.netlify.app/'>Cinelandia</a></>)} url={"HTML, CSS, Bootstrap,  React"} urlTitle={"Películas y series"} img={cine} description={(
                        <>
                            Este proyecto se puede considerar como el que más tiempo y cariño le dediqué. Se trata de una plataforma para buscar películas y series, donde podremos encontrar toda la información relacionada a ellas. Se usa la API de TMDB. También creé la app que está subida a
                            <a className="ps-1" target="_blank" href='https://play.google.com/store/apps/details?id=com.cinelandia.cinelandia'>Google Play</a>.
                        </>
                    )} LinkTo={'https://cinelandia.netlify.app/'} />


                    <InfoCard title={(<><a className="card-title" target="_blank" href='https://criptolandia.netlify.app/'>Criptolandia</a></>)} url={"HTML, CSS, Bootstrap, Javascript"} urlTitle={"Criptomonedas"} img={cripto} description={"Mi primer proyecto usando un API externa, en este caso, la de CoinGecko. En esta plataforma muestro el valor de las principales criptomendas, tendencias, listado de exchangers y empresas que holdean BTC."} LinkTo={'https://criptolandia.netlify.app/'} />

                    <InfoCard title={(<><a className="card-title" target="_blank" href='https://futbolandia.netlify.app/'>Futbolandia</a></>)} url={"HTML, CSS, Bootstrap, Javascript"} urlTitle={"Crea tu equipo"} img={futbol} description={"Desde este sitio web podremos crear nuestro propio equipo de fútbol y situar los jugadores en la cancha. Tendremos equipo titular y suplente para poder así, completar toda nuestra plantilla. No tiene diseño responsivo."} LinkTo={'https://futbolandia.netlify.app/'} />

                    <InfoCard title={(<><a className="card-title" target="_blank" href='https://github.com/javidiez/star-wars-jdiez'>Star Wars</a></>)} url={"HTML, CSS, Bootstrap,  React"} urlTitle={"La Guerra de las Galaxias"} img={sw} description={"Esta página web muestra la información principal de los personajes, vehículos y planetas de Star Wars. Podremos guardar nuestros Favoritos en un listado y borrar los que ya no nos gustan. Utiliza la API de Swapi.tech."} LinkTo={'https://github.com/javidiez/star-wars-jdiez'} />

                    <InfoCard title={(<><a className="card-title" target="_blank" href='https://gastosdiarios.netlify.app/'>Gastos Diarios</a></>)} url={"HTML, CSS, Bootstrap, Javascript"} urlTitle={"Gestión de gastos/ingresos"} img={money} description={"Con esta plataforma podremos dar de alta nuestros ingresos y nuestros gastos, y estos se verán reflejados en una tabla que mostrará cada uno de ellos y el totalizado."} LinkTo={'https://gastosdiarios.netlify.app/'} />

                    <InfoCard title={(<><a className="card-title" target="_blank" href='https://antenah.netlify.app/'>Antenah</a></>)} url={"HTML, CSS, Bootstrap"} urlTitle={"Compañía de desarrollo web"} img={antenah} description={"Esta página web simula la de una compañía que ofrece servicios de desarrollo web. Se pueden ver algunos efectos de scroll hechos puramente con CSS. Su diseño es responsivo y tiene como objetivo, por qué no, ser mi futuro sitio web ofreciendo mis servicios."} LinkTo={'https://antenah.netlify.app/'} />

                    <InfoCard title={(<><a className="card-title" target="_blank" href='https://domaingeneratorweb.netlify.app/'>Domain Generator</a></>)} url={"HTML, CSS, Bootstrap, Javascript"} urlTitle={"Crea tus dominios"} img={domain} description={"Con Domain Generator podremos añadir varias palabras y así generar todas las combinaciones posibles para generar distintas alternativas de dominios."} LinkTo={'https://antenah.netlify.app/'} />

                    <InfoCard title={(<><a className="card-title" target="_blank" href='https://bonsaiweb.netlify.app/'>Bonsai Web</a></>)} url={"HTML, CSS, Bootstrap"} urlTitle={"Tarjetas con precios"} img={bonsai} description={"En este sitio web se pueden ver tarjetas con distintos precios. Lo destacable es el botón para cambiar las tarjetas según elegimos valor mensual o anual. De esta forma, los precios cambian según le demos al botón."} LinkTo={'https://bonsaiweb.netlify.app/'} />

                    <InfoCard title={(<><a className="card-title" target="_blank" href='https://quienmecuida.netlify.app/'>QuienMeCuida</a></>)} url={"HTML, CSS, Bootstrap"} urlTitle={"Cuidado de ancianos"} img={qmc} description={"Sitio web responsivo que simula una plataforma que ofrece el servicio de cuidados de ancianos, donde se pueden ofrecer tanto cuidadores como buscar uno de ellos. Presenta varios bloques, botones e imágenes."} LinkTo={'https://quienmecuida.netlify.app/'} />

                    <InfoCard title={(<><a className="card-title" target="_blank" href='https://webto-dolist.netlify.app/'>ToDo List</a></>)} url={"HTML, CSS, Bootstrap, Javascript"} urlTitle={"Tareas por hacer"} img={todo} description={"Todo programador debe tener en su listado de proyectos un ToDo List, y yo no iba a ser la expcepción. Con este podremos añadir tareas, marcalas como hechos y eliminarlas. De esta manera, con Javascript jugamos con los cambios de estilos."} LinkTo={'https://webto-dolist.netlify.app/'} />







                </div>
            </div>
            <FooterCv />
        </>
    )
}
