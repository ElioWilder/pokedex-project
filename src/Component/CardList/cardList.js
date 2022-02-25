import pokemons from './pokemons.json';

/*const pok = [];

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
*/
  const CardList = ({value}) => {
    const filterPokemon = pokemons.filter((element) => {
      if (element.names.fr.toLowerCase().includes(value.toLowerCase())) {
        return true;
      } else {
        return false;
      }
    });
    console.log(value);
    const pok = filterPokemon.map((element) => {
      return (
  
        <div className="Card">
          <p>No.{element.id}</p>
          <h3>{element.names["fr"]}</h3>
          <img src={element.image} className="Pokemon" alt="pokemon" />
          <p className="Type">{element.types}</p>
        </div>
      );
    });


    return <div className="CardList">{pok}</div>
  };

  export default CardList;