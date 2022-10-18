/*
  1. W pliku data.js pod zmienna "pokemons" znajduje się tablica zawierająca dane wielu pokemonów, masz do niej dostęp również w tym pliku. 
  Chciałbym, abyś użył jej do wyświetlenia wszystkich pokemonów w naszym Pokedexie. 
  W tym celu dla każdego z nich możesz stworzyć nowy element drzeewa DOM i umieścić w nim informacje o Pokemonie (możesz zawrzeć tam jego nazwę, zdjęcie, a na kontener w którym się znajduje nadać specjalną klasę zależnie od typu)
*/

// tutaj złapiemy sekcję, do której będziemy dodawać pokemony
const pokemonsContainer = document.querySelector(".pokemons");

function renderPokemons(pokemons) {
    pokemons.sort(function (a, b) { return a.id - b.id });
    pok = document.getElementById("pokemons");
    pok.querySelectorAll("*").forEach(n => n.remove());

    for (let i = 0; i < pokemons.length; i++)
    {
        let types = pokemons[i].types;
        let pokemon = document.createElement("div");
        let pokemonlabel = document.createElement("figcaption");
        let pokemonpicture = document.createElement(`img`);

        pokemon.setAttribute("class", types[0]);
        pokemonpicture.id = pokemons[i].name;     
        pokemonpicture.src = pokemons[i].image;

        pokemonlabel.innerHTML = pokemons[i].name;
        pokemonlabel.setAttribute("for", pokemonpicture.id);

        pok.appendChild(pokemon);
        pokemon.appendChild(pokemonpicture);
        pokemon.appendChild(pokemonlabel);
    }
    ;
}

// następnie wykonaj uzupełnioną metodę z tablicą pokemons, aby sprawdzić czy wszystko działa
renderPokemons(pokemons);

/*
  2. Przeglądanie całej listy pokemonów może okazać się trochę uciążliwe. Fajnie byłoby skorzystać z filtrów, które już znajdują sie w pliku html. 
  Napisz ciało funkcji które pozwoli nam na:
  - filtrowanie po typie
  - filtrowanie po nazwie (wpisany fragment zawiera się w nazwie pokemona)
*/

function typechecked(types) {
    for (let j = 0; j < types.length; j++) {
        if (document.getElementById(types[j]).checked) return true;
    }
    return false;
}

function namechecked(name) {
    if (name.toLowerCase().includes(document.getElementById("pokemon-name").value) || name.toUpperCase().includes(document.getElementById("pokemon-name").value)) return true;
    return false;
}

function filterPokemons(pokemons) {
  // uzupełnij tutaj
  // zwróć odfiltrowaną tablicę pokemonów
    let table = [];
    for (let i = 0; i < pokemons.length; i++) {
        let types = pokemons[i].types;
        let pokemonname = pokemons[i].name;
        if (!typechecked(types) || !namechecked(pokemonname)) continue;
        table.push(pokemons[i]);
    }
    return table;
}

const form = document.querySelector("form");

function submitForm(event) {
  event.preventDefault();
  // następnie wykonaj uzupełnioną metodę z tablicą pokemons, aby sprawdzić czy wszystko działa
  renderPokemons(filterPokemons(pokemons));
}

form.addEventListener("submit", submitForm);

/*
  3. Pokedex powinien wyglądać trochę lepiej, niż ten tutaj. W folderze znajdziesz plik style.css, w którym możesz ulepszyć wygląd naszego pokedexa
  Liczymy na Twoją kreatywność 😉
*/
