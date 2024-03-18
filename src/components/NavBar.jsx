import { Link } from "react-router-dom";

const NavBar = ({ user }) => {
    return (
    <nav>
        <p>Hi {user}</p>
        <Link to="/">Movies List</Link>
        &nbsp; &nbsp; 
        <Link to="/actors">Actors List</Link>
        {/* <Link to="/movies/:id">Movie Detail</Link> */}
    </nav>    
    );
  };
  


export default NavBar;