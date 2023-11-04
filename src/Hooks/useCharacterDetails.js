import React, { useEffect, useState } from 'react';

const useCharacterDetails = (id) => {
    const [character, setCharacter] = useState(null);
    const [films, setFilms] = useState([]);
    const [vehicles, setVehicles] = useState([]);
    const [starships, setStarships] = useState([]);

    useEffect(() => {
        const fetchCharacterDetails = async () => {
            try {
                // Fetch character details
                const characterResponse = await fetch(`https://swapi.dev/api/people/${id}/`);
                const characterData = await characterResponse.json();
                setCharacter(characterData);

                // Fetch film details
                const filmResponses = await Promise.all(
                    characterData.films.map((film) => fetch(film).then((data) => data.json()))
                );
                setFilms(filmResponses);

                // Fetch vehicle details
                const vehicleResponses = await Promise.all(
                    characterData.vehicles.map((vehicle) => fetch(vehicle).then((data) => data.json()))
                );
                setVehicles(vehicleResponses);

                // Fetch starship details
                const starshipResponses = await Promise.all(
                    characterData.starships.map((starship) => fetch(starship).then((data) => data.json()))
                );
                setStarships(starshipResponses);
            } catch (error) {
                console.error('Error fetching character details:', error);
            }
        };

        fetchCharacterDetails();
    }, [id]);

    return { character, films, vehicles, starships };
};

export default useCharacterDetails;
