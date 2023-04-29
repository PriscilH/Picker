import { useState } from 'react';
import './App.css';
import DisplayDifficulty from './components/DisplayDifficulty';
import MenuList from './components/MenuList';

function App() {
  const [currentDifficulty, setCurrentDifficulty] = useState("");

  const updateDifficulty = (difficulty) => {
    setCurrentDifficulty(difficulty);
  }

  return (
    <div className="App">
      <h1 className='title'>Select Your difficulty</h1>
      <div className='workspace'>
        <MenuList onItemClick={updateDifficulty}
        difficulty={currentDifficulty}/>
        <DisplayDifficulty difficulty={currentDifficulty}/>
      </div>
    </div>
  );
}

export default App;
