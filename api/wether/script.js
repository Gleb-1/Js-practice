// // c6eb40a9c55e7ef54f2807a48c71a7fe


fetch('https://api.openweathermap.org/data/2.5/weather?id=162183&appid=c6eb40a9c55e7ef54f2807a48c71a7fe')

.then(function (response) { return response.json()})
.then(function (data) {
console.log(data);
document.querySelector('.package-name').innerHTML =  data.name; 
document.querySelector('.price').innerHTML =  Math.round (data.main.temp - 273) + '&deg'; 
document.querySelector('.disclaimer').innerHTML =  data.weather[0]['description']; 
document.querySelector('.features').innerHTML =  `<img src="https://openweathermap.org/img/wn/04n@2x.png"${data.weather[0]['icon']}>`

})
// .catch(function() {

// });


// https://openweathermap.org/img/wn/04n@2x.png

