import { useState, useEffect } from "react";

const Horaire = () => {
    const [horaires, setHoraires] = useState([]);

    useEffect(() => {
        fetch('https://arcadia-back2.onrender.com/horaire')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Fetched data:', data);
                setHoraires(data);
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }, []);

    return (
        <ul>
            {horaires.map(horaire => (
                <li key={horaire.id}>{horaire.jour}: {horaire.heure}</li>
            ))}
        </ul>
    );
}

export default Horaire;

