import { Footer } from "../components/Footer/Footer"
import { Navbar } from "../components/Navbar/Navbar"
import { SearchBoxHome } from "../components/SearchboxHome/SearchBoxHome"

export const Home = () => {
    return (
        <>
            <Navbar />
                <div className="bloque-margen">
                    <div className="d-flex justify-content-center align-items-center google-word">
                        <span className="google-blue">J</span>
                        <span className="google-red">a</span>
                        <span className="google-yellow">v</span>
                        <span className="google-blue">i</span>
                        <span className="google-green">e</span>
                        <span className="google-red">r</span>
                    </div>
                    <SearchBoxHome/>
                </div>


            <Footer />

        </>
    )
} 
