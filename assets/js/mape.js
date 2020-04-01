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

	$.get("https://covid-bih.abocdev.com/php/getDataCities.php", function (data) {
		var replace = data.replace("\n", "");

		var res = replace.split("\n");
		var array = res.filter(function (res) {
			return /\S/.test(res);
		});

		var i = array.length;

		while (i--) {
			(i + 1) % 3 === 0 && array.splice(i, 1);
		}


		BanjaLukaLat = 44.77583;
		BanjaLkaLong = 17.18556;

		KonjicLat = 43.65126;
		KonjicLong = 17.96082;

		SarajevoLat = 43.84864;
		SarajevoLong = 18.35644;

		IlidzaLat = 43.831406;
		IlidzaLong = 18.300211;

		SirokiBrijegLat = 43.3829;
		SirokiBrijegLong = 17.59416;

		LaktasiLat = 44.90857;
		LaktasiLong = 17.30135;

		MostarLat = 43.34333;
		MostarLong = 17.80806;

		BosanskaGradiskaLat = 45.14484;
		BosanskaGradiskaLong = 17.25453;

		KozarskaDubicaLat = 45.1767;
		KozarskaDubicaLong = 16.8094;

		KakanjLat = 44.13311;
		KakanjLong = 18.12292

		BihacLat = 44.81694;
		BihacLong = 15.87083;

		SrebrenikLat = 44.70819;
		SrebrenikLong = 18.48834;

		TeslicLat = 44.6064;
		TeslicLong = 17.8597;

		GorazdeLat = 43.66795;
		GorazdeLong = 18.9756;

		PrnjavorLat = 44.8702;
		PrnjavorLong = 17.6626;

		ZenicaLat = 44.2016907;
		ZenicaLong = 17.9039707;

		KnezevoLat = 43.9159;
		KnezevoLong = 17.6791;

		BijeljinaLat = 44.7587395;
		BijeljinaLong = 19.2143707;

		GrudeLat = 43.551914;
		GrudeLong = 17.377458;

		ModricaLat = 44.9975338;
		ModricaLong = 18.297176;

		BosanskiBrodLat = 45.13747;
		BosanskiBrodLong = 17.98722;

		CelinacLat = 44.7399788;
		CelinacLong = 17.3188095

		PrijedorLat = 44.97991;
		PrijedorLong = 16.71401;

		TesanjLat = 44.6119;
		TesanjLong = 17.9855;

		BrckoLat = 44.87278;
		BrckoLong = 18.80833;

		KotorVarosLat = 44.6722986;
		KotorVarosLong = 17.379073;

		CitlukLat = 43.2286;
		CitlukLong = 17.7008;

		DobojLat = 44.73179;
		DobojLong = 18.08698;

		ZiviniceLat = 44.44929;
		ZiviniceLong = 18.64978;

		TuzlaLat = 44.53842;
		TuzlaLong = 18.66709;

		VisokoLat = 43.98889;
		VisokoLong = 18.17806;

		RibnikLat = 44.572135;
		RibnikLong = 16.794551;

		BosanskaKrupaLat = 44.8825;
		BosanskaKrupaLong = 16.15139;

		SrbacLat = 45.0973;
		SrbacLong = 17.5233;

		OrasjeLat = 45.008762;
		OrasjeLong = 18.687014;

		BrezaLat = 44.096139;
		BrezaLong = 18.273720;

		VogoscaLat = 43.90225;
		VogoscaLong = 18.34438;

		CazinLat = 44.96694;
		CazinLong = 15.94306;

		GornjiVakufLat = 43.93806;
		GornjiVakufLong = 17.58833;

		NoviTravnikLat = 44.17133;
		NoviTravnikLong = 17.65816;

		DerventaLat = 44.97839;
		DerventaLong = 17.90779;

		LukavacLat = 44.543839;
		LukavacLong = 18.525934;

		IlijasLat = 43.95128;
		IlijasLong = 18.27128;

		ZepceLat = 44.42667;
		ZepceLong = 18.03778;

		PosusjeLat = 43.4666648;
		PosusjeLong = 17.333332;

		ZavidoviciLat = 44.44583;
		ZavidoviciLong = 18.14972;

		IstocnaIlidzaLat = 43.756194;
		IstocnaIlidzaLong = 18.268770;

		PaleLat = 43.817244;
		PaleLong = 18.568508;

		MiliciLat = 44.167391;
		MiliciLong = 19.075715;

		VitezLat = 44.158541;
		VitezLong = 17.782145;

		GracanicaLat = 44.705293;
		GracanicaLong = 18.308144;

		SekoviciLat = 44.297118;
		SekoviciLong = 18.854044;

		VelikaKladusaLat = 45.185453;
		VelikaKladusaLong = 15.805206;

		MrkonjicGradLat = 44.417627;
		MrkonjicGradLong = 17.084829;

		SipovoLat = 44.284349;
		SipovoLong = 17.087946;

		JablanicaLat = 43.657049;
		JablanicaLong = 17.758448;

		ZvornikLat = 44.386185;
		ZvornikLong = 19.102832;

		var colorFill;

		var dataArray2 = []
		for (var i = 0; i < array.length; i++) {


			if (array[i + 1] < 10) {
				colorFill = am4core.color("#faff00")
			} else if (array[i + 1] < 50) {
				colorFill = am4core.color("#fbba09");
			} else if (array[i + 1] < 100) {
				colorFill = am4core.color("#fc7512");
			} else {
				colorFill = am4core.color("#fd1d1d");
			}

			if (array[i] == "Banja Luka") {
				lat = BanjaLukaLat
				long = BanjaLkaLong
			} else if (array[i] == "Konjic") {
				lat = KonjicLat
				long = KonjicLong
			} else if (array[i] == "Tuzla") {
				lat = TuzlaLat
				long = TuzlaLong
			} else if (array[i] == "Mostar") {
				lat = MostarLat
				long = MostarLong
			} else if (array[i] == "Čitluk") {
				lat = CitlukLat
				long = CitlukLong
			} else if (array[i] == "Laktaši") {
				lat = LaktasiLat
				long = LaktasiLong
			} else if (array[i] == "Široki Brijeg") {
				lat = SirokiBrijegLat
				long = SirokiBrijegLong
			} else if (array[i] == "Zenica") {
				lat = ZenicaLat
				long = ZenicaLong
			} else if (array[i] == "Srebrenik") {
				lat = SrebrenikLat
				long = SrebrenikLong
			} else if (array[i] == "Sarajevo") {
				lat = SarajevoLat
				long = SarajevoLong
			} else if (array[i] == "Ilidža") {
				lat = IlidzaLat
				long = IlidzaLong
			} else if (array[i] == "Bihać") {
				lat = BihacLat
				long = BihacLong
			} else if (array[i] == "Bosanska Gradiška") {
				lat = BosanskaGradiskaLat
				long = BosanskaGradiskaLong
			} else if (array[i] == "Bijeljina") {
				lat = BijeljinaLat
				long = BijeljinaLong
			} else if (array[i] == "Kozarska Dubica") {
				lat = KozarskaDubicaLat
				long = KozarskaDubicaLong
			} else if (array[i] == "Teslić") {
				lat = TeslicLat
				long = TeslicLong
			} else if (array[i] == "Goražde") {
				lat = GorazdeLat
				long = GorazdeLong
			} else if (array[i] == "Brčko") {
				lat = BrckoLat
				long = BrckoLong
			} else if (array[i] == "Kneževo") {
				lat = KnezevoLat
				long = KnezevoLong
			} else if (array[i] == "Prnjavo") {
				lat = PrnjavorLat
				long = PrnjavorLong
			} else if (array[i] == "Kotor Varoš") {
				lat = KotorVarosLat
				long = KotorVarosLong
			} else if (array[i] == "Zavidovići") {
				lat = ZavidoviciLat
				long = ZavidoviciLong
			} else if (array[i] == "Grude") {
				lat = GrudeLat
				long = GrudeLong
			} else if (array[i] == "Posušje") {
				lat = PosusjeLat
				long = PosusjeLong
			} else if (array[i] == "Čelinac") {
				lat = CelinacLat
				long = CelinacLong
			} else if (array[i] == "Ribnik") {
				lat = RibnikLat
				long = RibnikLong
			} else if (array[i] == "Kakanj") {
				lat = KakanjLat
				long = KakanjLong
			} else if (array[i] == "Modriča") {
				lat = ModricaLat
				long = ModricaLong
			} else if (array[i] == "Žepče") {
				lat = ZepceLat
				long = ZepceLong
			} else if (array[i] == "Prijedor") {
				lat = PrijedorLat
				long = PrijedorLong
			} else if (array[i] == "Bosanski Brod") {
				lat = BosanskiBrodLat
				long = BosanskiBrodLong
			} else if (array[i] == "Orašje") {
				lat = OrasjeLat
				long = OrasjeLong
			} else if (array[i] == "Gornji Vakuf - Uskoplje") {
				lat = GornjiVakufLat
				long = GornjiVakufLong
			} else if (array[i] == "Istočna Ilidža") {
				lat = IstocnaIlidzaLat
				long = IstocnaIlidzaLong
			} else if (array[i] == "Tešanj") {
				lat = TesanjLat
				long = TesanjLong
			} else if (array[i] == "Novi Travnik") {
				lat = NoviTravnikLat
				long = NoviTravnikLong
			} else if (array[i] == "Lukavac") {
				lat = LukavacLat
				long = LukavacLong
			} else if (array[i] == "Pale") {
				lat = PaleLat
				long = PaleLong
			} else if (array[i] == "Visoko") {
				lat = VisokoLat
				long = VisokoLong
			} else if (array[i] == "Doboj") {
				lat = DobojLat
				long = DobojLong
			} else if (array[i] == "Živinice") {
				lat = ZiviniceLat
				long = ZiviniceLong
			} else if (array[i] == "Milići") {
				lat = MiliciLat
				long = MiliciLong
			} else if (array[i] == "Vitez") {
				lat = VitezLat
				long = VitezLong
			} else if (array[i] == "Srbac") {
				lat = SrbacLat
				long = SrbacLong
			} else if (array[i] == "Breza") {
				lat = BrezaLat
				long = BrezaLong
			} else if (array[i] == "Zvornik") {
				lat = ZvornikLat
				long = ZvornikLong
			} else if (array[i] == "Gračanica") {
				lat = GracanicaLat
				long = GracanicaLong
			} else if (array[i] == "Vogošća") {
				lat = VogoscaLat
				long = VogoscaLong
			} else if (array[i] == "Šekovići") {
				lat = SekoviciLat
				long = SekoviciLong
			} else if (array[i] == "Cazin") {
				lat = CazinLat
				long = CazinLong
			} else if (array[i] == "Velika Kladuša") {
				lat = VelikaKladusaLat
				long = VelikaKladusaLong
			} else if (array[i] == "Bosanska Krupa") {
				lat = BosanskaKrupaLat
				long = BosanskaKrupaLong
			} else if (array[i] == "Ilijaš") {
				lat = IlijasLat
				long = IlijasLong
			} else if (array[i] == "Derventa") {
				lat = DerventaLat
				long = DerventaLong
			} else if (array[i] == "Mrkonjić Grad") {
				lat = MrkonjicGradLat
				long = MrkonjicGradLong
			} else if (array[i] == "Šipovo") {
				lat = SipovoLat
				long = SipovoLong
			} else if (array[i] == "Jablanica") {
				lat = JablanicaLat
				long = JablanicaLong
			}


			dataArray2.push({
				"title": `${array[i]}`,
				"value": `${array[i + 1]}`,
				"latitude": lat,
				"longitude": long,
				"color": `${colorFill}`
			})


			i++;
		}



		imageSeries.data =
			dataArray2;



	}); // end am4core.ready()
});