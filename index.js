// fetch('https://api.openweathermap.org/data/2.5/weather?q=Silver%20Spring,4369596&appid=92307eec907abfb1b45426db988b4fd6')
//   .then(response => response.json())
//   .then(data => console.log(data));

fetch('https://api.openweathermap.org/data/2.5/weather?q=Silver%20Spring,4369596&appid=92307eec907abfb1b45426db988b4fd6')
  .then(response => response.json())
  .then(data => document.querySelector('p').innerHTML = JSON.stringify(data["weather"]));

