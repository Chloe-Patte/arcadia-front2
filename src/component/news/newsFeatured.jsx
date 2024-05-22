import { useEffect, useState } from "react"

const Services = () => {
    const [actualite, setActualite] = useState('');

    useEffect(() => {
        setActualite('Le zoo est actuellement fermé. Nous serons ravis de vous recevoir à partir du 6 avril 2024.');
    }, []);

    return (
        <div class="container md:mx-auto pt-16 pb-8"> 
            <div class="pb-8">
                <h2 class="text-2xl xl:text-4xl font-bold text-gray-900 md:mx-auto ml-4 text-left pb-4">Actualités du zoo</h2>
            </div>
            <div className="bg-green-700 rounded-2xl md:mx-auto ml-4 mr-4">
                <p className="text-center py-16 px-16 text-white text-2xl">{actualite}</p>
            </div>
        </div>
    )
}

export default Services
