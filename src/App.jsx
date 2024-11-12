import './App.css';
import React, { useState } from 'react';
import useFetchCharacters from './hooks/useFetchCharacters';
import CharacterCard from './Components/CharacterCard';

const App = () => {
  const [pokemonUrl, setPokemonUrl] = useState('https://pokeapi.co/api/v2/pokemon/1');
  const [rickUrl, setRickUrl] = useState('https://rickandmortyapi.com/api/character/1');

  const { data: pokemon, error: pokemonError, loading: pokemonLoading } = useFetchCharacters(pokemonUrl);
  const { data: rick, error: rickError, loading: rickLoading } = useFetchCharacters(rickUrl);

  // ID aleatorio para el botón
  const getRandomId = (max) => Math.floor(Math.random() * max) + 1;

  const fetchRandomPokemon = () => {
    const randomId = getRandomId(1010); 
    setPokemonUrl(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
  };

  const fetchRandomRickCharacter = () => {
    const randomId = getRandomId(826); 
    setRickUrl(`https://rickandmortyapi.com/api/character/${randomId}`);
  };

  if (pokemonLoading || rickLoading) return <p>Loading...</p>;
  if (pokemonError) return <p>Error loading Pokémon: {pokemonError}</p>;
  if (rickError) return <p>Error loading Rick and Morty character: {rickError}</p>;

  return (
    <div>
      {pokemon && (
        <CharacterCard 
          title="Personaje Pokemon"
          name={pokemon.name} 
          image={pokemon.sprites.front_default} 
        />
      )}
      <button className='botón' onClick={fetchRandomPokemon}>¡OTRO!</button>

      {rick && (
        <CharacterCard 
          title="Personaje Rick and Morty"
          name={rick.name} 
          image={rick.image} 
        />
      )}
      <button className='botón' onClick={fetchRandomRickCharacter}>¡OTRO!</button>
    </div>
  );
};

export default App;