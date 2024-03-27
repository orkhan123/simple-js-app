let pokemonRepository = (function () {
  let pokemonList = [
    {name: 'Pikachu', height: 0.4, types:'Electric'},
    {name: 'Seel', height: 1.1, types: 'Water'},
    {name: 'Swalot', height: 1.7, types: 'Poison'}];

  return {
    add: function(pokemon) {
      pokemonList.push(pokemon);
    },
    getAll: function() {
      return pokemonList;
    }
  };
})();


pokemonRepository.getAll(function() {
    if (pokemonRepository.height < 0.5)
    document.write (pokemonRepository.name + " " + "height:" + pokemonRepository.height + " " + "This is small pokemon" + "<p>");
    else if (1.5 > pokemonRepository.height > 0.5)
    document.write (pokemonRepository.name + " " + "height:" + pokemonRepository.height + " " + "This is medium pokemon" + "<p>");
    else if (pokemonRepository.height > 1.5)
    document.write (pokemonRepository.name + " " + "height:" + pokemonRepository.height + " " + "This is big pokemon" + "<p>");
});
