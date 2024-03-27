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
  
    function printPokemonList() {
      pokemonList.forEach(function (pokemon) {
        
        if (pokemon.height < 0.5) {
        document.write (pokemon.name + ", height: " + pokemon.height + " "+ "This is a small pokemon" + "<p>");
        } else if (pokemon.height > 0.5 && pokemon.height <= 1.5) {
        document.write (pokemon.name + ", height: " + pokemon.height + " "+ "This is a medium pokemon" + "<p>");
        } else {
        document.write (pokemon.name + ", height: " + pokemon.height + " "+ "This is a big pokemon" + "<p>");
        }
      });
    }
  
    return {
      add: add,
      getAll: getAll,
      printPokemonList: printPokemonList,
    };
  })();
  
  pokemonRepository.printPokemonList();