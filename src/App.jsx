import React from 'react';
import CharacterCard from './components/CharacterCard';
import DialogueBox from './components/DialogueBox';

function App() {


  const characterData = {
    name: 'R2-D2',
    image: 'https://starwars-visualguide.com/assets/img/characters/3.jpg',
    species: 'Sexy Robot',
  };

  const dialogue = "*Happy Beeps*";

  return (
    <><div className="App">
      <CharacterCard character={characterData} />
    </div><div>
        <DialogueBox dialogue={dialogue} />
      </div></>
  );
}

export default App;
