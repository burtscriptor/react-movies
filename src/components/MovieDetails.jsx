import { useParams } from "react-router-dom";


const MovieDetails = ( { movies } ) => {
    const { id } = useParams();

    const movie = movies.find((movie) => movie.title === id);
    console.log('this is movie =', movie)

    let cast  = []
    const castNames = movie.cast.map((actor) => cast.push(actor) ) 
 


    return (
        <>
        <h1>{movie.title}</h1>
        <h2>{movie.releaseDate}</h2>
        <img src={movie.posterPath} className="details-movie-poster" />
        <div className="actors">Cast:</div> 
         <p className='actors'>{cast.join(', ')}</p> 
      
  
        
      </>  
    );
};



export default MovieDetails;