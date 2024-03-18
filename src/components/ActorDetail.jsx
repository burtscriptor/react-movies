import { useParams } from "react-router-dom";


const ActorDetail = ({ movies }) => {
    console.log('this is movies from actorDetal componenet= ', movies);
    const { id } = useParams();
    console.log('this is id =', id)
    
  
    const actorsMovies = movies.filter((movie) => {
      return movie.cast.includes(id) 
    });   
  
  
   

    return (
    
            <>
            <h1>{id}</h1>
            {actorsMovies.map((element, index) => (
            <h2 key={index}>{element.title}</h2>
          ))}
          </>  
        );
    };
    


export default ActorDetail;