import pokemons from './pokemons.json';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { Box } from '@mui/system';

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
  
        <Card sx={{width: 250, height: 250, p: 2,pt: 1, m:2}}>
          <p>No.{element.id}</p>
          <CardHeader title={element.names["fr"]} sx={{textAlign: 'center'}} />
          <CardContent sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <Box sx={{width: 80, height: 80}}>
              <img src={element.image} className="Pokemon" alt="pokemon" />
            </Box>
            <Box sx={{border: 1, borderRadius: 2}}>
              <p className="Type">{element.types}</p>
            </Box>
          </CardContent>
        </Card>
      );
    });


    return <Box sx={{display:'flex', flexDirection: 'row', flexWrap: 'wrap', backgroundColor: 'black'}}>{pok}</Box>
  };

  export default CardList;