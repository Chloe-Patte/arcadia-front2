import { Link } from "react-router-dom"


const HabitatFeatured = () => {

    return (
        <div class="container w-full mx-auto pt-16 pb-8"> 
            <div class="pb-8">
                <h2 class="text-2xl xl:text-4xl font-bold text-gray-900 md:mx-auto ml-4 text-left pb-4">Découvrir nos animaux</h2>
                <p class="text-xl text-gray-600 md:w-full ml-4 mr-4 md:mx-auto xl:mx-0 text-left">{"Nos pensionnaires sont répartis au sein de trois habitats : la savane, la jungle et les marais. Si vous souhaitez en apprendre plus sur les animaux présents au zoo ou sur leurs habitats,"}
                    <Link class="text-jauneor hover:underline hover:font-semibold" to={'/habitat'}>{' cliquez ici.'}</Link>
                </p>
            </div>
            <div class="flex flex-wrap px-8 sm:px-16 md:px-32 pt-8">
                <Link to={'/habitat/savane'} class="w-full md:w-1/2 lg:w-1/3 px-4 py-2">
                    <div class="max-w-sm mx-auto w-44 h-44 rounded-full border border-marron overflow-hidden shadow-lg cursor-pointer">
                        <img className="w-44 h-44 rounded-full" alt="savane feature" src="/habitat/savane.jpg"/>
                    </div>
                    <div class="font-bold text-xl text-center text-vertfonce pt-2">Savane</div>
                </Link>
                <Link to={'/habitat/savane'} class="w-full md:w-1/2 lg:w-1/3 px-4 py-2">
                    <div class="max-w-sm mx-auto w-44 h-44 rounded-full border border-marron overflow-hidden shadow-lg cursor-pointer">
                        <img className="w-44 h-44 rounded-full" alt="jungle feature" src="/habitat/jungle.jpg"/>
                    </div>
                    <div class="font-bold text-xl text-center text-vertfonce pt-2">Jungle</div>
                </Link>
                <Link to={'/habitat/savane'} class="w-full md:w-1/2 lg:w-1/3 px-4 py-2">
                    <div class="max-w-sm mx-auto w-44 h-44 rounded-full overflow-hidden border border-marron shadow-lg cursor-pointer">
                        <img className="w-44 h-44 rounded-full" alt="marais feature" src="/habitat/marais.jpg"/>
                    </div>
                    <div class="font-bold text-xl text-center text-vertfonce pt-2">Marais</div>
                </Link>
            </div>
        </div>
    )
}

export default HabitatFeatured
