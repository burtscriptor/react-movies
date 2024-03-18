import React from "react";
import MovieDetails from "../../components/MovieDetails";

const MoviesDetailPage = ({ movies }) => {
    return (
    <div className="movies-detail-page">
       <MovieDetails movies={movies} />
    </div>
    );
  };
  
  export default MoviesDetailPage;
  