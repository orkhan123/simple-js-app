let pokemonRepository = (function () {
    let pokemonList = [
      { name: "Pikachu", height: 0.4, types: "Electric" },
      { name: "Seel", height: 1.1, types: "Water" },
      { name: "Swalot", height: 1.7, types: "Poison" },
    ];
  
    function add(newItem) {
      pokemonList.push(newItem);
    }
  
    function getAll() {
      return pokemonList;
    }

    function addListItem(pokemonList) {
      let pokemonList = document.querySelector(".pokemon-list");
      let listpokemon = document.createElement("li");
      let button = document.createElement("button");
      button.innerText = pokemonList.name;
      button.classList.add("button-class");
      listpokemon.appendChild(button);
      pokemonList.appendChild(listpokemon);
      button.addEventListener.click(ShowDetails.pokemonList);
    }

    function ShowDetails(pokemonList) {
      console.log()
    }

    return {
      add: add,
      getAll: getAll,
      addListItem: addListItem
    };

  })();
  
  pokemonRepository.getAll().forEach(function (pokemonList){
    pokemonRepository.addListItem(pokemonList);
  });