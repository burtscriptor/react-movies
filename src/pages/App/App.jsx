import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import ActorListPage from "../ActorListPage/ActorListPage"
import ActorDetailPage from '../ActorDetail/ActorDetailPage';
import MoviesDetailPage from '../MoviesDetailPage/MoviesDetailPage';
import MoviesListPage from '../MoviesListPage/MoviesListPage';
import LoginPage from "../LoginPage/LoginPage";
import NavBar from '../../components/NavBar';
import { movies } from '../../data/data';

function App() {
 const [user, setUser] = useState (null);

 const addUser = (user) => {
  console.log("before set", user);
  setUser(user);
  console.log("after set", user);
};
  
return (
    <main className="App">
     { user ? 
       <>
          <NavBar user={user}/>
          <Routes>
            <Route path="/" element={<MoviesListPage movies={ movies}  />}  />
            <Route path="/actors" element={< ActorListPage movies={movies} /> } />
            <Route path="/movies/:id" element={< MoviesDetailPage movies={movies}/> } />
            <Route path="/actors/:id" element={< ActorDetailPage movies={movies}/> } />
          </Routes>
      </>
    :
    <Routes>
      <Route path="/" element={<LoginPage user={user} addUser={addUser} />} />
      
      </Routes>
    }
    </main>
  );
};

export default App;
