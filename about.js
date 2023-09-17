const searchInput = document.querySelector('input');
const searchBtn = document.querySelector('button');
const cityData = document.querySelector('#city-data'); 

searchBtn.addEventListener('click',function(){
    const input = searchInput.value
    
    checkData(input).then((data) => {
        cityData.innerHTML = `<h3 class="text-center text-uppercase">${data.location.name}</h3>
        <p class="text-center text-secondary">${data.current.condition.text}</p>
        <div class="text-center">
           <img src='https:${data.current.condition.icon}'>
        </div>
        <h1 class="text-center">${data.current.temp_c}</h1>
        <div class="row row-cols-2">
            <div class="border-end border-black d-flex flex-column justify-content-end text-end">
                <span>min</span>
                <span>17.14</span>
            </div>
            <div class="border-end border-white d-flex flex-column">
                <span>max</span>
                <span>${data.current.temp_f}</span>
            </div>
        </div>`
    });
});

async function checkData(cityName){
    const data = await fetch(`http://api.weatherapi.com/v1/current.json?key=d18e304704a44a208db102705232908&q=${cityName}=n`);
    const response = await data.json();
    console.log(response);
    return response
}

{/*  */}






