import { Link } from "react-router-dom"

const Services = () => {

    return (
        <div class="container w-full mx-auto pt-16 pb-8"> 
            <div class="pb-8">
                <h2 class="text-2xl xl:text-4xl font-bold text-gray-900 md:mx-auto ml-4 text-left pb-4">Nos services</h2>
                <p class="text-xl text-gray-600 md:w-full ml-4 mr-4 md:mx-auto xl:mx-0 text-left">
                    Toute l'équipe d'Arcadia se mobilise pour faire de votre séjour au zoo une journée inoubliable. 
                    Dans cette démarche, nous vous proposons plusieurs services disponibles sur place pour rendre 
                    votre séjour agréable. Vous pouvez consulter en détail tous les services proposés 
                    <Link class="text-jauneor hover:underline hover:font-semibold" to={'/service'}>{' en cliquant ici.'}</Link>
                </p>
            </div>
            <div class="flex flex-wrap px-8 sm:px-16 md:px-32 pt-8">
                <div class="w-full md:w-1/2 lg:w-1/3 px-8 pt-2">
                    <div class="max-w-sm mx-auto rounded-xl overflow-hidden border border-marron shadow-lg">
                        <Link to={"/service"}>
                            <div class="">
                                <div class="px-6 pt-4 font-bold text-xl text-center text-vertfonce pb-4">Restauration</div>
                                <img className="rounded-t-xl h-auto size-full" alt="train" src="/service/restau.png"/>
                            </div>
                        </Link>
                    </div>
                </div>
                <div class="w-full md:w-1/2 lg:w-1/3 px-8 pt-2">
                    <div class="max-w-sm mx-auto rounded-xl overflow-hidden border border-marron shadow-lg">
                        <Link to={"/service"}>
                            <div class="">
                                <div class="px-6 pt-4 font-bold text-xl text-center text-vertfonce pb-4">Visite guidée</div>
                                <img className="rounded-t-xl h-auto size-full" alt="train" src="/service/visite.png"/>
                            </div>
                        </Link>
                    </div>
                </div>
                <div class="w-full md:w-1/2 lg:w-1/3 px-8 pt-2">
                    <div class="max-w-sm mx-auto rounded-xl overflow-hidden border border-marron shadow-lg">
                        <Link to={"/service"}>
                            <div class="">
                                <div class="px-6 pt-4 font-bold text-xl text-center text-vertfonce pb-4">Visite en petit train</div>
                                <img className="rounded-t-xl h-auto size-full" alt="train" src="/service/train.png"/>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
