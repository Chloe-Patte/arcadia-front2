import { Link } from "react-router-dom"
import { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    
    return (
        <nav class="bg-white sticky w-full z-20 top-0 start-0 border-b-2 border-marron drop-shadow-lg">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="/logo.png" class="h-20" alt="Arcadia Logo"/>
                </Link>
                <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <button
                    data-collapse-toggle="navbar-sticky"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm 
                    text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none 
                    focus:ring-2 focus:ring-gray-200"
                    aria-controls="navbar-sticky"
                    aria-expanded={isMenuOpen}
                    onClick={toggleMenu}>
                <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                    
                </div>
                <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? '' : 'hidden'}`} id="navbar-sticky">
                    <ul class="flex flex-col md:flex-row p-4 mt-4 font-light border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:mt-0 md:border-0 md:bg-white">
                        <li  class="flex-1 h-10 py-2 pl-3 pr-4 flex items-center justify-center text-sm md:text-white
                            md:bg-jauneor rounded-lg md:hover:text-marron md:p-3">
                            <Link to="/">Accueil</Link>
                        </li>
                        <li class="flex-1 h-10 py-2 pl-3 pr-4 flex items-center justify-center text-sm md:text-white md:bg-jauneor rounded-lg md:hover:text-marron md:p-3">
                            <Link to="/habitat">Habitats</Link>
                        </li>
                        <li class="flex-1 h-10 py-2 pl-3 pr-4 flex items-center justify-center text-sm md:text-white md:bg-jauneor rounded-lg md:hover:text-marron md:p-3">
                            <Link to="/service">Services</Link>
                        </li>
                        <li class="flex-1 h-10 py-2 pl-3 pr-4 flex items-center justify-center text-sm md:text-white md:bg-jauneor rounded-lg md:hover:text-marron md:p-3">
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li class="flex-1 h-10 py-2 pl-3 pr-4 flex items-center justify-center text-sm md:text-vertclair md:bg-none rounded-lg md:hover:text-vertfonce md:p-3 md:border md:border-vertclair">
                            <Link to="/connexion">Connexion</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}


export default Header
