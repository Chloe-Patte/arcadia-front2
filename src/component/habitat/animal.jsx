import { useState, useEffect } from "react"

function getAge(dateNaissanceDB) {
    let dateJour = new Date();
    let dateNaissance = new Date(dateNaissanceDB);
    var diff = dateJour.getFullYear() - dateNaissance.getFullYear();

    // Vérifier si l'anniversaire de l'animal est déjà passé cette année
    if (dateJour.getMonth() < dateNaissance.getMonth() || (dateJour.getMonth() === dateNaissance.getMonth() && dateJour.getDate() < dateNaissance.getDate())) {
        diff--;
    }

    return diff;
}

const Animal = (props) => {
    const [animal, setAnimal] = useState([])

    useEffect(() => {
        fetch('https://arcadia-back2.onrender.com/animal/'+props.id)
            .then(response => response.json())
            .then(data => setAnimal(data));
    
    }, []);

    return (
        <div class="container w-full mx-auto pt-16 pb-8"> 
            <div className="w-full px-16">
                <img alt="banniere" src={animal.image}/>
            </div>
            <div className="">
                <h1 className="text-2xl text-vertfonce text-center font-bold">{animal.nom}</h1>
            </div>
            <div className="flex flex-wrap">
                <div className="w-1/2 p-4">
                    <div className="border-2 rounded-xl p-12">
                        <div className="inline-flex">
                            <p className="font-bold text-jauneor">Age : </p><p className="text-black font-bold pl-1">{getAge(animal.naissance) + " ans"}</p>
                        </div><br></br>
                        <div className="inline-flex">
                            <p className="font-bold text-jauneor">Alimentation : </p><p className="text-black font-bold pl-1">{animal.alimentation}</p>
                        </div><br></br>
                        <div className="inline-flex">
                            <p className="font-bold text-jauneor">Etat de santé : </p><p className="text-black font-bold pl-1">{animal.sante}</p>
                        </div><br></br>
                        <div className="w-full inline-flex text-gray-300 font-light italic">
                            <p className="mx-auto">Date de dernière visite du vétérinaire : {animal.dateVerif}</p>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 p-4">
                    <div className="border-2 rounded-xl p-12 bg-marron text-white">
                        <div className="w-full inline-flex text-white font-bold pb-4">
                            <p className="mx-auto italic">{animal.nomScientifique}</p>
                        </div>
                        <div className="inline-flex">
                            <p className="text-white">{animal.descriptionScientifique}</p>
                        </div><br></br><br></br>
                        <div className="">
                            <p className="font-bold">Le saviez-vous ?</p>
                            <p className="text-white">{animal.leSaviezVous}</p>
                        </div><br></br>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Animal
