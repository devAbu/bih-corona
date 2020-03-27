setInterval(function(){fetch('https://thevirustracker.com/free-api?countryTotal=BA')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
  
  document.getElementById('title').innerText = "COVID-19 Statistika - Bosna i Hercegovina";
  
    
  document.getElementById('total').innerHTML = `<div class="stats">
      <div class="number">${data.countrydata[0]}</div>
      <div class="factor">Zaraženih</div>
    </div>`;
  
  document.getElementById('recover').innerHTML = `<div class="stats">
      <div class="number">${data.countrydata[0].total_cases}</div>
      <div class="factor">Recovered</div>
    </div>`;
  
  document.getElementById('sick').innerHTML = `<div class="stats">
      <div class="number">${data.countrydata[0].total_recovered}</div>
      <div class="factor">Sick</div>
    </div>`;
  
  document.getElementById('dead').innerHTML = `<div class="stats">
      <div class="number">${data.countrydata[0].total_deaths}</div>
      <div class="factor">Deaths</div>
    </div>`; 

    console.log(data.countrydata[0])
    console.log(data.countrydata[0].total_cases)
    console.log(data.countrydata[0].total_recovered)
    console.log(data.countrydata[0].total_deaths)
    
  });}, 120000);

fetch('https://thevirustracker.com/free-api?countryTotal=BA')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
  
  document.getElementById('title').innerText = "COVID-19 Statistika - Bosna i Hercegovina";
    
  document.getElementById('total').innerHTML = `<div class="stats">
      <div class="number">${data.countrydata[0].total_cases}</div>
      <div class="factor">Zaraženih</div>
    </div>`;
  
  document.getElementById('recover').innerHTML = `<div class="stats">
      <div class="number">${data.countrydata[0].total_recovered}</div>
      <div class="factor">Recovered</div>
    </div>`;
  
  document.getElementById('sick').innerHTML = `<div class="stats">
      <div class="number">${data.countrydata[0].total_active_cases}</div>
      <div class="factor">Sick</div>
    </div>`;
  
  document.getElementById('dead').innerHTML = `<div class="stats">
      <div class="number">${data.countrydata[0].total_deaths}</div>
      <div class="factor">Deaths</div>
    </div>`;  
  });

    

/*
total_cases: 199024
total_recovered: 82779
total_unresolved: 110719
total_deaths: 7991
total_new_cases_today: 803
total_new_deaths_today: 24
total_active_cases: 108254
total_serious_cases: 6417
*/