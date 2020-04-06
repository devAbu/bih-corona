$.get("http://localhost/github/bih-corona/php/juhu.php", function (data) {

    console.log(data);
    var juhu = data.replace("\n", "");
    var juhu = data.split('\n')
    console.log(juhu);


    document.getElementById('total').innerHTML = `<div class="stats">
      <div class="number">${juhu[3]} <small>${juhu[6]} </small></div>
      <div class="factor text-secondary pt-2">Zaraženih</div>
      </div>`;



    document.getElementById('recover').innerHTML = `<div class="stats">
      <div class="number">${juhu[15]} </div>
      <div class="factor text-success pt-2">Oporavljenih</div>
    </div>`;



    document.getElementById('dead').innerHTML = `<div class="stats">
      <div class="number">${juhu[9]} <small>${juhu[12]} </small></div>
      <div class="factor text-danger pt-2">Mrtvih</div>
      </div>`;

});

setInterval(() => {
$.get("http://localhost/github/bih-corona/php/juhu.php", function (data) {
    console.log(data);
    var juhu = data.replace("\n", "");
    var juhu = data.split('\n')
    console.log(juhu);


    document.getElementById('total').innerHTML = `<div class="stats">
      <div class="number">${juhu[3]} <small>${juhu[6]} </small></div>
      <div class="factor text-secondary pt-2">Zaraženih</div>
      </div>`;



    document.getElementById('recover').innerHTML = `<div class="stats">
      <div class="number">${juhu[15]} </div>
      <div class="factor text-success pt-2">Oporavljenih</div>
    </div>`;



    document.getElementById('dead').innerHTML = `<div class="stats">
      <div class="number">${juhu[9]} <small>${juhu[12]} </small></div>
      <div class="factor text-danger pt-2">Mrtvih</div>
      </div>`;
    });
}, 10000) 