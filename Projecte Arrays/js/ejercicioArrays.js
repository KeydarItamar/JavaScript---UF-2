
//Funcion para buscar infomarcion en un JSON
function fetchData(url) {
    return fetch(url)
        .then(response => response.json())
        .catch(error => {
            console.error(`Error al cargar el archivo JSON desde ${url}:`, error);
            throw error;
        });
}


function mostrarTabla() {
    let pokemonArray = [];
    let municipiosArray = [];
    let meteoritosArray = [];
    let moviesArray = [];

    //Concatenamos todos los Json con el metodo .then para cargarlos todos a la vez
    fetchData('/data/pokemon.json')
        .then(data => {
            data.pokemon.forEach(pokemon => {
                pokemonArray.push(pokemon.name);
            });
        })
        .then(() => fetchData('/data/municipis.json'))
        .then(data => {
            data.elements.forEach(muni => {
                municipiosArray.push(muni.municipi_nom);
            });
        })
        .then(() => fetchData('/data/earthMeteorites.json'))
        .then(data => {
            data.meteoritos.forEach(meteo => {
                meteoritosArray.push(meteo.name);
            });
        })
        .then(() => fetchData('/data/movies.json'))
        .then(data => {
            data.movies.forEach(peli => {
                moviesArray.push(peli.title);
            });
        })
        .then(() => {
            let dataArray = [];
            for (let i = 0; i < 1000; i++) {
                dataArray.push({
                    Pokemon: pokemonArray[i],
                    Municipios: municipiosArray[i],
                    Movies: moviesArray[i],
                    Meteoritos: meteoritosArray[i]
                });
            }
            console.table(dataArray);
        })
        .catch(error => console.error('Error al cargar los datos:', error));
}

//Segundo boton que hace el reload de la pantalla. 
function reload(){
    location.reload();
}

function orderAscend(arrayM){
    return  arrayM.sort()
}
function orderDescend(arrayM){
    arrayM.sort();
    arrayM.reverse();
    return arrayM;
}

function orderList(word){
    if (word === 'asc'){
        return orderAscend()
    }else{
        return orderDescend()
    }
}


let pokemons;
let listaPokemons=[];
const headersPokemons= ["num","name","type","weaknesses","height", "weight", "img"];
(async()=>{
    try {
        const response = await fetch('data/pokemon.json');
        if (!response.ok) {
            throw new Error('Error al cargar el archivo JSON');
        }
         pokemons = await response.json();
    } catch (error) {
        console.error('Error:', error);
    }
    pokemons.pokemon.forEach(function(pokemon){
        listaPokemons.push([pokemon.num,pokemon.name, pokemon.type, pokemon.weaknesses, pokemon.height, pokemon.weight, pokemon.img]);
    });
    })();

let municipios;
let listaMunicipios=[];
const headersMunicipios= ["ine","municipi_nom","nombre_habitants", "extensio", "altitud", "municipi_escut"];
(async()=>{
    try {
        const response = await fetch('data/municipis.json');
        if (!response.ok) {
            throw new Error('Error al cargar el archivo JSON');
        }
         municipios = await response.json();
    } catch (error) {
        console.error('Error:', error);
    }
    municipios.elements.forEach(function(municipio){
        listaMunicipios.push([municipio.ine, municipio.municipi_nom, municipio.nombre_habitants,municipio.extensio, municipio.altitud, municipio.municipi_escut]);
    });
    })();

let listaMovies = [];
const headersMovies = ["title","genres", "year","url"];
let movies;
(async()=>{
    try {
        const response = await fetch('data/movies.json');
        if (!response.ok) {
            throw new Error('Error al cargar el archivo JSON');
        }
         movies = await response.json();
    } catch (error) {
        console.error('Error:', error);
    }
    movies.movies.forEach(function(movie){
        listaMovies.push([movie.title, movie.genres, movie.year, movie.url]);
    });
    })();
    
    let meteoritos;
    let listaMeteoritos=[];
    const headersMeteoritos = ["id","name", "year","mass"];
    (async()=>{
        try {
            const response = await fetch('data/earthMeteorites.json');
            if (!response.ok) {
                throw new Error('Error al cargar el archivo JSON');
            }
             meteoritos = await response.json();
        } catch (error) {
            console.error('Error:', error);
        }
            meteoritos.meteoritos.forEach(function(movie){
            listaMeteoritos.push([meteoritos.id, movie.name, movie.year, movie.mass]);
        });
        })();
       
function printTabla(listaJson, headers){
    const tableContainer = document.getElementById("tableContainer");
    tableContainer.innerHTML = "";
    const table = document.createElement("table");
    const headerRow = document.createElement("tr");
    headers.forEach(header => {
        th = document.createElement("th");
        th.textContent = header;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);
        // Crear filas de la tabla
        listaJson.forEach(function(item) {
            const row = document.createElement("tr");
            for(let i = 0; i<headers.length;i++ ){
                const td = document.createElement("td");
                if(headers[i] == "url" || headers[i] == "img" || headers[i]== "municipi_escut"){
                    td.innerHTML = "<img src='" + item[i] + "'>";
                }else{
                td.textContent = item[i];
                }
                row.appendChild(td);
            }
            table.appendChild(row);
        });
    tableContainer.appendChild(table);

}

async function escogerTabla() {
    const selectedJson = document.getElementById("jsonSelector").value;

    // Obtener el JSON correspondiente según la selección
    let jsonToDisplay;
    switch (selectedJson) {
        case "pokemon":
            printTabla(listaPokemons,headersPokemons);
            break;
        case "municipios":
            printTabla(listaMunicipios,headersMunicipios);
            break;
        case "movies":
            printTabla(listaMovies,headersMovies);
            break;
        case "meteoritos":
            printTabla(listaMeteoritos,headersMeteoritos);
            break;
    }
}    
