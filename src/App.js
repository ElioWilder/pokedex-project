import './App.css';
import React from 'react';
import Header from './Component/Header/header.js';
import Search from './Component/Search/search.js';
import CardList from './Component/CardList/cardList.js';

function App() {
  
  const [value, setValue] = React.useState("");

    return (
    <div className="App">
      <Header />
      <body>
        <div className="PokemonListPage">
        <Search value={value} setValue={setValue} />
        <CardList value={value} />
        </div>
        
      </body>
    </div>
  );
}

export default App;
