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
  
  function addListItem(pokemon) {
  let pokemonList = document.querySelector(".pokemon-list");
  let listpokemon = document.createElement("li");
  let button = document.createElement("button");
  button.innerText = pokemon.name;
  button.classList.add("button-class");
  listpokemon.appendChild(button);
  pokemonList.appendChild(listpokemon);
  button.addEventListener('click', function() {
  showDetails(pokemon);
  });
  }
  
  function showDetails(pokemon) {
  console.log(pokemon);
  }
  
  return {
  add: add,
  getAll: getAll,
  addListItem: addListItem
  };
  })();
  
  document.addEventListener('DOMContentLoaded', function() {
  pokemonRepository.getAll().forEach(function(pokemon){
  pokemonRepository.addListItem(pokemon);
  });
  });