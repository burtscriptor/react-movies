import React from "react";
import ActorCard from "../../components/ActorCard";

const ActorListPage = ( { movies }) => {
    
    return (
    <div className="actors-list-page">
       <ActorCard movies={ movies } />
    </div>
    );
  };
  
  export default ActorListPage;
  