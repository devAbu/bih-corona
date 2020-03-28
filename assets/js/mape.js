am4core.ready(function () {

	// Themes begin
	am4core.useTheme(am4themes_animated);
	// Themes end

	// Create map instance
	var chart = am4core.create("chartdiv", am4maps.MapChart);

	chart.maxZoomLevel = 1;

	// Set map definition
	chart.geodata = am4geodata_bosniaHerzegovinaCantonsLow;

	//enable scroll
	chart.chartContainer.wheelable = false;

	//scroll
	chart.seriesContainer.draggable = false;
	chart.seriesContainer.resizable = false;

	chart.tapToActivate = false;

	// Set projection
	chart.projection = new am4maps.projections.Miller();

	// Create map polygon series
	var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

	// Exclude Antartica
	polygonSeries.exclude = ["AQ"];

	// Make map load polygon (like country names) data from GeoJSON
	polygonSeries.useGeodata = true;

	// KANTON HOVER IMENA
	//var polygonTemplate = polygonSeries.mapPolygons.template;
	//polygonTemplate.tooltipText = "{name}";
	//polygonTemplate.polygon.fillOpacity = 0.6;


	// KANTON HOVER
	//var hs = polygonTemplate.states.create("hover");
	//hs.properties.fill = chart.colors.getIndex(0);

	// Add image series
	var imageSeries = chart.series.push(new am4maps.MapImageSeries());
	imageSeries.mapImages.template.propertyFields.longitude = "longitude";
	imageSeries.mapImages.template.propertyFields.latitude = "latitude";
	imageSeries.mapImages.template.tooltipText = "{title}: {value}";
	imageSeries.mapImages.template.propertyFields.url = "url";

	//SREDIVANJE KURGOVAAA SREDIVANJE KURGOVAAA SREDIVANJE KURGOVAAA SREDIVANJE KURGOVAAA SREDIVANJE KURGOVAAA SREDIVANJE KURGOVAAA
	var circle = imageSeries.mapImages.template.createChild(am4core.Circle);
	circle.radius = 6;
	circle.propertyFields.fill = "color";

	var circle2 = imageSeries.mapImages.template.createChild(am4core.Circle);
	circle2.radius = 3;
	circle2.propertyFields.fill = "color";

	//SREDIVANJE KURGOVAAA SREDIVANJE KURGOVAAA SREDIVANJE KURGOVAAA SREDIVANJE KURGOVAAA SREDIVANJE KURGOVAAA SREDIVANJE KURGOVAAA



	circle2.events.on("inited", function (event) {
		animateBullet(event.target);
	})


	function animateBullet(circle) {
		var animation = circle.animate([{
			property: "scale",
			from: 1,
			to: 5
		}, {
			property: "opacity",
			from: 1,
			to: 0
		}], 1000, am4core.ease.circleOut);
		animation.events.on("animationended", function (event) {
			animateBullet(event.target.object);
		})
	}

	//BOJEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
	//SVIJETLO PLAVA =< 10
	blue = am4core.color("#faff00")
	//Narandzasta=<50
	yellow = am4core.color("#fbba09");
	//Ljubicasta =<100
	purple = am4core.color("#fc7512");
	//crvena <=500
	red = am4core.color("#fd1d1d");

	imageSeries.data = [{
			"title": "Banja Luka",
			"value": "104",
			"latitude": 44.77583,
			"longitude": 17.18556,
			"color": red
		}, {
			"title": "Sarajevo",
			"value": "13",
			"latitude": 43.84864,
			"longitude": 18.35644,
			"color": yellow
		}, {
			"title": "Konjic",
			"value": "21",
			"latitude": 43.65126,
			"longitude": 17.96082,
			"color": yellow
		}, {
			"title": "Laktaši",
			"value": "10",
			"latitude": 44.90857,
			"longitude": 17.30135,
			"color": blue
		}, {
			"title": "Mostar",
			"value": "10",
			"latitude": 43.34333,
			"longitude": 17.80806,
			"color": blue
		}, {
			"title": "Kozarska Dubica",
			"value": "8",
			"latitude": 45.1767,
			"longitude": 16.8094,
			"color": blue
		}, {
			"title": "Široki Brijeg",
			"value": "12",
			"latitude": 43.3829,
			"longitude": 17.59416,
			"color": yellow
		}, {
			"title": "Bihać",
			"value": "7",
			"latitude": 44.81694,
			"longitude": 15.87083,
			"color": blue
		}, {
			"title": "Teslić",
			"value": "5",
			"latitude": 44.6064,
			"longitude": 17.8597,
			"color": blue
		}, {
			"title": "Goražde",
			"value": "5",
			"latitude": 43.66795,
			"longitude": 18.97564,
			"color": blue
		}, {
			"title": "Prnjavor",
			"value": "4",
			"latitude": 44.8702,
			"longitude": 17.6626,
			"color": blue
		}, {
			"title": "Bijeljina",
			"value": "4",
			"latitude": 44.7587395,
			"longitude": 19.2143707,
			"color": blue
		}, {
			"title": "Zenica",
			"value": "4",
			"latitude": 44.2016907,
			"longitude": 17.9039707,
			"color": blue
		}, {
			"title": "Grude",
			"value": "4",
			"latitude": 43.551914,
			"longitude": 17.377458,
			"color": blue
		}, {
			"title": "Modriča",
			"value": "3",
			"latitude": 44.9975338,
			"longitude": 18.297176,
			"color": blue
		}, {
			"title": "Kneževo",
			"value": "3",
			"latitude": 43.9159,
			"longitude": 17.6791,
			"color": blue
		}, {
			"title": "Bosanski Brod",
			"value": "2",
			"latitude": 45.13747,
			"longitude": 17.98722,
			"color": blue
		}, {
			"title": "Čelinac",
			"value": "3",
			"latitude": 44.7399788,
			"longitude": 17.3188095,
			"color": blue
		}, {
			"title": "Bosanska Gradiška",
			"value": "9",
			"latitude": 45.14484,
			"longitude": 17.25453,
			"color": blue
		}, {
			"title": "Prijedor",
			"value": "2",
			"latitude": 44.97991,
			"longitude": 16.71401,
			"color": blue
		}, {
			"title": "Tešanj",
			"value": "2",
			"latitude": 44.6119,
			"longitude": 17.9855,
			"color": blue
		},
		{
			"title": "Brčko",
			"value": "1",
			"latitude": 44.87278,
			"longitude": 18.80833,
			"color": blue
		}, {
			"title": "Kotor Varoš",
			"value": "1",
			"latitude": 44.6722986,
			"longitude": 17.379073,
			"color": blue
		}, {
			"title": "Čitluk",
			"value": "1",
			"latitude": 43.2286,
			"longitude": 17.7008,
			"color": blue
		}, {
			"title": "Doboj",
			"value": "1",
			"latitude": 44.73179,
			"longitude": 18.08698,
			"color": blue
		}, {
			"title": "Tuzla",
			"value": "8",
			"latitude": 44.53842,
			"longitude": 18.66709,
			"color": blue
		}, {
			"title": "Visoko",
			"value": "1",
			"latitude": 43.98889,
			"longitude": 18.17806,
			"color": blue
		}, {
			"title": "Ribnik",
			"value": "1",
			"latitude": 44.572135,
			"longitude": 16.794551,
			"color": blue
		}, {
			"title": "Bosanska Krupa",
			"value": "1",
			"latitude": 44.8825,
			"longitude": 16.15139,
			"color": blue
		}, {
			"title": "Srbac",
			"value": "1",
			"latitude": 45.0973,
			"longitude": 17.5233,
			"color": blue
		}, {
			"title": "Orašje",
			"value": "1",
			"latitude": 45.058720,
			"longitude": 18.694768,
			"color": blue
		}, {
			"title": "Breza",
			"value": "1",
			"latitude": 44.096139,
			"longitude": 18.273720,
			"color": blue
		}, {
			"title": "Novi Travnik",
			"value": "1",
			"latitude": 44.17133,
			"longitude": 17.65816,
			"color": blue
		}, {
			"title": "Derventa",
			"value": "1",
			"latitude": 44.97839,
			"longitude": 17.90779,
			"color": blue
		}, {
			"title": "Lukavac",
			"value": "1",
			"latitude": 44.543839,
			"longitude": 18.525934,
			"color": blue
		}
	];



}); // end am4core.ready()