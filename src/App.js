import logo from './logo.svg';
import './App.css';
import pokemons from './pokemons.json';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button className="Langage-selection">LangageSelection</button>
      </header>
      <body>
        <div className="CardList">
          <div className="Card">
            <img src="" className="Pokemon" alt="pokemon"/>
            <p className="Type"></p>
          </div>
          <div className="Card">
            <img src="" className="Pokemon" alt="pokemon"/>
            <p className="Type"></p>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
