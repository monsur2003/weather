const api_key  = `d5f590f31131e976ad747cf71595d36c`

const loadWeather = city =>{
    document.getElementById('input').value=''
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`
    fetch(URL)
    .then(res=>res.json())
    .then(data=> displayTemp(data))
}

const displayTemp= data =>{
    console.log(data);
    const cityName = document.getElementById('city-name');
    const temp = document.getElementById('temp')
    
    const {name} = data
   temp.innerText = data.main.temp
    cityName.innerText= name
    const cloud = document.getElementById('cloud')
    // cloud.innerHTML= 
}
document.getElementById('src-btn').addEventListener('click',function(){
   
   const searchValue =  document.getElementById('input').value
    const city = searchValue
    loadWeather(city)
})
loadWeather('dhaka')


