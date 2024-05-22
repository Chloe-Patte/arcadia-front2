import { useState, useEffect } from "react"
import Avis from './avis'
import { Link } from "react-router-dom"

const AvisContainer = () => {
    const [avis, setAvis] = useState([])

    useEffect(() => {
        fetch('https://arcadia-back2.onrender.com/comment/published/')
            .then(response => response.json())
            .then(data => setAvis(data));
    
    }, []);

    return (
        <div className="container mx-auto pt-16 pb-8 w-full"> 
            <div className="pb-12">
                <h2 className="text-2xl xl:text-4xl font-bold text-gray-900 md:mx-auto ml-4 text-left pb-4">Avis visiteurs</h2>
                <p className="text-xl text-gray-600 xl:w-3/4 w-11/12 md:mx-auto ml-4 mr-4 xl:mx-0 text-left">
                    Vous pouvez, vous aussi, nous laisser un commentaire 
                    <Link className="text-jauneor hover:underline hover:font-semibold" to={"/comment"}>
                        {" en cliquant ici."}
                    </Link>
                </p>
            </div>
            <div className="flex flex-wrap" id="comment-container">
                {avis.map(avis => (
                    <div className="xl:w-1/3 lg:w-5/12 w-11/12 sm:w-3/5 md:w-5/12 xl:pb-0 md:mx-auto ml-4 pb-12">
                        <Avis user={avis.pseudo} content={avis.message}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AvisContainer