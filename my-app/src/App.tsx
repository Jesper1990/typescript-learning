import React, { useState } from 'react';
import './App.css';
import AddToList from './components/AddToList/AddToList';
import List from "./components/List/List"

export interface ICharacters {
  characters: {
    name: string,
    age: number,
    url: string,
    note?: string,
  }[]
}

function App() {

  const [characters, setCharacters] = useState<ICharacters["characters"]>([
    {
      name: "Uzumaki Naruto",
      age: 20,
      url: "https://i.pinimg.com/736x/79/5b/53/795b5303feaf37283b0f07229a009150.jpg",
      note: "Loves ramen"
    }
  ])

  return (
    <div className="App">
      <h1>Anime characters.</h1>
      <List characters={characters} />
      <AddToList characters={characters} setCharacters={setCharacters} />
    </div>

  );
}

export default App;
