import { Link } from "react-router-dom"

const HabitatContentCard = () => {

    return (
        <div class="max-w-4xl container w-full mx-auto pt-16 pb-8"> 
            <div className="pb-8 mr-4 ml-4 md:m-0">
                <Link to={'/habitat/savane'}>
                    <div className="w-full border-2 border-jauneor rounded-xl shadow-xl p-8">
                        <div className="flex flex-wrap">
                            <div className="md:w-1/6 p-4">
                                <div className="border border-jauneor size-full rounded-md">
                                    <img className="size-full rounded-md" alt="savane" src="/habitat/savane.jpg"/>
                                </div>
                            </div>
                            <div className="md:w-5/6">
                                <p className="text-2xl font-bold pb-2">
                                    Aux frontières du désert
                                </p>
                                <p>
                                    Nos pensionnaires tels que les lions, les suricates ou encore les 
                                    zèbres évoluent dans un environnement pensé comme la savane africaine. 
                                    Une reconstitution des plaines d'herbes vivaces changeant de couleurs 
                                    au rythme des saisons, foulées par la diversité d'animaux que vous pourrez 
                                    admirer le temps d'une journée au coeur de la savane.
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="pb-8 mr-4 ml-4 md:m-0">
                <Link to={'/habitat/jungle'}>
                    <div className="w-full border-2 border-jauneor rounded-xl shadow-xl p-8">
                        <div className="flex flex-wrap">
                            <div className="md:w-1/6 p-4">
                                <div className="border border-jauneor size-full rounded-md">
                                    <img className="size-full rounded-md" alt="jungle" src="/habitat/jungle.jpg"/>
                                </div>
                            </div>
                            <div className="md:w-5/6">
                                <p className="text-2xl font-bold pb-2">
                                    Au coeur de l'équateur
                                </p>
                                <p>
                                    Explorez un écosystème luxuriant et vibrant, où la vie foisonne à 
                                    chaque coin. Immergez-vous dans la canopée dense. Rencontrez une multitude 
                                    de créatures exotiques, des majestueux éléphants aux colorés perroquets. 
                                    Écoutez les murmures de la nature alors que vous vous promenez le long des 
                                    sentiers sinueux, découvrant les secrets de ce joyau de biodiversité.
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="pb-8 mr-4 ml-4 md:m-0">
                <Link to={'/habitat/marais'}>
                    <div className="w-full border-2 border-jauneor rounded-xl shadow-xl p-8">
                        <div className="flex flex-wrap">
                            <div className="md:w-1/6 p-4">
                                <div className="border border-jauneor size-full rounded-md">
                                    <img className="size-full rounded-md" alt="marais" src="/habitat/marais.jpg"/>
                                </div>
                            </div>
                            <div className="md:w-5/6">
                                <p className="text-2xl font-bold pb-2">
                                    À l'orée du marais
                                </p>
                                <p>
                                    Plongez au cœur d'un écosystème mystérieux et fertile, où la vie 
                                    prospère dans des conditions uniques. Explorez des étendues d'eau 
                                    miroitantes, où les alligators se prélassent au soleil. Laissez-vous 
                                    transporter par l'atmosphère envoutante des marécages, ou la beauté 
                                    sauvage et la biodiversité vous attendent à chaque tournant.
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
            
        </div>
    )
}

export default HabitatContentCard
