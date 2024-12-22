$(document).ready(function () {
  const $pokemonList = $('#pokemonList');
  const $loadMoreButton = $('#loadMoreButton');
  const $cardPokemon = $('.card-pokemon');

  const maxRecords = 151;
  const limit = 10;
  let offset = 0;

  function convertWeightToKilograms(weight) {
    const kilograms = weight / 10;
    return kilograms;
  }

  function convertHeightToMeters(height) {
    const meters = height / 10;
    return meters;
  }

  function statusClass(status) {
    if (status < 30) {
      return "30";
    } else if (status >= 30 && status < 60) {
      return "40";
    } else if (status >= 60 && status < 120) {
      return "100";
    } else if (status >= 120 && status < 200) {
      return "140";
    } else if (status >= 180 && status < 300) {
      return "200";
    } else {
      return "";
    }
  }

  function createStatusBar(statName, statValue) {
    return `
    <div class="pt-4 w-100">
      <div class="align-items-center row">
        <div class="col-1">
          <img class="sts-icon" src="/assets/img/stats/${statName}.png">
        </div>
        <div class="col-1">
          ${statName.charAt(0).toUpperCase() + statName.slice(1)}
        </div>
        <div class="col">
          <div class="status-bar-box">
            <div class="status-bar-${statusClass(statValue)}" style="width: ${statValue / 2}%;" title="${statName}">
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  }

  function convertPokemonToLi(pokemon) {
    const firstType = pokemon.types[0];
    const weightInKg = convertWeightToKilograms(pokemon.weight);
    const heightInMeters = convertHeightToMeters(pokemon.height);

    return `
    <div class="container card-pokemon bg-img col mt-5 p-3" data-type="${firstType}" id="pokemon-${pokemon.number}">
      <h3>• ${pokemon.name} •</h3>
      <img class="pkm-img" src="${pokemon.photo}">
      <div class="pkm-infos">
        <div class="label-hw d-flex flex-column align-items-center justify-content-center">
          <p class="d-flex align-items-center m-0 hw-text">
            <i class="uil uil-ruler"></i> Altura
          </p>
          <span class="hw">${heightInMeters.toFixed(1)} M</span>
        </div>
        <div class="pkm-types">
          ${pokemon.types.map((type) => `<img class="" src="/assets/img/types/${type}.png">`).join('')}
        </div>
        <div class="label-hw d-flex flex-column align-items-center justify-content-center">
          <p class="d-flex align-items-center m-0 hw-text">
            <i class="uil uil-dumbbell"></i> Peso
          </p>
          <span class="hw">${weightInKg.toFixed(1)} KG</span>
        </div>
      </div>
    </div>
        `;
  }

  function setGradientColor($element, tipoPrincipal, $iconElement) {
    let gradientColor;
    switch (tipoPrincipal) {
      case 'normal':
        gradientColor = 'rgb(168, 168, 120)';
        break;
      case 'fighting':
        gradientColor = 'rgb(192, 48, 40)';
        break;
      case 'flying':
        gradientColor = 'rgb(168, 144, 240)';
        break;
      case 'poison':
        gradientColor = 'rgb(160, 64, 160)';
        break;
      case 'ground':
        gradientColor = 'rgb(224, 192, 104)';
        break;
      case 'rock':
        gradientColor = 'rgb(184, 160, 56)';
        break;
      case 'bug':
        gradientColor = 'rgb(168, 184, 32)';
        break;
      case 'ghost':
        gradientColor = 'rgb(112, 88, 152)';
        break;
      case 'steel':
        gradientColor = 'rgb(184, 184, 208)';
        break;
      case 'fire':
        gradientColor = 'rgb(240, 128, 48)';
        break;
      case 'water':
        gradientColor = 'rgb(104, 144, 240)';
        break;
      case 'grass':
        gradientColor = 'rgb(120, 200, 80)';
        break;
      case 'electric':
        gradientColor = 'rgb(248, 208, 48)';
        break;
      case 'psychic':
        gradientColor = 'rgb(248, 88, 136)';
        break;
      case 'ice':
        gradientColor = 'rgb(152, 216, 216)';
        break;
      case 'dragon':
        gradientColor = 'rgb(112, 56, 248)';
        break;
      case 'dark':
        gradientColor = 'rgb(112, 88, 72)';
        break;
      case 'fairy':
        gradientColor = 'rgb(238, 153, 172)';
        break;
      default:
        gradientColor = 'rgb(0, 0, 0)'; // Cor padrão
        break;
    }

    $element.css('background-image', `url(/assets/img/half-pokeball.svg), radial-gradient(80% 80% at 50% bottom, ${gradientColor}, rgba(6, 14, 32, 0.8))`);

    if ($iconElement) {
      $iconElement.css('background-image', `radial-gradient(circle, ${gradientColor}, rgba(6, 14, 32, 0.8))`);
    }
  }

  function getGradientColor(tipoPrincipal) {
    let gradientColor;
    switch (tipoPrincipal) {
      case 'normal':
        gradientColor = 'rgb(168, 168, 120)';
        break;
      case 'fighting':
        gradientColor = 'rgb(192, 48, 40)';
        break;
      case 'flying':
        gradientColor = 'rgb(168, 144, 240)';
        break;
      case 'poison':
        gradientColor = 'rgb(160, 64, 160)';
        break;
      case 'ground':
        gradientColor = 'rgb(224, 192, 104)';
        break;
      case 'rock':
        gradientColor = 'rgb(184, 160, 56)';
        break;
      case 'bug':
        gradientColor = 'rgb(168, 184, 32)';
        break;
      case 'ghost':
        gradientColor = 'rgb(112, 88, 152)';
        break;
      case 'steel':
        gradientColor = 'rgb(184, 184, 208)';
        break;
      case 'fire':
        gradientColor = 'rgb(240, 128, 48)';
        break;
      case 'water':
        gradientColor = 'rgb(104, 144, 240)';
        break;
      case 'grass':
        gradientColor = 'rgb(120, 200, 80)';
        break;
      case 'electric':
        gradientColor = 'rgb(248, 208, 48)';
        break;
      case 'psychic':
        gradientColor = 'rgb(248, 88, 136)';
        break;
      case 'ice':
        gradientColor = 'rgb(152, 216, 216)';
        break;
      case 'dragon':
        gradientColor = 'rgb(112, 56, 248)';
        break;
      case 'dark':
        gradientColor = 'rgb(112, 88, 72)';
        break;
      case 'fairy':
        gradientColor = 'rgb(238, 153, 172)';
        break;
      default:
        gradientColor = 'rgb(0, 0, 0)'; // Cor padrão
        break;
    }
    return gradientColor;
  }

  function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
      const newHtml = pokemons.map(convertPokemonToLi).join('');
      $pokemonList.append(newHtml);

      pokemons.forEach((pokemon) => {
        const $cardElement = $(`#pokemon-${pokemon.number}`);
        const $iconElement = $(`#pkm-icon-${pokemon.number}`);
        if ($cardElement.length) {
          setGradientColor($cardElement, pokemon.types[0], $iconElement);
        }
      });

      pokemons.forEach((pokemon) => {
        const selector = `#pokemon-${pokemon.number}`;
        $(selector).on('click', function () {
          const firstType = pokemon.types[0];
          const gradientColor = getGradientColor(firstType);
          const weightInKg = convertWeightToKilograms(pokemon.weight);
          const heightInMeters = convertHeightToMeters(pokemon.height);
          const statusBars = pokemon.stats.map(stat => createStatusBar(stat.name, stat.base_stat)).join('');

          const modalBody = `
          <div class="card-pokemon bg-img p-3" data-type="${firstType}" id="pokemon-${pokemon.number}">
            <h3>• ${pokemon.name} •</h3>
            <img class="pkm-img" src="${pokemon.photo}">
            <div class="pkm-infos">
              <div class="label-hw d-flex flex-column align-items-center justify-content-center">
                <p class="d-flex align-items-center m-0 hw-text">
                  <i class="uil uil-ruler"></i> Altura
                </p>
                <span class="hwm">${heightInMeters.toFixed(1)} M</span>
              </div>
              <div class="d-flex align-items-center justify-content-center w-100 gap-3 px-3">
                ${pokemon.types.map((type) => `<img class="icon-type ${type}" src="/assets/img/icons/${type}.svg">`).join('')}
              </div>
              <div class="label-hw d-flex flex-column align-items-center justify-content-center">
                <p class="d-flex align-items-center m-0 hw-text">
                  <i class="uil uil-dumbbell"></i> Peso
                </p>
                <span class="hwm">${weightInKg.toFixed(1)} KG</span>
              </div>
            </div>
            
            ${statusBars}

          </div>
          `;

          $('#pokemonModalBody').html(modalBody);

          $('#pokemonModal .modal-body').css('background-image', `url(/assets/img/half-pokeball.svg), radial-gradient(80% 80% at 50% bottom, ${gradientColor}, rgba(6, 14, 32, 0.8))`);
          // Exibindo o modal
          $('#pokemonModal').modal('show');
        });
      });

    });
  }

  loadPokemonItens(offset, limit);

  $loadMoreButton.on('click', function () {
    offset += limit;
    const qtdRecordsWithNexPage = offset + limit;

    if (qtdRecordsWithNexPage >= maxRecords) {
      const newLimit = maxRecords - offset;
      loadPokemonItens(offset, newLimit);

      $loadMoreButton.remove();
    } else {
      loadPokemonItens(offset, limit);
    }
  });
});