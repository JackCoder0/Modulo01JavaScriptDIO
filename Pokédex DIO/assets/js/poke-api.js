const pokeApi = {};

function convertPokeApiDetailToPokemon(pokeDetail) {
  const pokemon = new Pokemon();
  pokemon.number = pokeDetail.id;
  pokemon.name = pokeDetail.name.toUpperCase();

  const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name);
  const [type] = types;

  pokemon.types = types;
  pokemon.type = type;

  pokemon.photo = pokeDetail.sprites.other["official-artwork"].front_default;
  pokemon.icon = pokeDetail.sprites.front_default;

  pokemon.weight = pokeDetail.weight;
  pokemon.height = pokeDetail.height;

  pokemon.stats = pokeDetail.stats.map(stat => ({
    name: stat.stat.name,
    base_stat: stat.base_stat
  }));

  return pokemon;
}

pokeApi.getPokemonDetail = (pokemon) => {
  return $.get(pokemon.url)
    .then((pokeDetail) => convertPokeApiDetailToPokemon(pokeDetail));
};

pokeApi.getPokemons = (offset = 0, limit = 5) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

  return $.get(url)
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => {
      const detailRequests = pokemons.map(pokeApi.getPokemonDetail);
      return $.when(...detailRequests).then((...results) => results);
    });
};
