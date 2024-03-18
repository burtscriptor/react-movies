import React, { useState } from "react";
import MovieCard from "../../components/MovieCard";

const MoviesListPage = ({ movies }) => {
const [movieDetail, setMovieDetail] = useState(null);

const handleDetails = (event) => {
  console.log('movie card clicked handle details ago')
}

    return (
    <div className="movies-list-page">
      <MovieCard movies={ movies } handleDetails={handleDetails}/> 
      </div>
    );
  };
  
  export default MoviesListPage;
  