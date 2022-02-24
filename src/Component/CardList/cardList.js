import pokemons from './pokemons.json';

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

  const CardList = () => {
    return <div className="CardList">{pok}</div>
  };

  export default CardList;