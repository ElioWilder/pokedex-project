import './App.css';
import React from 'react';
import Header from './Component/Header/header.js';
import Search from './Component/Search/search.js';
import CardList from './Component/CardList/cardList.js';
import Box from '@mui/material/Box';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  
  const [value, setValue] = React.useState("");

    const Home = () => {
      return (
        <Box sx={{backgroundColor: 'black'}}>
          <Header />
          <Box>
            <Search value={value} setValue={setValue} />
            <CardList value={value} />
          </Box>
        </Box>
      );
    };

    return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </BrowserRouter>  
  );
}

export default App;
