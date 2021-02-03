
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

    const slugUserInput = userInput.value.trim().split(' ').join('');
    
    const url = baseUrl + userInput.value.trim();
    console.log(url)
    const responsePromise = await fetch(url);

  

   
    
    if(responsePromise.ok) {

        
       
        const data = await responsePromise.json();
       
        console.log(data.results);

        if(data.results.length === 0 ){
            details.style.display='block';

            
           return details.innerHTML = `
                
                <h2> No records for "${userInput.value}" exist on SWAPI</h2>
                
                   
                `
            
        }

        if(data.results.length >= 6 ){
            details.style.display='block';

            
           return details.innerHTML = `
                
                <h2> Please enter a Star Wars movie title in the search bar</h2>
                
                   
                `
            
        }
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
                    <p class='opening'>${filmRes.opening_crawl}</p>
                
                `;

            }
          )

            

            

           
            div.classList.add('crawl');
            computerScreen.appendChild(div);
            details.style.display='block';
           
        

       
    } else {

         

        console.error(`Error: ${responsePromise.status}`)
        details.innerHTML = `
            
            <h2>Welcome to the dark side. </h2>
            <h2>Error: ${responsePromise.status} status.</h2>
               
            `
        details.style.display='block';

    }


}



