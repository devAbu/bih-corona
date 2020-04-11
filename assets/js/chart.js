var w = window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;
$.get("http://localhost/github/bih-corona/php/getDataCities.php", function (data) {
  $(".juhu").html(data);
  var replace = data.replace("\n", "");

  var res = replace.split("\n");
  var array = res.filter(function (res) {
    return /\S/.test(res);
  });

  var i = array.length;

  while (i--) {
    (i + 1) % 3 === 0 && array.splice(i, 1);
  }

  blue = "#faff00"
  //Narandzasta=<50
  yellow = "#fbba09";
  //Ljubicasta =<100
  purple = "#fc7512";
  //crvena <=500
  red = "#fd1d1d";
  anychart.onDocumentReady(function () {

    var dataArray = []

    for (var i = 0; i < array.length; i++) {
      if (array[i + 1] < 10) {
        dataArray.push([array[i], array[i + 1], 1, blue, "#009933", null, {
          enabled: true
        }])
      } else if (array[i + 1] < 50) {
        dataArray.push([array[i], array[i + 1], 1, yellow, "#009933", null, {
          enabled: true
        }])
      } else if (array[i + 1] < 100) {
        dataArray.push([array[i], array[i + 1], 1, puprle, "#009933", null, {
          enabled: true
        }])
      } else {
        dataArray.push([array[i], array[i + 1], 1, red, "#009933", null, {
          enabled: true
        }])

      }


      i++;
    }

    var data = anychart.data.set(
      dataArray
    )



    // map the data


    if (w <= 1024) {
      console.log("juhu")
      var chart = anychart.bar();

      // map the data
      var seriesData_1 = data.mapAs({
        x: 0,
        value: 1,
        fill: 3,
        stroke: 0,
        label: 20
      });

      // create the first series, set the data and name
      var series1 = chart.bar(seriesData_1);
      series1.name("Broj zaraženih");

      series1.labels(true);

      chart.pointWidth(11);
      chart.barGroupsPadding(1);

      // set the chart title
      chart.title("Bosna i Hercegovina - Gradovi");

      // set the titles of the axes
      var xAxis = chart.xAxis();
      var yAxis = chart.yAxis();
      yAxis.title("Broj Zaraženih");

      /* chart.xAxis().labels().rotation(-90) */
      xAxis.overlapMode("allowOverlap");

      // set the container id
      chart.container("cartContainer");

      // initiate drawing the chart
      chart.draw();
    } else {
      var seriesData_1 = data.mapAs({
        x: 0,
        value: 1,
        fill: 3,
        stroke: 5,
        label: 20
      });
      var chart = anychart.column();
      chart.pointWidth(30);
      var series1 = chart.column(seriesData_1);
      series1.name("Broj zaraženih");
      series1.labels(true);
      labels = series1.labels();
      labels.position("center-top");
      labels.anchor("left");
      chart.title("Bosna i Hercegovina - Gradovi");
      var xAxis = chart.xAxis();
      var yAxis = chart.yAxis();
      yAxis.title("Broj Zaraženih");

      chart.xAxis().labels().rotation(-90)
      xAxis.overlapMode("allowOverlap");
      chart.container("cartContainer");

      // initiate drawing the chart
      chart.draw();
    }

  });
});