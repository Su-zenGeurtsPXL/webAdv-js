const axios = require('axios').default;

async function fetchPokemonName(id) {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon = response.data;
    return pokemon.name;
}

for (let i = 0; i < 10; i++) {
    fetchPokemonName(i)
        .then((name) => {
            console.log(name)
        })
        .catch((error) => {
            console.log(error.message)
        })
}