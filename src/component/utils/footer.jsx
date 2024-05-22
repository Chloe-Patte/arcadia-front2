import { Link } from "react-router-dom"
import Horaire from "./horaire/horaire"


const Footer = () => {

    return (
        <div className=" bottom-0 left-0 z-20 w-full p-4 border-t-2 border-marron drop-shadow-lg bg-white">
            <div className="max-w-screen-lg py-2 px-2 sm:px-6 text-gray-800 sm:flex justify-between mx-auto">
                <div className="p-5 sm:w-3/12 md:border-r border-marron">
                    <div className="text-sm text-center uppercase text-vertfonce font-bold">Adresse</div>
                        <ul>
                            <li className="my-2 text-center">
                                <Link to ={""}>
                                    <i className="fa-solid fa-location-dot" ></i> 
                                    12 rue de l'invention<br/>
                                    Forêt de Brocéliande
                                </Link>
                            </li>
                            <li className="my-2 text-center">
                                <Link to ={""}>
                                    <i className="fa-solid fa-phone" style={{color: '#1f2937'}}></i>
                                    02 XX XX XX XX
                                </Link>
                            </li>
                        </ul>
                    </div> 

                    <div className="p-5 sm:w-7/12 md:border-r border-marron text-center">
                        <h3 className="font-bold uppercase text-sm text-vertfonce mb-4">Nos horaires</h3>
                        <Horaire />
                    </div>
                    
                    <div className="p-5 sm:w-3/12 ">
                        <div className="text-sm text-center uppercase text-vertfonce font-bold">Menu</div>
                        <ul>
                            <li className="my-2 text-center hover:text-jauneor">
                            <Link to="/">Accueil</Link>
                            </li>
                            <li className="my-2 text-center hover:text-jauneor">
                                <Link to="/habitat">Habitats</Link>
                            </li>
                            <li className="my-2 text-center hover:text-jauneor">
                                <Link to="/service">Services</Link>
                            </li>
                            <li className="my-2 text-center hover:text-jauneor">
                                <Link to="/contact">Contact</Link>
                            </li>
                            <li className="my-2 text-center hover:text-jauneor">
                                <Link to="/connexion">Connexion</Link>
                            </li>
                        </ul>
                    </div>
                    
                </div>
            <div className="text-xs underline text-center">
                Politique de confidentialité
                <div>Mentions légales</div>
            </div>
        </div>
    )

}

export default Footer