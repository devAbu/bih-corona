$.get("https://", function (data) {
    var juhu = data.split('\n')

    document.getElementById('total').innerHTML = `<div class="stats">
      <div class="number">${juhu[0]} <small>${juhu[1]} </small></div>
      <div class="factor text-secondary pt-2">Zaraženih</div>
      </div>`;



    document.getElementById('recover').innerHTML = `<div class="stats">
      <div class="number">${juhu[2]} <small>${juhu[3]}</small></div>
      <div class="factor text-success pt-2">Oporavljenih</div>
    </div>`;



    document.getElementById('dead').innerHTML = `<div class="stats">
      <div class="number">${juhu[4]} <small>${juhu[5]} </small></div>
      <div class="factor text-danger pt-2">Mrtvih</div>
      </div>`;

});

setInterval(() => {
    console.log('juhu')
    $.get("http://localhost/github/bih-corona/php/getData.php", function (data) {
        var juhu = data.split('\n')

        document.getElementById('total').innerHTML = `<div class="stats">
      <div class="number">${juhu[0]} <small>${juhu[1]} </small></div>
      <div class="factor text-secondary pt-2">Zaraženih</div>
      </div>`;



        document.getElementById('recover').innerHTML = `<div class="stats">
      <div class="number">${juhu[2]} <small>${juhu[3]}</small></div>
      <div class="factor text-success pt-2">Oporavljenih</div>
    </div>`;



        document.getElementById('dead').innerHTML = `<div class="stats">
      <div class="number">${juhu[4]} <small>${juhu[5]} </small></div>
      <div class="factor text-danger pt-2">Mrtvih</div>
      </div>`;

    });
}, 10000)