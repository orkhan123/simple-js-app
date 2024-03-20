let pokemonList = [
    {name: 'Pikachu', height: 0.4, types:'Electric'},
    {name: 'Seel', height: 1.1, types: 'Water'},
    {name: 'Swalot', height: 1.7, types: 'Poison'}
]

for (let i=0; i < pokemonList.length; i++) 
    if (pokemonList[i].height < 0.5)
    {
    document.write(pokemonList[i].name + "   " + "height:" + pokemonList[i].height + "   " + "This is small pokemon");
    }

    else if (pokemonList[i].height > 0.5)
    {
    document.write(pokemonList[i].name + "   " + "height:" + pokemonList[i].height);
    }