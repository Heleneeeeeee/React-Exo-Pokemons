import { useParams } from 'react-router-dom';
import Header from '../Component/Header';

const PokemonDetails = () => {

const pokemons = [
        {
          id: 1,
          name: 'bulbasaur',
          types: ['poison', 'grass'],
          img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
          isInTeam: true,
        },
        {
          id: 2,
          name: 'ivysaur',
          types: ['poison', 'grass'],
          img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png',
          isInTeam: true,
        },
        {
          id: 3,
          name: 'venusaur',
          types: ['poison', 'grass'],
          img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png',
          isInTeam: false,
        },
        {
          id: 4,
          name: 'charmander',
          types: ['fire'],
          img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
          isInTeam: true,
        },
        {
          id: 5,
          name: 'charmeleon',
          types: ['fire'],
          img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png',
          isInTeam: false,
        },
        {
          id: 6,
          name: 'charizard',
          types: ['flying', 'fire'],
          img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png',
          isInTeam: true,
        },
        {
          id: 7,
          name: 'squirtle',
          types: ['water'],
          img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png',
          isInTeam: true,
        },
        {
          id: 8,
          name: 'wartortle',
          types: ['water'],
          img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png',
          isInTeam: false,
        },
        {
          id: 9,
          name: 'blastoise',
          types: ['water'],
          img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png',
          isInTeam: true,
        },
      ];
      
      const {pokemonId}= useParams();
      const pokemonToDisplay = pokemons.find((pokemon)=>{
        return (
            pokemon.id==pokemonId
            )
      });

      return (
      <>
        <Header />
        <h1>Détail du pokemon : </h1>

      <h2>{pokemonToDisplay.name}</h2>
      <img src={pokemonToDisplay.img} alt={pokemonToDisplay.name} />
      </>


      )
}

export default PokemonDetails;


     

//Créez un composant de page pour afficher un pokemon (cette page est un 'gabarit" et marchera avec n'importe quel pokemon), avec pour l'instant du contenu "bidon"
// Créez une route (dans App.js) qui prend en parametre d'url un id et qui apppelle le composant de page pour afficher un pokemon
// Dans la liste des pokemons (soit la home soit la page pokemons), pour chaque pokemon dans la boucle, créez un lien avec Link qui dirige vers la page qui affiche un pokemon. Attention, il faut que l'url du Link contiennne l'id du pokemon actuel de la boucle
// Modifiez la page qui affiche un pokemon pour récupérer dans l'url l'id, trouver dans la liste de pokemons le pokemon correspondant à l'id. Puis afficher ce pokemon dans le JSX