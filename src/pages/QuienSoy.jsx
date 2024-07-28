import ImageSlider from "../components/Carousel/Carousel";
import { NavbarCv } from "../components/NavbarCv/NavbarCv";
import { FooterCv } from "../components/FooterCv/FooterCv";



export const QuienSoy = () => {


    return (
        <>
            <NavbarCv />
            <div className="container row d-flex flex-wrap justify-content-center my-5">
                <div className="col-12 col-sm-8">
                    <h1 className="pb-5">Quién soy</h1>
                    <p className="pb-3">Soy Javier, nacido el 02/04/1992 en Rosario, Santa Fe, Argentina, amante de la programación, el fútbol y el pádel. En el año 2018 decidí mudarme a España, pasando primero por Barcelona y luego por Sevilla, que es donde resido actualmente.</p>
                    <p className="pb-3">Me defino como una persona emprendedora, autodidacta y dinámica, donde le gusta estar en constante movimiento buscando nuevos retos y desafíos. Durante mi vida pude concretar algunos proyectos que me permitirieron ir adentrándome en las nuevas tecnologías y la programación, descubriendo así que lo que realmente me apasionaba era sentarme frente a la pantalla y crear código.
                    </p>
                    <p className="pb-3">Desde los 15 años que estoy metido en el mundo de Internet, creando mis propias páginas web y blogs diseñados para trabajar con Google Adsense, modelo de negocio que me permitió trabajar de esta forma durante muchos años y dar mis primeros pasos en el mundo IT.</p>
                    <p className="pb-5">Mi objetivo es consolidarme como un gran programador y seguir aprendiendo día a día para estar actualizado de las nuevas tendencias y tecnologías. Te invito a que sigas recorriendo mi CV para que puedas conocerme completamente. </p>
                        <ImageSlider />
                </div>
            </div>
            <FooterCv />
        </>
    )
}

