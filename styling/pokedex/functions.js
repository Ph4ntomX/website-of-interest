const pokemon = [
    {
        name: "Bulbasaur",
        types: ["grass", "poison"],
    },
    {
        name: "Ivysaur",
        types: ["grass", "poison"],
    },
    {
        name: "Venusaur",
        types: ["grass", "poison"],
    },
    {
        name: "Charmander",
        types: ["fire"],
    },
    {
        name: "Charmeleon",
        types: ["fire"],
    },
    {
        name: "Charizard",
        types: ["fire", "flying"],
    },
    {
        name: "Squirtle",
        types: ["water"],
    },
    {
        name: "Wartortle",
        types: ["water"],
    },
    {
        name: "Blastoise",
        types: ["water"],
    },
    {
        name: "Caterpie",
        types: ["bug"],
    },
    {
        name: "Metapod",
        types: ["bug"],
    },
    {
        name: "Butterfree",
        types: ["bug", "flying"],
    },
    {
        name: "Weedle",
        types: ["bug", "poison"],
    },
    {
        name: "Kakuna",
        types: ["bug", "poison"],
    },
    {
        name: "Beedrill",
        types: ["bug", "poison"],
    },
    {
        name: "Pidgey",
        types: ["normal", "flying"],
    },
    {
        name: "Pidgeotto",
        types: ["normal", "flying"],
    },
    {
        name: "Pidgeot",
        types: ["normal", "flying"],
    },
    {
        name: "Rattata",
        types: ["normal"],
    },
    {
        name: "Raticate",
        types: ["normal"],
    },
    {
        name: "Spearow",
        types: ["normal", "flying"],
    },
    {
        name: "Fearow",
        types: ["normal", "flying"],
    },
    {
        name: "Ekans",
        types: ["poison"],
    },
    {
        name: "Arbok",
        types: ["poison"],
    },
    {
        name: "Pikachu",
        types: ["electric"],
    },
    {
        name: "Raichu",
        types: ["electric"],
    },
    {
        name: "Sandshrew",
        types: ["ground"],
    },
    {
        name: "Sandslash",
        types: ["ground"],
    },
    {
        name: "Nidoran♀",
        types: ["poison"],
    },
    {
        name: "Nidorina",
        types: ["poison"],
    },
    {
        name: "Nidoqueen",
        types: ["poison", "ground"],
    },
    {
        name: "Nidoran♂",
        types: ["poison"],
    },
    {
        name: "Nidorino",
        types: ["poison"],
    },
    {
        name: "Nidoking",
        types: ["poison", "ground"],
    },
    {
        name: "Clefairy",
        types: ["fairy"],
    },
    {
        name: "Clefable",
        types: ["fairy"],
    },
    {
        name: "Vulpix",
        types: ["fire"],
    },
    {
        name: "Ninetales",
        types: ["fire"],
    },
    {
        name: "Jigglypuff",
        types: ["normal", "fairy"],
    },
    {
        name: "Wigglytuff",
        types: ["normal", "fairy"],
    },
    {
        name: "Zubat",
        types: ["poison", "flying"],
    },
    {
        name: "Golbat",
        types: ["poison", "flying"],
    },
    // oddish
    
    {
        name: "Oddish",
        types: ["grass", "poison"],
    },
    {
        name: "Gloom",
        types: ["grass", "poison"],
    },
    {
        name: "Vileplume",
        types: ["grass", "poison"],
    },
    {
        name: "Paras",
        types: ["bug", "grass"],
    },
    {
        name: "Parasect",
        types: ["bug", "grass"],
    },
    {
        name: "Venonat",
        types: ["bug", "poison"],
    },
    {
        name: "Venomoth",
        types: ["bug", "poison"],
    },
    {
        name: "Diglett",
        types: ["ground"],
    },
    {
        name: "Dugtrio",
        types: ["ground"],
    },
    {
        name: "Meowth",
        types: ["normal"],
    },
    {
        name: "Persian",
        types: ["normal"],
    },
    {
        name: "Psyduck",
        types: ["water"],
    },
    {
        name: "Golduck",
        types: ["water"],
    },
    {
        name: "Mankey",
        types: ["fighting"],
    },
    {
        name: "Primeape",
        types: ["fighting"],
    },
    {
        name: "Growlithe",
        types: ["fire"],
    },
    {
        name: "Arcanine",
        types: ["fire"],
    },
    {
        name: "Poliwag",
        types: ["water"],
    },
    {
        name: "Poliwhirl",
        types: ["water"],
    },
    {
        name: "Poliwrath",
        types: ["water", "fighting"],
    },
    {
        name: "Abra",
        types: ["psychic"],
    },
    {
        name: "Kadabra",
        types: ["psychic"],
    },
    {
        name: "Alakazam",
        types: ["psychic"],
    },
    {
        name: "Machop",
        types: ["fighting"],
    },
    {
        name: "Machoke",
        types: ["fighting"],
    },
    {
        name: "Machamp",
        types: ["fighting"],
    },
    {
        name: "Bellsprout",
        types: ["grass", "poison"],
    },
    {
        name: "Weepinbell",
        types: ["grass", "poison"],
    },
    {
        name: "Victreebel",
        types: ["grass", "poison"],
    },
    {
        name: "Tentacool",
        types: ["water", "poison"],
    },
    {
        name: "Tentacruel",
        types: ["water", "poison"],
    },
    {
        name: "Geodude",
        types: ["rock", "ground"],
    },
    {
        name: "Graveler",
        types: ["rock", "ground"],
    },
    {
        name: "Golem",
        types: ["rock", "ground"],
    },
    {
        name: "Ponyta",
        types: ["fire"],
    },
    {
        name: "Rapidash",
        types: ["fire"],
    },
    {
        name: "Slowpoke",
        types: ["water", "psychic"],
    },
    {
        name: "Slowbro",
        types: ["water", "psychic"],
    },
    {
        name: "Magnemite",
        types: ["electric", "steel"],
    },
    {
        name: "Magneton",
        types: ["electric", "steel"],
    },
    {
        name: "Farfetch'd",
        types: ["normal", "flying"],
    },
    {
        name: "Doduo",
        types: ["normal", "flying"],
    },
    {
        name: "Dodrio",
        types: ["normal", "flying"],
    },
    {
        name: "Seel",
        types: ["water"],
    },
    {
        name: "Dewgong",
        types: ["water", "ice"],
    },
    {
        name: "Grimer",
        types: ["poison"],
    },
    {
        name: "Muk",
        types: ["poison"],
    },
    {
        name: "Shellder",
        types: ["water"],
    },
    {
        name: "Cloyster",
        types: ["water", "ice"],
    },
    {
        name: "Gastly",
        types: ["ghost", "poison"],
    },
    {
        name: "Haunter",
        types: ["ghost", "poison"],
    },
    {
        name: "Gengar",
        types: ["ghost", "poison"],
    },
    {
        name: "Onix",
        types: ["rock", "ground"],
    },
    {
        name: "Drowzee",
        types: ["psychic"],
    },
    {
        name: "Hypno",
        types: ["psychic"],
    },
    {
        name: "Krabby",
        types: ["water"],
    },
    {
        name: "Kingler",
        types: ["water"],
    },
    {
        name: "Voltorb",
        types: ["electric"],
    },
    {
        name: "Electrode",
        types: ["electric"],
    },
    {
        name: "Exeggcute",
        types: ["grass", "psychic"],
    },
    {
        name: "Exeggutor",
        types: ["grass", "psychic"],
    },
    {
        name: "Cubone",
        types: ["ground"],
    },
    {
        name: "Marowak",
        types: ["ground"],
    },
    {
        name: "Hitmonlee",
        types: ["fighting"],
    },
    {
        name: "Hitmonchan",
        types: ["fighting"],
    },
    {
        name: "Lickitung",
        types: ["normal"],
    },
    {
        name: "Koffing",
        types: ["poison"],
    },
    {
        name: "Weezing",
        types: ["poison"],
    },
    {
        name: "Rhyhorn",
        types: ["ground", "rock"],
    },
    {
        name: "Rhydon",
        types: ["ground", "rock"],
    },
    {
        name: "Chansey",
        types: ["normal"],
    },
    {
        name: "Tangela",
        types: ["grass"],
    },
    {
        name: "Kangaskhan",
        types: ["normal"],
    },
    {
        name: "Horsea",
        types: ["water"],
    },
    {
        name: "Seadra",
        types: ["water"],
    },
    {
        name: "Goldeen",
        types: ["water"],
    },
    {
        name: "Seaking",
        types: ["water"],
    },
    {
        name: "Staryu",
        types: ["water"],
    },
    {
        name: "Starmie",
        types: ["water", "psychic"],
    },
    {
        name: "Mr. Mime",
        types: ["psychic", "fairy"],
    },
    {
        name: "Scyther",
        types: ["bug", "flying"],
    },
    {
        name: "Jynx",
        types: ["ice", "psychic"],
    },
    {
        name: "Electabuzz",
        types: ["electric"],
    },
    {
        name: "Magmar",
        types: ["fire"],
    },
    {
        name: "Pinsir",
        types: ["bug"],
    },
    {
        name: "Tauros",
        types: ["normal"],
    },
    {
        name: "Magikarp",
        types: ["water"],
    },
    {
        name: "Gyarados",
        types: ["water", "flying"],
    },
    {
        name: "Lapras",
        types: ["water", "ice"],
    },
    {
        name: "Ditto",
        types: ["normal"],
    },
    {
        name: "Eevee",
        types: ["normal"],
    },
    {
        name: "Vaporeon",
        types: ["water"],
    },
    {
        name: "Jolteon",
        types: ["electric"],
    },
    {
        name: "Flareon",
        types: ["fire"],
    },
    {
        name: "Porygon",
        types: ["normal"],
    },
    {
        name: "Omanyte",
        types: ["rock", "water"],
    },
    {
        name: "Omastar",
        types: ["rock", "water"],
    },
    {
        name: "Kabuto",
        types: ["rock", "water"],
    },
    {
        name: "Kabutops",
        types: ["rock", "water"],
    },
    {
        name: "Aerodactyl",
        types: ["rock", "flying"],
    },
    {
        name: "Snorlax",
        types: ["normal"],
    },
    {
        name: "Articuno",
        types: ["ice", "flying"],
    },
    {
        name: "Zapdos",
        types: ["electric", "flying"],
    },
    {
        name: "Moltres",
        types: ["fire", "flying"],
    },
    {
        name: "Dratini",
        types: ["dragon"],
    },
    {
        name: "Dragonair",
        types: ["dragon"],
    },
    {
        name: "Dragonite",
        types: ["dragon", "flying"],
    },
    {
        name: "Mewtwo",
        types: ["psychic"],
    },
    {
        name: "Mew",
        types: ["psychic"],
    }
]

