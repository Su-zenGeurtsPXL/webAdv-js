const fetch = require('node-fetch');

async function fetchPokemonName(id) {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    let ok = response.ok;
    if (!ok) {
        let status = response.status
        throw new Error(`error status code ${status}`);
    }
    let pokemon = await response.json();
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