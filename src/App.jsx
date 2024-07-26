import React from 'react';
import CharacterCard from './components/CharacterCard';

function App() {
  const characterData = {
    name: 'Luke Skywalker',
    image: 'https://starwars-visualguide.com/assets/img/characters/1.jpg',
    species: 'Human'
  };

  return (
    <div className="App">
      <CharacterCard character={characterData} />
    </div>
  );
}

export default App;
