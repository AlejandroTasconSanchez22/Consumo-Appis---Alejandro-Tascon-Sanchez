async function searchPokemon() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const pokemonInfo = document.getElementById('pokemonInfo');
  
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchInput}`);
      const data = await response.json();
  
      pokemonInfo.innerHTML = `
        <div class="pokemon-card">
          <h2>${data.name}</h2>
          <img src="${data.sprites.front_default}" class="pokemon-image" alt="${data.name}">
          <p>Abilities: ${data.abilities.map(ability => ability.ability.name).join(', ')}</p>
          <p>Base Experience: ${data.base_experience}</p>
        </div>
      `;
    } catch (error) {
      pokemonInfo.innerHTML = `<p class="error-message">No se encontró ningún Pokémon con ese nombre.</p>`;
    }
  }

  
  