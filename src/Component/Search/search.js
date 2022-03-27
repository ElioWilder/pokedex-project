import  React  from "react";
import  Box  from "@mui/material/Box";
import  TextField  from "@mui/material/TextField";


const Search = ({value, setValue}) => {
  
  const onChange = (e) => {
    setValue(e.target.value);
    console.log(e.target.value);
  }
    return <Box sx={{p:2}}>
              <TextField type="text" sx={{backgroundColor: 'white', fontSize: 'large', width: 1880, borderRadius: 1}} label="Enter a pokemon name" variant="outlined" value={value} onChange={onChange}></TextField>
            </Box>
  };

export default Search;