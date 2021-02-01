
const baseUrl = 'https://swapi.dev/api/films/?search=';
const movieUrl = '';
const form = document.querySelector('.search');
const details = document.querySelector('.movieDetails');
const computerScreen = document.querySelector('.computer__screen');

const div = document.createElement("div");
let filmArray = [];
let filmString = '';



async function getFilms() {

    /* reset to original values*/
    //form.reset();
    computerScreen.innerHTML='';
    details.style.display='none';
   
    const userInput = document.getElementById('userMovie');
    
    
    const url = baseUrl + userInput.value.trim();
   console.log(url);
    const responsePromise = await fetch(url);

  

   
    
    if(responsePromise.ok) {
       
        const data = await responsePromise.json();
       
        console.log(data.results);
        results = data.results;

          results.forEach(
            filmRes => {

               

                details.innerHTML = `
                <h2>${filmRes.title}</h2>
                    <ul>
                    <li> Director: ${filmRes.director}</li> 
                    <li> Producer: ${filmRes.producer} </li>
                    <li> Release Date: ${filmRes.release_date} </li>
                    </ul> 
                `
    
    
               
              
                div.innerHTML = `
                    <p class='episode'> Episode ${filmRes.episode_id}</p>
                    <h1 class='title'> ${filmRes.title}</h1>
                    <p>${filmRes.opening_crawl}</p>
                
                `;

            }
          )

            

            

           
            div.classList.add('crawl');
            computerScreen.appendChild(div);
            details.style.display='block';
           /* getActors(characters, className) */
        

       
    } else {

         

        console.error(`Error: ${responsePromise.status}`)
        details.innerHTML = `
            
            <h2>Welcome to the dark side. </h2>
            <h2>Error: ${responsePromise.status} status.</h2>
               
            `
        details.style.display='block';

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

