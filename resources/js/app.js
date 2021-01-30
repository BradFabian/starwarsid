
const baseUrl = 'https://swapi.dev/api/films/1/';
const userInput = 'r2';
const movieUrl = '';

let filmArray = [];
let filmString = '';



async function getFilms() {
    console.log(baseUrl)
    const details = document.querySelector('.movieDetails');
    const url = baseUrl + userInput;
    const computerScreen = document.querySelector('.computer__screen');
    const responsePromise = await fetch(baseUrl);
    
    if(responsePromise.ok) {
        const data = await responsePromise.json();
        const filmRes = data;
        console.log(filmRes);
        

    

            const {title, opening_crawl, director, producer, release_date, characters } = filmRes;

            const className = title.split(' ').join('');

            details.innerHTML = `
            <h2>${title}</h2>
                <ul>
                <li> Director: ${director}</li> 
                <li> Producer: ${producer} </li>
                <li> Release Date: ${release_date} </li>
                </ul> 
            `


            /*
            <h3> Characters In This Movie</h3>
                <ul class='cast ${className}'>
                </ul>
            */
            
            
            

        let div = document.createElement("div");
         div.innerHTML = `
            
                
                <h3>${opening_crawl}</h3>
            
            `;
            div.classList.add('crawl');
            computerScreen.appendChild(div);

           /* getActors(characters, className) */
        

       
    } else {
        console.error(`Error: ${responsePromise.status}`)
    }
}


 /*function getActors(characters, className){

    
    const characterUL = document.querySelector(`.${className}`)

    for(let i = 0; i < characters.length; i++){
        fetch(characters[i], { mode: 'cors'}).then(response => response.json()).then(data => {
     
            const li = document.createElement('li')
      
           li.innerHTML = ` ${data.name} `;
           characterUL.appendChild(li);
        })

      
    }
    
       
        
    


} */

getFilms();