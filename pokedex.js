const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
 
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            console.log(pokeImg);
            let poketipe0 = data.types[0].type.name;
            poketipo1(poketipe0);
            console.log(poketipe0);
            let pokenombre = data.name;
            pokenombree(pokenombre);
            console.log(pokenombre);
            let hp = data.stats[0].base_stat;
            pokevida(hp);
            console.log(hp);
            let ata = data.stats[1].base_stat;
            pokeatck(ata);
            console.log(ata);
            let def = data.stats[2].base_stat;
            pokedefensa(def);
            console.log(def);
            let ataesp= data.stats[3].base_stat;
            pokeatcke(ataesp);
            console.log(ataesp);
            let defesp = data.stats[4].base_stat;
            pokedefnesae(defesp);
            console.log(defesp);
            let vel = data.stats[5].base_stat;
            pokevel(vel);
            console.log(vel);
            let mov1 = data.moves[Math.floor(Math.random()*100)].move.name;
            pokemov1(mov1);
            console.log(mov1);
            let mov2 = data.moves[Math.floor(Math.random()*100)].move.name;
            pokemov2(mov2);
            console.log(mov2);
            let mov3 = data.moves[Math.floor(Math.random()*100)].move.name;
            pokemov3(mov3);
            console.log(mov3);
            let mov4 = data.moves[Math.floor(Math.random()*100)].move.name;
            pokemov4(mov4);
            console.log(mov4);
            let alt = data.height;
            pokealt(alt);
            console.log(alt);
            let pes = data.weight;
            pokepeso(pes);
            console.log(pes);



            let poketipe1 = data.types[1].type.name;
            poketipo2(poketipe1);
            console.log(poketipe1);
          
        }
        
    })};

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}
const poketipo1 = (url) => {
    const pokeelement = document.getElementById("poketipe0");
    pokeelement.innerHTML = url;
}
const poketipo2 = (url) => {
    const pokeelement = document.getElementById("poketipe1");
    pokeelement.innerHTML = url;
}
const pokenombree = (url) => {
    const pokeneim = document.getElementById("pokenombre");
    pokeneim.innerHTML = url;   
}
const pokevida = (url) => {
    const pokehealt = document.getElementById("hp");
    pokehealt.innerHTML = url;
}
const pokeatck = (url) => {
    const pokeatake = document.getElementById("ata");
    pokeatake.innerHTML = url;
}
const pokedefensa = (url) => {
    const pokedifens = document.getElementById("def");
    pokedifens.innerHTML = url;
}
const pokeatcke = (url) => {
    const pokeatakee = document.getElementById("ataesp");
    pokeatakee.innerHTML = url;
}
const pokedefnesae = (url) => {
    const pokedifense = document.getElementById("defesp");
    pokedifense.innerHTML = url;
}
const pokevel = (url) => {
    const pokefiau = document.getElementById("vel");
    pokefiau.innerHTML = url;
}
const pokemov1 = (url) => {
    const pokemomento1 = document.getElementById("mov1");
    pokemomento1.innerHTML = url;
}
const pokemov2 = (url) => {
    const pokemomento2 = document.getElementById("mov2");
    pokemomento2.innerHTML = url;
}
const pokemov3 = (url) => {
    const pokemomento3 = document.getElementById("mov3");
    pokemomento3.innerHTML = url;
}
const pokemov4 = (url) => {
    const pokemomento4 = document.getElementById("mov4");
    pokemomento4.innerHTML = url;
}
const pokealt = (url) => {
    const pokealtura = document.getElementById("alt");
    pokealtura.innerHTML = url;
}
const pokepeso = (url) => {
    const pokepesou = document.getElementById("pes");
    pokepesou.innerHTML = url;
}