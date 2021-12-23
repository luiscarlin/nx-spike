import { Button } from '@fullstack/ui';
import axios from 'axios';
import { useEffect, useState } from 'react';
const Home = () => {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    axios.get('/api/pokemon').then((result) => {
      console.log(result);
    });
  }, []);

  return (
    <div>
      <Button text="hello" />
    </div>
  );
};

export default Home;
