import { Link } from "react-router-dom"

const Services = () => {

    return (
        <div class="container w-full mx-auto pt-8 pb-8"> 
            <h1 className="text-4xl text-center pb-8 text-vertclair">Les services sur le parc</h1>
            <p className="max-w-4xl ml-4 mr-4 md:mx-auto text-justify">
                Toute l’équipe d’Arcadia se mobilise pour faire de votre séjour au zoo une journée inoubliable. Dans cette démarche, nous vous proposons plusieurs services disponibles sur place pour rendre votre séjour agréable.
            </p>
            <div className="flex flex-wrap pt-8">
                <div className="flex md:w-1/3 px-8">
                    <div className="border rounded-xl bg-gray-50 px-8 pb-8 pt-4">
                        <p className="text-center text-vertfonce pb-4 text-2xl">
                            Restauration
                        </p>
                        <img className="rounded-lg" alt="restauration" src="/service/restau.png"/>
                        <div className="px-8 pt-4">
                            <ul className="list-disc">
                                <li>Buffet à partir de 15€/personne</li>
                                <li>Stand de restauration rapide</li>
                                <li>Aires de pique- nique dans le parc</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex md:w-1/3 pt-8 pl-8 pr-8 md:px-8">
                    <div className="border rounded-xl bg-gray-50 px-8 pb-8 pt-4">
                        <p className="text-center text-vertfonce pb-4 text-2xl">
                            Visite guidée
                        </p>
                        <img className="rounded-lg" alt="restauration" src="/service/visite.png"/>
                        <div className="px-8 pt-4">
                            <ul className="list-disc">
                                <li>Gratuit</li>
                                <li>Sur réservation à l’entrée du parc</li>
                                <li>Groupe de 10 personnes maximum</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex md:w-1/3 pt-8 pl-8 pr-8 md:px-8">
                    <div className="border rounded-xl bg-gray-50 px-8 pb-8 pt-4">
                        <p className="text-center text-vertfonce pb-4 text-2xl">
                            Visite du parc en petit train
                        </p>
                        <img className="rounded-lg" alt="restauration" src="/service/train.png"/>
                        <div className="px-8 pt-4">
                            <ul className="list-disc">
                                <li>2€/personne</li>
                                <li>Réservation à l’entrée du parc</li>
                                <li>Durée de 25 à 30 minutes</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
