import { Link } from "react-router-dom";

const MovieCard = ({ movies, handleDetails }) => {

    // const [cast, setCast] = useState([]);


    return (
        <>
            {movies.map((movie, index) => (
               <Link to={`/movies/${movie.title}`} key={index}>
                   <div className="movie" style={{ backgroundImage: `url("${movie.posterPath}")` }} >
                       <h2>{movie.title}</h2>
                       <h3>{movie.releaseDate}</h3>
                       
                   </div>
               </Link>
            ))}
        </>
    );
};

export default MovieCard;
