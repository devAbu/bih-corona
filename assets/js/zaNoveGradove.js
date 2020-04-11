$.get("http://localhost/github/bih-corona/php/getData.php", function (a) {
        var o = a.split("\n");
        (document.getElementById(
            "total"
        ).innerHTML = `<div class="stats">\n      <div class="number">${o[0]} <small>${o[1]} </small></div>\n      <div class="factor text-secondary pt-2">Zaraženih</div>\n      </div>`),
        (document.getElementById(
            "recover"
        ).innerHTML = `<div class="stats">\n      <div class="number">${o[2]} <small>${o[3]}</small></div>\n      <div class="factor text-success pt-2">Oporavljenih</div>\n    </div>`),
        (document.getElementById(
            "dead"
        ).innerHTML = `<div class="stats">\n      <div class="number">${o[4]} <small>${o[5]} </small></div>\n      <div class="factor text-danger pt-2">Mrtvih</div>\n      </div>`);
    }) /*OVDJEE ZA FAIL.fail(function() {alert( "error" );})*/ ,
    setInterval(() => {
        $.get("http://localhost/github/bih-corona/php/getData.php", function (a) {
            var o = a.split("\n");
            (document.getElementById(
                "total"
            ).innerHTML = `<div class="stats">\n      <div class="number">${o[0]} <small>${o[1]} </small></div>\n      <div class="factor text-secondary pt-2">Zaraženih</div>\n      </div>`),
            (document.getElementById(
                "recover"
            ).innerHTML = `<div class="stats">\n      <div class="number">${o[2]} <small>${o[3]}</small></div>\n      <div class="factor text-success pt-2">Oporavljenih</div>\n    </div>`),
            (document.getElementById(
                "dead"
            ).innerHTML = `<div class="stats">\n      <div class="number">${o[4]} <small>${o[5]} </small></div>\n      <div class="factor text-danger pt-2">Mrtvih</div>\n      </div>`);
        });
    }, 1e4);
