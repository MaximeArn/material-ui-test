/* eslint-disable operator-linebreak */
// == Import npm
import React, { useEffect, useState } from 'react';
import axios from 'axios';

// == Import
import './app.scss';
import NavBar from '../NavBar';
import Characters from '../Characters';

// == Composant
const App = () => {
  const baseRoute = 'https://www.potterapi.com/v1';
  const key = '$2a$10$YeyRqM/odQZNDwoEe0EEOu9NCXFEhVuPLcoMWgBBqdFJE2hWoVSu.';

  const [charactersData, setCharactersData] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseRoute}/characters/?key=${key}`)
      .then((res) => {
        console.log(res.data);
        setCharactersData(res.data);
      })
      .catch((err) => {
        console.log('err :', err);
      });
  }, []);

  return (
    <>
      <NavBar />
      <Characters data={charactersData} />
    </>
  );
};

// == Export
export default App;