let entries = []

// Create a function that converts numbers to add zeros at the front. ie 1 -> 001, 10 -> 010
function addZeros(number) {
    return number.toString().padStart(3, '0')
}

function toggleShinyMode() {
    const shinyEnabled = document.getElementById('shinySwitch').checked;

    entries.forEach((pokemon, index) => {
        const basePath = "/assets/pokedex/"
        const shinyPath = "/assets/pokedex/shiny/"
        const image = pokemon.querySelector(".card-img-top")
        image.src = shinyEnabled
            ? shinyPath + (index + 1).toString() + ".png"
            : basePath + (index + 1).toString() + ".png";
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const template = document.querySelector("#template")
    const dex = document.querySelector("#dex")
    pokemon.forEach((pokemon, index) => {
        index++;

        const clone = document.importNode(template, true)
        const name = clone.querySelector(".card-title")
        const entryNumber = clone.querySelector(".card-text")
        const image = clone.querySelector(".card-img-top")

        entryNumber.innerText = `#${addZeros(index)}`
        name.innerText = pokemon.name

        image.src = "/assets/pokedex/" + index.toString() + ".png"
        image.alt = pokemon.name

        const typesParent = clone.querySelector(".typings")
        const typingTemplate = clone.querySelector(".badge")

        pokemon.types.forEach((type) => {
            const cloneType = typingTemplate.cloneNode(true)
            cloneType.innerText = type.toUpperCase()
            cloneType.classList.add("bg-" + type)

            cloneType.classList.remove("d-none")

            typesParent.appendChild(cloneType)
        })

        clone.classList.remove("d-none")

        entries.push(clone)
        
        dex.appendChild(clone)
    })

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.scroll-animate').forEach((el) => observer.observe(el));

    const rightSidebar = document.getElementById('right-sidebar');

    document.getElementById('show-right-sidebar').addEventListener('click', () => {
        rightSidebar.classList.add('show');
    });

    document.getElementById('close-right-sidebar').addEventListener('click', () => {
        rightSidebar.classList.remove('show');
    });

    rightSidebar.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            rightSidebar.classList.remove('show');
        });
    });
})