import React from "react";
import { useState} from "react";
import { Link } from "react-router-dom";

const ActorCard = ( { movies }) => {
    const newArray = [];
    const movie = movies.map((movie) => newArray.push(movie.cast) )
    const castArray = (array) => {
        return array.reduce((accumulator, currentValue) => Array.isArray(currentValue) ? accumulator.concat(castArray(currentValue)) : accumulator.concat(currentValue), []);
    }
    const castsArray = castArray(newArray);
    console.log(castsArray);
    const castSet = new Set(castsArray);
    console.log(castSet);
    const uniqueCastArray = Array.from(castSet)
    console.log(uniqueCastArray);

    
   
    return (
        <>
            {uniqueCastArray.map((actor, index) => (
                <Link to={`/actors/${actor}`} key={index}>
                    <div className="actor" style={{ backgroundImage: `url('https://picsum.photos/200')` }}>
                        <h2>{actor}</h2>
                    </div>
                </Link>
            ))}
        </>
    );
}



export default ActorCard;