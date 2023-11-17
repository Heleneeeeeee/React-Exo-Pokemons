import Home from "./Page/Home";
import Pokemons from "./Page/Pokemons";
import PokemonDetails from "./Page/PokemonDetails";
import TrainerDetails from "./Page/TrainerDetails";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/pokemons" element={<Pokemons />}/>
        <Route path="/pokemon/:pokemonId/details" element={<PokemonDetails />}/>
        <Route path="/trainer/:trainerId/details" element={<TrainerDetails />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

//Créez un nouveau projet react pour un pokedex
// dans ce projet, créez deux pages (avec le react router dom) : une page d'accueil et une page de liste des pokemons
// 
// La page pokemons doit afficher tous les pokemons
