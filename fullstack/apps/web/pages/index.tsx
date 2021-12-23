import axios from 'axios';
import { useEffect, useState } from 'react';

const Home = () => {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    axios.get('/api/pokemon').then((result) => {
      console.log(result);
    });
  }, []);
  return <div>hello</div>;
};

export default Home;