var w =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
am4core.ready(function () {
    am4core.useTheme(am4themes_animated);
    var a = am4core.create("chartdiv", am4maps.MapChart);
    (a.maxZoomLevel = 1),
    (a.geodata = am4geodata_bosniaHerzegovinaCantonsLow),
    (a.chartContainer.wheelable = !1),
    (a.seriesContainer.draggable = !1),
    (a.seriesContainer.resizable = !1),
    (a.tapToActivate = !1),
    (a.projection = new am4maps.projections.Miller());
    var o = a.series.push(new am4maps.MapPolygonSeries());
    (o.exclude = ["AQ"]), (o.useGeodata = !0);
    var n,
        t,
        e = a.series.push(new am4maps.MapImageSeries());
    ((e.mapImages.template.propertyFields.longitude = "longitude"),
        (e.mapImages.template.propertyFields.latitude = "latitude"),
        (e.mapImages.template.tooltipText = "{title}: {value}"),
        (e.mapImages.template.propertyFields.url = "url"),
        w <= 1024) ?
    (((n = e.mapImages.template.createChild(am4core.Circle)).radius = 3),
        (n.propertyFields.fill = "color"),
        ((t = e.mapImages.template.createChild(am4core.Circle)).radius = 2),
        (t.propertyFields.fill = "color")) :
    (((n = e.mapImages.template.createChild(am4core.Circle)).radius = 6),
        (n.propertyFields.fill = "color"),
        ((t = e.mapImages.template.createChild(am4core.Circle)).radius = 3),
        (t.propertyFields.fill = "color"));
    t.events.on("inited", function (a) {
            !(function a(o) {
                var n = o.animate(
                    [{
                            property: "scale",
                            from: 1,
                            to: 5,
                        },
                        {
                            property: "opacity",
                            from: 1,
                            to: 0,
                        },
                    ],
                    1e3,
                    am4core.ease.circleOut
                );
                n.events.on("animationended", function (o) {
                    a(o.target.object);
                });
            })(a.target);
        }),
        $.get("http://localhost/github/bih-corona/php/getDataCities.php", function (a) {
            for (
                var o,
                    n = a
                    .replace("\n", "")
                    .split("\n")
                    .filter(function (a) {
                        return /\S/.test(a);
                    }),
                    t = n.length; t--;

            )
                (t + 1) % 3 == 0 && n.splice(t, 1);
            (BanjaLukaLat = 44.77583),
            (BanjaLkaLong = 17.18556),
            (KonjicLat = 43.65126),
            (KonjicLong = 17.96082),
            (SarajevoLat = 43.84864),
            (SarajevoLong = 18.35644),
            (IlidzaLat = 43.831406),
            (IlidzaLong = 18.300211),
            (SirokiBrijegLat = 43.3829),
            (SirokiBrijegLong = 17.59416),
            (LaktasiLat = 44.90857),
            (LaktasiLong = 17.30135),
            (MostarLat = 43.34333),
            (MostarLong = 17.80806),
            (BosanskaGradiskaLat = 45.14484),
            (BosanskaGradiskaLong = 17.25453),
            (KozarskaDubicaLat = 45.1767),
            (KozarskaDubicaLong = 16.8094),
            (KakanjLat = 44.13311),
            (KakanjLong = 18.12292),
            (BihacLat = 44.81694),
            (BihacLong = 15.87083),
            (SrebrenikLat = 44.70819),
            (SrebrenikLong = 18.48834),
            (TeslicLat = 44.6064),
            (TeslicLong = 17.8597),
            (GorazdeLat = 43.66795),
            (GorazdeLong = 18.9756),
            (PrnjavorLat = 44.8702),
            (PrnjavorLong = 17.6626),
            (ZenicaLat = 44.2016907),
            (ZenicaLong = 17.9039707),
            (KnezevoLat = 43.9159),
            (KnezevoLong = 17.6791),
            (BijeljinaLat = 44.7587395),
            (BijeljinaLong = 19.2143707),
            (GrudeLat = 43.551914),
            (GrudeLong = 17.377458),
            (ModricaLat = 44.9975338),
            (ModricaLong = 18.297176),
            (BosanskiBrodLat = 45.13747),
            (BosanskiBrodLong = 17.98722),
            (CelinacLat = 44.7399788),
            (CelinacLong = 17.3188095),
            (PrijedorLat = 44.97991),
            (PrijedorLong = 16.71401),
            (TesanjLat = 44.6119),
            (TesanjLong = 17.9855),
            (BrckoLat = 44.87278),
            (BrckoLong = 18.80833),
            (KotorVarosLat = 44.6722986),
            (KotorVarosLong = 17.379073),
            (CitlukLat = 43.2286),
            (CitlukLong = 17.7008),
            (DobojLat = 44.73179),
            (DobojLong = 18.08698),
            (ZiviniceLat = 44.44929),
            (ZiviniceLong = 18.64978),
            (TuzlaLat = 44.53842),
            (TuzlaLong = 18.66709),
            (VisokoLat = 43.98889),
            (VisokoLong = 18.17806),
            (RibnikLat = 44.572135),
            (RibnikLong = 16.794551),
            (BosanskaKrupaLat = 44.8825),
            (BosanskaKrupaLong = 16.15139),
            (SrbacLat = 45.0973),
            (SrbacLong = 17.5233),
            (OrasjeLat = 45.008762),
            (OrasjeLong = 18.687014),
            (BrezaLat = 44.096139),
            (BrezaLong = 18.27372),
            (VogoscaLat = 43.90225),
            (VogoscaLong = 18.34438),
            (CazinLat = 44.96694),
            (CazinLong = 15.94306),
            (GornjiVakufLat = 43.93806),
            (GornjiVakufLong = 17.58833),
            (NoviTravnikLat = 44.17133),
            (NoviTravnikLong = 17.65816),
            (DerventaLat = 44.97839),
            (DerventaLong = 17.90779),
            (LukavacLat = 44.543839),
            (LukavacLong = 18.525934),
            (IlijasLat = 43.95128),
            (IlijasLong = 18.27128),
            (ZepceLat = 44.42667),
            (ZepceLong = 18.03778),
            (PosusjeLat = 43.4666648),
            (PosusjeLong = 17.333332),
            (ZavidoviciLat = 44.44583),
            (ZavidoviciLong = 18.14972),
            (IstocnaIlidzaLat = 43.756194),
            (IstocnaIlidzaLong = 18.26877),
            (PaleLat = 43.817244),
            (PaleLong = 18.568508),
            (MiliciLat = 44.167391),
            (MiliciLong = 19.075715),
            (VitezLat = 44.158541),
            (VitezLong = 17.782145),
            (GracanicaLat = 44.705293),
            (GracanicaLong = 18.308144),
            (SekoviciLat = 44.297118),
            (SekoviciLong = 18.854044),
            (VelikaKladusaLat = 45.185453),
            (VelikaKladusaLong = 15.805206),
            (MrkonjicGradLat = 44.417627),
            (MrkonjicGradLong = 17.084829),
            (SipovoLat = 44.284349),
            (SipovoLong = 17.087946),
            (JablanicaLat = 43.657049),
            (JablanicaLong = 17.758448),
            (ZvornikLat = 44.386185),
            (ZvornikLong = 19.102832);

            //Novi gradovi
            (LivnoLat = 43.824838);
            (LivnoLong = 17.005395);

            CapljinaLat = 43.111764;
            CapljinaLong = 17.705333;

            SapnaLat = 44.494367;
            SapnaLong = 18.999867;

            HadziciLat = 43.82287;
            HadziciLong = 18.207451;

            BugojnoLat = 44.055745;
            BugojnoLong = 17.44895;

            KalesijaLat = 44.44193;
            KalesijaLong = 18.877859;

            BosanskiNoviLat = 45.040464;
            BosanskiNoviLong = 16.395807;

            OdzakLat = 45.009144;
            OdzakLong = 18.326697;

            TrebinjeLat = 42.707670;
            TrebinjeLong = 18.351954;

            BanoviciLat = 44.409373;
            BanoviciLong = 18.525016;

            SrebrenicaLat = 44.098403;
            SrebrenicaLong = 19.301342;

            MaglajLat = 44.545322;
            MaglajLong = 18.1034;

            KalinovikLat = 43.500797;
            KalinovikLong = 18.448941;

            var i = [];
            for (t = 0; t < n.length; t++)
                (o =
                    n[t + 1] < 10 ?
                    am4core.color("#faff00") :
                    n[t + 1] < 50 ?
                    am4core.color("#fbba09") :
                    n[t + 1] < 100 ?
                    am4core.color("#fc7512") :
                    am4core.color("#fd1d1d")),
                "Banja Luka" == n[t] ?
                ((lat = BanjaLukaLat), (long = BanjaLkaLong)) :
                "Konjic" == n[t] ?
                ((lat = KonjicLat), (long = KonjicLong)) :
                "Tuzla" == n[t] ?
                ((lat = TuzlaLat), (long = TuzlaLong)) :
                "Mostar" == n[t] ?
                ((lat = MostarLat), (long = MostarLong)) :
                "Čitluk" == n[t] ?
                ((lat = CitlukLat), (long = CitlukLong)) :
                "Laktaši" == n[t] ?
                ((lat = LaktasiLat), (long = LaktasiLong)) :
                "Široki Brijeg" == n[t] ?
                ((lat = SirokiBrijegLat), (long = SirokiBrijegLong)) :
                "Zenica" == n[t] ?
                ((lat = ZenicaLat), (long = ZenicaLong)) :
                "Srebrenik" == n[t] ?
                ((lat = SrebrenikLat), (long = SrebrenikLong)) :
                "Sarajevo" == n[t] ?
                ((lat = SarajevoLat), (long = SarajevoLong)) :
                "Ilidža" == n[t] ?
                ((lat = IlidzaLat), (long = IlidzaLong)) :
                "Bihać" == n[t] ?
                ((lat = BihacLat), (long = BihacLong)) :
                "Bosanska Gradiška" == n[t] ?
                ((lat = BosanskaGradiskaLat), (long = BosanskaGradiskaLong)) :
                "Bijeljina" == n[t] ?
                ((lat = BijeljinaLat), (long = BijeljinaLong)) :
                "Kozarska Dubica" == n[t] ?
                ((lat = KozarskaDubicaLat), (long = KozarskaDubicaLong)) :
                "Teslić" == n[t] ?
                ((lat = TeslicLat), (long = TeslicLong)) :
                "Goražde" == n[t] ?
                ((lat = GorazdeLat), (long = GorazdeLong)) :
                "Brčko" == n[t] ?
                ((lat = BrckoLat), (long = BrckoLong)) :
                "Kneževo" == n[t] ?
                ((lat = KnezevoLat), (long = KnezevoLong)) :
                "Prnjavor" == n[t] ?
                ((lat = PrnjavorLat), (long = PrnjavorLong)) :
                "Kotor Varoš" == n[t] ?
                ((lat = KotorVarosLat), (long = KotorVarosLong)) :
                "Zavidovići" == n[t] ?
                ((lat = ZavidoviciLat), (long = ZavidoviciLong)) :
                "Grude" == n[t] ?
                ((lat = GrudeLat), (long = GrudeLong)) :
                "Posušje" == n[t] ?
                ((lat = PosusjeLat), (long = PosusjeLong)) :
                "Čelinac" == n[t] ?
                ((lat = CelinacLat), (long = CelinacLong)) :
                "Ribnik" == n[t] ?
                ((lat = RibnikLat), (long = RibnikLong)) :
                "Kakanj" == n[t] ?
                ((lat = KakanjLat), (long = KakanjLong)) :
                "Modriča" == n[t] ?
                ((lat = ModricaLat), (long = ModricaLong)) :
                "Žepče" == n[t] ?
                ((lat = ZepceLat), (long = ZepceLong)) :
                "Prijedor" == n[t] ?
                ((lat = PrijedorLat), (long = PrijedorLong)) :
                "Bosanski Brod" == n[t] ?
                ((lat = BosanskiBrodLat), (long = BosanskiBrodLong)) :
                "Orašje" == n[t] ?
                ((lat = OrasjeLat), (long = OrasjeLong)) :
                "Gornji Vakuf - Uskoplje" == n[t] ?
                ((lat = GornjiVakufLat), (long = GornjiVakufLong)) :
                "Istočna Ilidža" == n[t] ?
                ((lat = IstocnaIlidzaLat), (long = IstocnaIlidzaLong)) :
                "Tešanj" == n[t] ?
                ((lat = TesanjLat), (long = TesanjLong)) :
                "Novi Travnik" == n[t] ?
                ((lat = NoviTravnikLat), (long = NoviTravnikLong)) :
                "Lukavac" == n[t] ?
                ((lat = LukavacLat), (long = LukavacLong)) :
                "Pale" == n[t] ?
                ((lat = PaleLat), (long = PaleLong)) :
                "Visoko" == n[t] ?
                ((lat = VisokoLat), (long = VisokoLong)) :
                "Doboj" == n[t] ?
                ((lat = DobojLat), (long = DobojLong)) :
                "Živinice" == n[t] ?
                ((lat = ZiviniceLat), (long = ZiviniceLong)) :
                "Milići" == n[t] ?
                ((lat = MiliciLat), (long = MiliciLong)) :
                "Vitez" == n[t] ?
                ((lat = VitezLat), (long = VitezLong)) :
                "Srbac" == n[t] ?
                ((lat = SrbacLat), (long = SrbacLong)) :
                "Breza" == n[t] ?
                ((lat = BrezaLat), (long = BrezaLong)) :
                "Zvornik" == n[t] ?
                ((lat = ZvornikLat), (long = ZvornikLong)) :
                "Gračanica" == n[t] ?
                ((lat = GracanicaLat), (long = GracanicaLong)) :
                "Vogošća" == n[t] ?
                ((lat = VogoscaLat), (long = VogoscaLong)) :
                "Šekovići" == n[t] ?
                ((lat = SekoviciLat), (long = SekoviciLong)) :
                "Cazin" == n[t] ?
                ((lat = CazinLat), (long = CazinLong)) :
                "Velika Kladuša" == n[t] ?
                ((lat = VelikaKladusaLat), (long = VelikaKladusaLong)) :
                "Bosanska Krupa" == n[t] ?
                ((lat = BosanskaKrupaLat), (long = BosanskaKrupaLong)) :
                "Ilijaš" == n[t] ?
                ((lat = IlijasLat), (long = IlijasLong)) :
                "Derventa" == n[t] ?
                ((lat = DerventaLat), (long = DerventaLong)) :
                "Mrkonjić Grad" == n[t] ?
                ((lat = MrkonjicGradLat), (long = MrkonjicGradLong)) :
                "Šipovo" == n[t] ?
                ((lat = SipovoLat), (long = SipovoLong)) :
                "Livno" == n[t] ?
                ((lat = LivnoLat), (long = LivnoLong)) :
                "Čapljina" == n[t] ?
                ((lat = CapljinaLat), (long = CapljinaLong)) :
                "Sapna" == n[t] ?
                ((lat = SapnaLat), (long = SapnaLong)) :
                "Hadžići" == n[t] ?
                ((lat = HadziciLat), (long = HadziciLong)) :
                "Bugojno" == n[t] ?
                ((lat = BugojnoLat), (long = BugojnoLong)) :
                "Kalesija" == n[t] ?
                ((lat = KalesijaLat), (long = KalesijaLong)) :
                "Trebinje" == n[t] ?
                ((lat = TrebinjeLat), (long = TrebinjeLong)) :
                "Srebrenica" == n[t] ?
                ((lat = SrebrenicaLat), (long = SrebrenicaLong)) :
                "Maglaj" == n[t] ?
                ((lat = MaglajLat), (long = MaglajLong)) :
                "Kalinovik" == n[t] ?
                ((lat = KalinovikLat), (long = KalinovikLong)) :
                "Banovići" == n[t] ?
                ((lat = BanoviciLat), (long = BanoviciLong)) :
                "Odžak" == n[t] ?
                ((lat = OdzakLat), (long = OdzakLong)) :
                "Bosanski Novi" == n[t] ?
                ((lat = BosanskiNoviLat), (long = BosanskiNoviLong)) :
                "Jablanica" == n[t] &&
                ((lat = JablanicaLat), (long = JablanicaLong)),
                i.push({
                    title: `${n[t]}`,
                    value: `${n[t + 1]}`,
                    latitude: lat,
                    longitude: long,
                    color: `${o}`,
                }),
                t++;
            e.data = i;
        });
});
w =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
$.get("http://localhost/github/bih-corona/php/getDataCities.php", function (a) {
    $(".juhu").html(a);
    for (
        var o = a
            .replace("\n", "")
            .split("\n")
            .filter(function (a) {
                return /\S/.test(a);
            }),
            n = o.length; n--;

    )
        (n + 1) % 3 == 0 && o.splice(n, 1);
    (blue = "#faff00"),
    (yellow = "#fbba09"),
    (purple = "#fc7512"),
    (red = "#fd1d1d"),
    anychart.onDocumentReady(function () {
        for (var a = [], n = 0; n < o.length; n++)
            o[n + 1] < 10 ?
            a.push([
                o[n],
                o[n + 1],
                1,
                blue,
                "#009933",
                null,
                {
                    enabled: !0,
                },
            ]) :
            o[n + 1] < 50 ?
            a.push([
                o[n],
                o[n + 1],
                1,
                yellow,
                "#009933",
                null,
                {
                    enabled: !0,
                },
            ]) :
            o[n + 1] < 100 ?
            a.push([
                o[n],
                o[n + 1],
                1,
                purple,
                "#009933",
                null,
                {
                    enabled: !0,
                },
            ]) :
            a.push([
                o[n],
                o[n + 1],
                1,
                red,
                "#009933",
                null,
                {
                    enabled: !0,
                },
            ]),
            n++;
        var t = anychart.data.set(a);
        if (w <= 1024) {
            console.log("juhu");
            var e = anychart.bar(),
                i = t.mapAs({
                    x: 0,
                    value: 1,
                    fill: 3,
                    stroke: 0,
                    label: 20,
                });
            (r = e.bar(i)).name("Broj zaraženih"),
                r.labels(!0),
                e.pointWidth(11),
                e.barGroupsPadding(1),
                e.title("Bosna i Hercegovina - Gradovi");
            var l = e.xAxis();
            e.yAxis().title("Broj Zaraženih"),
                l.overlapMode("allowOverlap"),
                e.container("cartContainer"),
                e.draw();
        } else {
            var r;
            i = t.mapAs({
                x: 0,
                value: 1,
                fill: 3,
                stroke: 5,
                label: 20,
            });
            (e = anychart.column()).pointWidth(20),
                (r = e.column(i)).name("Broj zaraženih"),
                r.labels(!0),
                (labels = r.labels()),
                labels.position("center-top"),
                labels.anchor("left"),
                e.title("Bosna i Hercegovina - Gradovi");
            l = e.xAxis();
            e.yAxis().title("Broj Zaraženih"),
                e.xAxis().labels().rotation(-90),
                l.overlapMode("allowOverlap"),
                e.container("cartContainer"),
                e.draw();
        }
    });
});