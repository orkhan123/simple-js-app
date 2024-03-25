let pokemonList = [
    {name: 'Pikachu', height: 0.4, types:'Electric'},
    {name: 'Seel', height: 1.1, types: 'Water'},
    {name: 'Swalot', height: 1.7, types: 'Poison'}
]

pokemonList.forEach(function(pokemon) {
    if (pokemon.height < 0.5)
    document.write(pokemon.name + " " + "height:" + pokemon.height + " " + "This is small pokemon" + "<p>");
    else if (1.5 > pokemon.height > 0.5)
    document.write(pokemon.name + " " + "height:" + pokemon.height + " " + "This is medium pokemon" + "<p>");
    else if (pokemon.height > 1.5)
    document.write(pokemon.name + " " + "height:" + pokemon.height + " " + "This is big pokemon" + "<p>");
});