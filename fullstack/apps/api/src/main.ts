import * as express from 'express';
import { pokemon } from './pokemon';

const app = express();

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to api!' });
});

app.get('/api/pokemon', (_, res) => {
  res.send(pokemon);
});

app.get('/pokemon/search', (req, res) => {
  const q = ((req.query?.q as string) ?? '').toLowerCase();
  res.send(
    pokemon.filter(({ name: { english } }) => english.toLowerCase().includes(q))
  );
});

app.get('/api/pokemon/:id', (req, res) => {
  const pokemonId = Number(req.params.id);
  const foundPokemon = pokemon.find((item) => item.id === pokemonId);

  if (!foundPokemon) {
    res.status(422).send('hello');
  } else {
    res.send(foundPokemon);
  }
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});

server.on('error', console.error);
