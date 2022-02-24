import './App.css';
import Header from './Component/Header/header.js';
import Search from './Component/Search/search.js';
import CardList from './Component/CardList/cardList.js';

function App() {
  
    return (
    <div className="App">
      <Header />
      <body>
        <div className="PokemonListPage">
        <Search />
        <CardList />
        </div>
        
      </body>
    </div>
  );
}

export default App;
