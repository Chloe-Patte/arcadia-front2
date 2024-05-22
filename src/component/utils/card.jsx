import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cards = (props) => {
    const [animal, setAnimal] = useState([])

    useEffect(() => {
        fetch("https://arcadia-back2.onrender.com/animal/habitat/"+props.habitat, {
          method: "GET",
          headers: {
            
          },
        })
          .then((response) => response.json())
          .then((data) => {
            setAnimal(data);
          })
          .catch((error) => console.log(error));
    }, []);

    return (
        <div className="flex flex-wrap max-w-4xl mx-auto place-content-center">
            {animal.map(card => (
                <div key={card.id} className="md:w-1/4 p-4">
                    <Link to={"/habitat/" + card.habitat + "/" + card.id}>
                        <div className="h-40 w-40 rounded-xl border-2 border-jauneor shadow-xl">
                            <img alt={card.nom + " image"} src={card.image} className=" rounded-xl"/>
                            <p className="text-center text-vertfonce mt-2">{card.nom}</p>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default Cards;
