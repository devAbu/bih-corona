anychart.onDocumentReady(function () {

    // create a chart
    var chart = anychart.bar();

    // create a data set
    var data = anychart.data.set([
        ["Banja Luka", 133, 1, "#fd1d1d", null, {
            enabled: true
        }],
        ["Konjic", 25, 1, "#fbba09", "#fbba09", null, {
            enabled: true
        }],
        ["Tuzla", 17, 1, "#fbba09", "#faff00", null, {
            enabled: true
        }],
        ["Sarajevo", 15, 1, "#fbba09", "#fbba09", null, {
            enabled: true
        }],
        ["Široki Brijeg", 13, 1, "#fbba09", "#fbba09", null, {
            enabled: true
        }],
        ["Laktaši", 12, 1, "#fbba09", "#faff00", null, {
            enabled: true
        }],
        ["Mostar", 12, 1, "#fbba09", "#faff00", null, {
            enabled: true
        }],        
        ["Bosanska Gradiška", 10, 1, "#faff00", "#faff00", null, {
            enabled: true
        }],
        ["Kozarska Dubica", 8, 1, "#faff00", "#faff00", null, {
            enabled: true
        }],
        ["Bihać", 7, 1, "#faff00", "#faff00", null, {
            enabled: true
        }],
        ["Čitluk", 7, 1, "#faff00", "#faff00", null, {
            enabled: true
        }],
        ["Goražde", 6, 1, "#faff00", "#faff00", null, {
            enabled: true
        }],
        ["Teslić", 6, 1, "#faff00", "#faff00", null, {
            enabled: true
        }],
        ["Zenica", 5, 1, "#faff00", "#faff00", null, {
            enabled: true
        }],
        ["Prnjavor", 5, 1, "#faff00", "#faff00", null, {
            enabled: true
        }],
        ["Kneževo", 5, 1, "#faff00", "#faff00", null, {
            enabled: true
        }],
        ["Bijeljina", 4, 1, "#faff00", "#faff00", null, {
            enabled: true
        }],
        ["Grude", 4, 1, "#faff00", "#faff00", null, {
            enabled: true
        }],
        ["Čelinac", 3, 1, "#faff00", "#faff00", null, {
            enabled: true
        }],
        ["Posušje", 3, 1, "#faff00", "#faff00", null, {
            enabled: true
        }],
        ["Brčko", 3, 1, "#faff00", "#faff00", null, {
            enabled: true
        }],
        ["Modriča", 3, 1, "#faff00", "#faff00", null, {
            enabled: true
        }],
        ["Prijedor", 2, 1, "#faff00", "#faff00", null, {
            enabled: true
        }],
        ["Bosanski Brod", 2, 1, "#faff00", "#faff00", null, {
            enabled: true
        }],
        ["Kotor Varoš", 2, 1, "#faff00", "#faff00", null, {
            enabled: true
        }],
        ["Tešanj", 2, 1, "#faff00", "#faff00", null, {
            enabled: true
        }],
        ["Ribnik", 2, 1, "#faff00", "#faff00", null, {
            enabled: true
        }],
        ["Visoko", 1, 1, "#faff00", "#faff00", null, {
            enabled: true
        }],
        ["Srbac", 1, 1, "#faff00", "#faff00", null, {
            enabled: true
        }],
        ["Breza", 1, 1, "#faff00", "#faff00", null, {
            enabled: true
        }],
        ["Lukavac", 1, 1, "#faff00", "#faff00", null, {
            enabled: true
        }],
        ["Orašje", 1, 1, "#faff00", "#faff00", null, {
            enabled: true
        }],
        ["Zavidovići", 1, 1, "#faff00", "#faff00", null, {
            enabled: true
        }],
        ["Novi Travnik", 1, 1, "#faff00", "#faff00", null, {
            enabled: true
        }],
        ["Bosanska Krupa", 1, 1, "#faff00", "#faff00", null, {
            enabled: true
        }],
        ["Derventa", 1, 1, "#faff00", "#faff00", null, {
            enabled: true
        }],
        ["Doboj", 1, 1, "#faff00", "#faff00", null, {
            enabled: true
        }]
    ]);


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
    /* labels = series1.labels();
    labels.position("center-top");
    labels.anchor("left"); */

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
    chart.container("cartContainerMobile");

    // initiate drawing the chart
    chart.draw();
});