
const baseUrl = 'https://swapi.dev/api/people';
const userInput = 'r2';
const movieUrl = '';
let filmArray = [];
let filmString = '';



async function getPeople() {
    const url = baseUrl + userInput;
    const computerScreen = document.querySelector('.computer__screen');
    const responsePromise = await fetch(baseUrl);
    
    if(responsePromise.ok) {
        const data = await responsePromise.json();
        const planetRes = data.results;
        console.log(planetRes);
        

       planetRes.forEach((post) => { 

            const {name, eye_color, hair_color, films} = post;

        
            
            
            

            let div = document.createElement("div");
         div.innerHTML = `
            
                <h3>${name}</h3>
                <ul>
                <li> Eye Color: ${eye_color} Hair: ${hair_color} </li>
                <li>${getMovies(films)}</li>
                </ul>
            
            `;
            div.classList.add('planet');
            computerScreen.appendChild(div);
        });

       
    } else {
        console.error(`Error: ${responsePromise.status}`)
    }
}


async function getMovies(films){

    let filmArray = [];
    let filmString = '';


    filmArray = Array.from(films);
    console.log(filmArray)
        filmArray.forEach(filmURL => fetch(filmURL).then(response => response.json()).then(data => filmString += data.title)
    
    )

    console.log(filmString);
}

getPeople();