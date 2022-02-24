import logo from './logo.svg';
import './App.css';
import pokemons from './pokemons.json';

function App() {

  //Pokemon Card Loop
  const pok = [];

  pokemons.forEach((element) => {
    pok.push(

      <div className="Card">
        <p>No.{element.id}</p>
        <h3>{element.names["fr"]}</h3>
        <img src={element.image} className="Pokemon" alt="pokemon" />
        <p className="Type">{element.types}</p>
      </div>
    );
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <body>
        <div className="PokemonListPage">
        <div className="search-bar">
          <input type="search" className="search-input" placeholder="Enter a pokemon name"></input>
        </div>
        <div className="CardList">{pok}</div>
        </div>
      </body>
    </div>
  );
}

export default App;
