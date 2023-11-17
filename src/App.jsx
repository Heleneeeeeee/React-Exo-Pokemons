import Home from "./Page/Home";
import Pokemons from "./Page/Pokemons";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/pokemons" element={<Pokemons />}></Route>
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