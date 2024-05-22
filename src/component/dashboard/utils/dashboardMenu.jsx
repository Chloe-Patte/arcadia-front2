import { useState } from "react";
import { Link } from "react-router-dom";

const DashboardMenu = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };
   
    return (
        <div className="flex flex-wrap">
            <div className="w-full">
                <header className="w-full md:hidden"> 
                    <button
                    data-collapse-toggle="sidebar"
                    type="button"
                    className="fixed top-2 left-2 z-50 inline-flex items-center p-2 w-10 h-10 justify-center text-sm 
                    text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    aria-controls="sibebar"
                    aria-expanded={isSidebarOpen}
                    onClick={toggleSidebar} >
                        <span className="sr-only">Open sidebar menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </header>

                <aside className={`h-screen sticky transition-transform transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 bg-white border-r border-gray-200`} id="sidebar">
                
                    <div class="px-3 py-4 bg-gray-50 border-r-2 border-marron">
                        <ul class="space-y-2 font-medium mt-10 md:mt-0">
                            <li>
                                <a href="index.php?controleur=gestionadmin&action=connexion" class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                                    <span class="flex-1 ml-3 whitespace-nowrap">Gestion collaborateurs</span>
                                </a>
                            </li>
                            <li>
                                <a href="index.php?controleur=gestionadmin&action=voiture" class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                                    <span class="flex-1 ml-3 whitespace-nowrap">Services</span>
                                </a>
                            </li>
                            <li>
                                <a href="index.php?controleur=gestionadmin&action=employe" class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                                    <span class="flex-1 ml-3 whitespace-nowrap">Horaires</span>
                                </a>
                            </li>
                            <li>
                                <Link className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group" to={"/dashboard/animaux"}>
                                    <span class="flex-1 ml-3 whitespace-nowrap">Animaux</span>
                                </Link>
                            </li>
                            <li>
                                <a href="index.php?controleur=gestionadmin&action=horaires" class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                                    <span class="flex-1 ml-3 whitespace-nowrap">Habitats</span>
                                </a>
                            </li>
                            <li>
                                <a href="index.php?controleur=gestionadmin&action=commentaire" class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                                    <span class="flex-1 ml-3 whitespace-nowrap">Comptes-rendus vétérinaire</span>
                                </a>
                            </li>
                            <li>
                                <a href="index.php?controleur=gestionadmin&action=voiture" class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                                    <span class="flex-1 ml-3 whitespace-nowrap">Consultation animaux</span>
                                </a>
                            </li>
                            <li>
                                <a href="index.php?controleur=gestionadmin&action=voiture" class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                                    <span class="flex-1 ml-3 whitespace-nowrap">Avis clients</span>
                                </a>
                            </li>
                            <li>
                                <a href="index.php?controleur=gestionadmin&action=voiture" class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                                    <span class="flex-1 ml-3 whitespace-nowrap">Mails</span>
                                </a>
                            </li>
                            <li>
                                <Link className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group" to={"/"}>
                                    <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"/>
                                    </svg>
                                    <span className="flex-1 ml-3 whitespace-nowrap">
                                        Déconnexion
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </aside>
            </div>
        </div>
    );
}

export default DashboardMenu