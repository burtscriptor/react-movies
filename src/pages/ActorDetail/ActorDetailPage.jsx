import ActorCard from "../../components/ActorCard";
import React from "react";
import ActorDetail from "../../components/ActorDetail";

const ActorDetailPage = ({ movies }) => {
    return (
        <>        
        <ActorDetail movies={ movies }/>
        </>

    );
};

export default ActorDetailPage;