fetch('https://thevirustracker.com/free-api?countryTotal=BA')
  .then((response) => {
    return response.json();
  })
  .then((data) => {

    if (data.countrydata[0].total_new_cases_today > 0) {
        /*${data.countrydata[0].total_cases}*/
        /*${data.countrydata[0].total_new_cases_today}*/
      document.getElementById('total').innerHTML = `<div class="stats">
      <div class="number"> 408 <small> (+40)</small></div>
      <div class="factor text-secondary pt-2">Zaraženih</div>
      </div>`;
    } else {
      document.getElementById('total').innerHTML = `<div class="stats">
      <div class="number">${data.countrydata[0].total_cases} <small> (${data.countrydata[0].total_new_cases_today} )</small></div>
      <div class="factor text-secondary pt-2">Zaraženih</div>
      </div>`;
    }

    document.getElementById('recover').innerHTML = `<div class="stats">
      <div class="number">${data.countrydata[0].total_recovered}</small></div>
      <div class="factor text-success pt-2">Oporavljenih</div>
    </div>`;

    if (data.countrydata[0].total_new_deaths_today > 0) {
        /*${data.countrydata[0].total_deaths}*/
         /*${data.countrydata[0].total_new_deaths_today}*/
      document.getElementById('dead').innerHTML = `<div class="stats">
      <div class="number"> 12 <small> (+2)</small></div>
      <div class="factor text-danger pt-2">Mrtvih</div>
      </div>`;
    } else {
      document.getElementById('dead').innerHTML = `<div class="stats">
      <div class="number"> 12 <small> (+2)</small></div>
      <div class="factor text-danger pt-2">Mrtvih</div>
      </div>`;
    }
  });