fetch('https://thevirustracker.com/free-api?countryTotal=BA')
  .then((response) => {
    return response.json();
    console.log('juhu')
  })
  .then((data) => {
    console.log('abu')
    document.getElementById('title-n').innerText = "COVID-19 Statistika - Bosna i Hercegovina";

    document.getElementById('total').innerHTML = `<div class="stats">
      <div class="number">${data.countrydata[0].total_cases}</div>
      <div class="factor text-secondary pt-2">Zaraženih</div>
    </div>`;

    document.getElementById('recover').innerHTML = `<div class="stats">
      <div class="number">${data.countrydata[0].total_recovered}</div>
      <div class="factor text-success pt-2">Oporavljenih</div>
    </div>`;

    document.getElementById('sick').innerHTML = `<div class="stats">
      <div class="number">${data.countrydata[0].total_active_cases}</div>
      <div class="factor text-dark pt-2">Bolesnih</div>
    </div>`;

    document.getElementById('dead').innerHTML = `<div class="stats">
      <div class="number">${data.countrydata[0].total_deaths}</div>
      <div class="factor text-danger pt-2">Mrtvih</div>
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