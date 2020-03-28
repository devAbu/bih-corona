<?php include('php/crud.php'); ?>
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>BiH-Korona</title>
    <meta name="description" content="">

    <!--Google Fonts-->
    <link href="https://fonts.googleapis.com/css?family=Anton&display=swap" rel="stylesheet">

    <!--Font Awesome-->
    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">


    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">

    <!--Our Style-->
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="assets/css/responsive.css">

    <!--Simplebar-->
    <link rel="stylesheet" href="https://unpkg.com/simplebar@latest/dist/simplebar.css" />

</head>

<body>
    <!-- NAVBAR -->
    <div class="navigation-wrap bg-light start-header start-style">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <nav class="navbar navbar-expand-md navbar-light">
                        <a class="navbar-brand" href="#map"><img src="assets/images/bih-grb.png" alt="logo"></a>Bih
                        Korona
                        <button class="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ml-auto py-4 py-md-0">
                                <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                </li>
                                <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                    <a class="nav-link" href="#map-section">Mapa</a>
                                </li>
                                <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                    <a class="nav-link" href="#info">Brojevi</a>
                                </li>
                                <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                    <a class="nav-link" href="#viber-link">Viber Grupa</a>
                                </li>
                                <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                    <a class="nav-link" href="#news">Vijesti</a>
                                </li>
                                <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                    <a class="nav-link" href="#safety">Zaštita od korone</a>
                                </li>
                            </ul>
                        </div>

                    </nav>
                </div>
            </div>
        </div>
    </div>
    <!-- END OF NAVBAR -->

    <!-- MAP AND LIVE FEED-->
    <section id="map-section">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-8 col-12">
                    <div id="chartdiv">
                    </div>
                    <div class="legend">
                        <!-- <h5>Legenda</h5>
                        <i class="fa fa-square iblue"><span class="text-dark"> Do 10 </span></i>
                        <i class="fa fa-square iyellow"><span class="text-dark"> Do 50 </span></i>
                        <i class="fa fa-square ipurple"><span class="text-dark"> Do 100 </span></i>
                        <i class="fa fa-square ired"><span class="text-dark"> Do 500 </span></i> -->
                        <div class="row">
                            <div class="col">
                                <div id="good-attribute-chart"></div>
                            </div>
                        </div>

                    </div>
                </div>
                <!--CODE -->
                <div class="col-lg-4 col-12 center" style="max-height:100vh; display:none;">
                    <div class="header2">
                        <div id="total2" class="card2">
                            <div class="stats2">
                                <div class="number2">262 <small>(+2)</small></div>
                                <div class="factor2 text-secondary pt-2">Zarženih</div>
                            </div>
                        </div>
                        <div id="recover2" class="card2">
                            <div class="stats2">
                                <div class="number2">5</div>
                                <div class="factor2 text-success pt-2">Oporavljenih</div>
                            </div>
                        </div>
                        <div id="dead2" class="card2">
                            <div class="stats2">
                                <div class="number2">6<small>(+2)</small></div>
                                <div class="factor2 text-danger pt-2">Mrtvih</div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--API -->
                <div class="col-lg-4 col-12 center" style="max-height:100vh;">
                    <div class="header">
                        <div id="total" class="card">
                            <div class="stats">
                                <div class="number"></div>
                                <div class="factor">Total</div>
                            </div>
                        </div>
                        <div id="recover" class="card">
                            <div class="stats">
                                <div class="number"></div>
                                <div class="factor">Total</div>
                            </div>
                        </div>
                        <div id="dead" class="card">
                            <div class="stats">
                                <div class="number"></div>
                                <div class="factor">Total</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- END MAP AND LIVE FEED-->
    <!-- END LIVE-FEED -->
    <div class="mt-4"></div>

    <!-- CITY'S -->
    <section id="city" style="height=100vh;">
        <div id="cartContainer"></div>
    </section>
    <!-- END CITY'S -->

    <!-- INFO --->
    <section id="info" class="pb-3">
        <div class="container">
            <div class="row">
                <div class="col-xl-12">
                    <div class="section-title text-center">
                        <h4 class="pt-4">Pozivni brojevi po gradovima</h4>
                        <p>Ako imate bilo kakvu informaciju vezanu o osobi koja je zaražena korona virusom pozovite
                            jedan od sledećih brojeva : </p>
                        <form action="#">
                            <strong>Odaberite kanton</strong> : <select style="margin-bottom: 30px; width: 300px;" name="names"
                                onchange="citys(this.value)">
                                <option value="Sarajevski kanton">Sarajevski kanton</option>
                                <option value="Zapadnohercegovački kanton">Zapadnohercegovački kanton</option>
                                <option value="Hercegovačko-neretvanski kanton">Hercegovačko-neretvanski kanton</option>
                                <option value="Zeničko-dobojski kanton">Zeničko-dobojski kanton</option>
                                <option value="Tuzlanski kanton">Tuzlanski kanton</option>
                                <option value="Unsko-sanski kanton">Unsko-sanski kanton</option>
                                <option value="Bosanskopodrinjski kanton">Bosanskopodrinjski kanton</option>
                                <option value="Srednjobosanski kanton">Srednjobosanski kanton</option>
                                <option value="Republika Srpska">Republika Srpska</option>
                            </select>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div id="callNumbers"></div>
    </section>
    <!-- END INFO -->

    <!-- VIBER -->
    <section class="viber-link">
        <div class="container">
            <div class="row">
                <div class="col-xl-12">
                    <div class="section-title text-center">
                        <h4 class="pt-4">Viber Grupa</h4>
                        <p>Pridružite se našoj viber grupi kako bi dobili što više informacija koje su vezane za korona
                            virus</p>
                        <a href="https://invite.viber.com/?g2=AQAezvjlfvZSpks%2FzuzlM6ctwPzatW7K2eqYBfH7GAzBNyxwpu57GHSoPRk2WdEB"
                            target="_blank">Klinkite ovdje</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- END VIBER -->

    <!-- NEWS -->
    <section id="news">
        <div class="container">

            <div class="row pb-3">
                <div class="col-xl-12">
                    <div class="section-title text-center">
                        <h4 class="pt-4">Vijesti</h4>
                        <p>Vijesti o korona virusu koje su vezane isjljučivo za teritorij Bosne i Hercegovine </p>
                    </div>
                </div>
            </div>
            <!--NEWS ARTICLE -->
            <?php

            $sql = "SELECT * FROM vijesti";
            $result = $mysqli->query($sql);

            if ($result->num_rows > 0) {
                while ($row = $result->fetch_assoc()) { ?>
            <article>
                <div class="row">
                    <div class="col-xl-4 col-xs-12">
                        <img src="<?php echo $row['slika'] ?>" style="img-fluid" width=350 height=200 alt="">
                    </div>
                    <div class="col-xl-8 col-xs-12">
                        <h4 class="caption-heading"><?php echo $row['naslov'] ?></h4>
                        <p class="news-p"><?php echo $row['paragraf'] ?></p>
                        <a href="<?php echo $row['link'] ?>" target=__blank>Pogledajte cijeli članak</a>
                        <p class="time-p"> Izvor: <a href="<?php echo $row['link'] ?>" target=__blank><?php echo $row['izvor'] ?></a></p>
                    </div>
                </div>
                <hr>
            </article>
            <?php }
            } ?>
        </div>
    </section>
    <!-- END NEWS -->

    <!-- SAFETY -->
    <section id="safety">
        <div class="container">
            <div class="row">
                <div class="col-xl-12">
                    <div class="section-title text-center">
                        <h4 class="pt-4">Zaštita od COVID-19</h4>
                        <p class="pb-2">Ispod se nalaze načini kako se možete zaštititi od korona virusa </p>
                    </div>
                    <div class="col-md-12">
                        <div class="tabset">
                            <!--Tabs-->
                            <input type="radio" name="tabset" id="tab1" aria-controls="video" checked>
                            <label for="tab1">Video</label>
                            <input type="radio" name="tabset" id="tab2" aria-controls="clanak1">
                            <label for="tab2">Članak</label>
                            <input type="radio" name="tabset" id="tab3" aria-controls="dodatneInf">
                            <label for="tab3">Dodatne Inf.</label>
                            <!--/Tabs-->

                            <div class="tab-panels">
                                <!--Video Tab-->
                                <section id="vido" class="tab-panel">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <h4 class="text-center pb-2">Pogledajte video koji je objavila World Health
                                                Organization</h4>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="embed-responsive embed-responsive-16by9">
                                                <iframe src="https://www.youtube.com/embed/Y5capFWePeE" frameborder="0"
                                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                                    allowfullscreen></iframe>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <!--/Video Tab-->
                                <!--Clanak Tab-->
                                <section id="clanak1" class="tab-panel">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <h2 class="text-center">Korona virus (COVID-19): Što roditelji treba da
                                                znaju?
                                            </h2>
                                            <p class="text-center">Kako zaštititi sebe i svoju djecu?</p>
                                            <img style="height:400px; width:1000px;" class="img-fluid clanak-img"
                                                src="assets/images/unicef.jpg" alt="unicefImg">
                                            <div class="clanak-text">
                                                <h5 class="pt-3"><strong>Što je „novi“ korona virus?</strong></h5>

                                                <p class="clanak-p">„Novi” korona virus (CoV) predstavlja novi soj
                                                    korona
                                                    virusa.</p>

                                                <p class="clanak-p">Oboljenje uzrokovano novim korona virusom, koji je
                                                    po
                                                    prvi
                                                    put identifikovan u Vuhanu u Kini, nazvano je <strong> oboljenje
                                                        korona
                                                        virus 2019 (COVID-19)</strong> – gdje „CO” označava koronu, „VI”
                                                    virus,
                                                    a „D” oboljenje (eng. disease). Prethodno, na ovo oboljenje
                                                    upućivali su
                                                    i
                                                    nazivi novi korona virus 2019 ili 2019-nCoV.</p>

                                                <h5><strong>Kako se prenosi virus COVID-19?</strong></h5>

                                                <p class="clanak-p">Virus se prenosi putem direktnog kontakta s
                                                    respiratornim kapljicama inficirane osobe (koje nastaju kašljanjem i
                                                    kijanjem) i dodirivanjem površina kontaminiranih virusom. Virus
                                                    COVID-19
                                                    može preživjeti na površinama i po nekoliko sati, ali ga mogu
                                                    uništiti i
                                                    jednostavna sredstva za dezinfekciju.</p>

                                                <h5><strong>Koji su simptomi korona virusa?</strong></h5>
                                                <p class="clanak-p">Simptomi mogu uključivati groznicu, kašalj i kratak
                                                    dah.
                                                    U težim slučajevima, infekcija može uzrokovati zapaljenje pluća ili
                                                    teškoće u disanju. Rjeđe, oboljenje može biti fatalno. </p>

                                                <p class="clanak-p">Navedeni simptomi slični su simptomima gripa
                                                    (influence)
                                                    ili obične prehlade, koji se češće javljaju od oboljenja COVID-19.
                                                    Zbog
                                                    toga je potrebno testiranje da bi se potvrdilo da li neko ima
                                                    COVID-19.
                                                    Važno je zapamtiti da su ključne mjere prevencije identične – često
                                                    pranje ruku i respiratorna higijena (kod kašlja i kijanja pokrijte
                                                    usta
                                                    i nos savijenim laktom ili maramicom, odbacujući potom maramicu u
                                                    zatvorenu kantu za otpatke). Isto tako, za grip postoji vakcina –
                                                    zbog
                                                    čega je potrebno da Vi i Vaše dijete budete informisani o aktuelnim
                                                    vakcinacijama. </p>

                                                <h5><strong>Kako mogu izbjeći rizik od infekcije?</strong></h5>

                                                <p class="clanak-p">Slijede četiri mjere opreza koje Vi i Vaša porodica
                                                    možete preduzeti da izbjegnete infekciju:</p>

                                                <p class="clanak-p">
                                                    <ul>
                                                        <li>1. Često perite ruke koristeći sapun i vodu ili sredstvo za
                                                            pranje ruku na bazi alkohola. </li>
                                                        <li>2. Prilikom kašlja i kijanja pokrijte usta i nos savijenim
                                                            laktom ili maramicom, odbacujući potom maramicu u zatvorenu
                                                            kantu za otpatke. </li>
                                                        <li>3. Izbjegavajte blizak kontakt s bilo kim ko ima simptome
                                                            koji
                                                            ukazuju na prehladu ili grip. </li>
                                                        <li>4. Posjetite ljekara ako imate groznicu, kašljete ili
                                                            osjećate
                                                            poteškoće pri disanju. </li>
                                                    </ul>
                                                </p>

                                                <h5><strong>Da li treba da nosim medicinsku masku?</strong></h5>

                                                <p class="clanak-p">Upotreba medicinske maske savjetuje se ako imate
                                                    respiratorne simptome (kašalj ili kijanje) kako biste zaštitili
                                                    druge.
                                                    Ako nemate nikakve simptome, nema potrebe da nosite masku. </p>

                                                <p class="clanak-p">U slučaju nošenja maski, iste se moraju koristiti i
                                                    odbacivati na adekvatan način kako bi se obezbijedila njihova
                                                    djelotvornost i izbjegao povećani rizik od prenošenja virusa. </p>

                                                <p class="clanak-p">Korišćenje maske samo po sebi nije dovoljno da
                                                    zaustavi
                                                    infekcije i mora se kombinovati sa čestim pranjem ruku, pokrivanjem
                                                    usta
                                                    i nosa prilikom kijanja i kašlja, kao i s izbjegavanjem bliskog
                                                    kontakta
                                                    s bilo kim ko pokazuje simptome koji ukazuju na prehladu ili grip
                                                    (kašalj, kijanje, groznica). </p>

                                                <h5><strong>Da li COVID-19 pogađa djecu?</strong></h5>

                                                <p class="clanak-p">Radi se o novom virusu te još uvijek ne znamo
                                                    dovoljno o
                                                    načinu na koji utiče na djecu ili trudnice. Znamo da ljudi bilo koje
                                                    starosti mogu biti inficirani virusom, iako je do sada zabilježen
                                                    relativno mali broj infekcije virusom COVID-19 kod djece. Virus je
                                                    fatalan u rijetkim slučajevima, do sada uglavnom među starijim
                                                    ljudima
                                                    koji su već imali određene zdravstvene probleme.</p>

                                                <h5><strong>Što treba da uradim ako moje dijete ima simptome virusa
                                                        COVID-19?</strong></h5>

                                                <p class="clanak-p">Potražite medicinsku pomoć, ali ne zaboravite da je
                                                    trenutno na sjevernoj hemisferi sezona gripa, a da simptomi virusa
                                                    COVID-19, poput kašlja ili groznice, mogu biti slični onima koji
                                                    karakterišu grip ili običnu prehladu – što su bolesti koje su mnogo
                                                    učestalije. </p>

                                                <p class="clanak-p">Nastavite da slijedite dobre prakse održavanja
                                                    higijene
                                                    ruku i respiratornih organa, poput redovnog pranja ruku, te pratite
                                                    aktuelne informacije o vakcinacijama – kako bi vaše dijete bilo
                                                    zaštićeno od drugih virusa i bakterija koje dovode do oboljenja.
                                                </p>

                                                <p class="clanak-p">Kada su u pitanju druge respiratorne infekcije,
                                                    poput
                                                    gripa, potražite pomoć u ranoj fazi ako Vi ili Vaše dijete imate
                                                    simptome te pokušajte da izbjegavate odlazak na javna mjesta (posao,
                                                    škola, javni prevoz), kako biste spriječili širenje na druge ljude.
                                                </p>

                                                <h5><strong>Što treba da uradim ako član moje porodice pokazuje
                                                        simptome?</strong></h5>

                                                <p class="clanak-p">Potražite medicinsku pomoć u ranoj fazi ako Vi ili
                                                    Vaše
                                                    dijete imate groznicu, kašalj ili poteškoće u disanju. Razmotrite
                                                    mogućnost da pozovete svog pružaoca zdravstvene zaštite unaprijed i
                                                    obavijestite ga o simptomima ako ste putovali u područje gdje su
                                                    prijavljivani slučajevi virusa COVID-19 ili ako ste bili u bliskom
                                                    kontaktu s nekim ko je doputovao iz tih područja, a pokazuje
                                                    respiratorne simptome. </p>

                                                <h5><strong>Da li dijete treba da izostaje iz škole?</strong></h5>

                                                <p class="clanak-p">Ako Vaše dijete pokazuje simptome, potražite
                                                    medicinsku
                                                    pomoć i slijedite uputstva pružalaca zdravstvene zaštite. U
                                                    suprotnom,
                                                    kao što je to praksa i kod drugih respiratornih infekcija, poput
                                                    gripa,
                                                    neka vaše dijete ostane kod kuće i odmara se sve dok pokazuje
                                                    simptome,
                                                    uz izbjegavanje odlaska na javna mjesta kako biste spriječili
                                                    širenje na
                                                    druge ljude. </p>

                                                <p class="clanak-p">Ako Vaše dijete ne pokazuje simptome poput groznice
                                                    ili
                                                    kašlja – a ne postoje nikakvi savjeti ili relevantna upozorenja
                                                    organa
                                                    nadležnih za javno zdravlje koja se odnose na školu vašeg djeteta –
                                                    najbolje je da dijete bude u svojoj školi. </p>

                                                <p class="clanak-p">Umjesto da držite djecu izvan škole, naučite ih
                                                    dobrim
                                                    praksama održavanja higijene ruku i respiratornih organa, kako u
                                                    školi
                                                    tako i generalno, kao što su često pranje ruku (vidi ispod),
                                                    pokrivanje
                                                    usta i nosa savijenim laktom ili maramicom prilikom kašlja i
                                                    kijanja, uz
                                                    odbacivanje maramice u zatvorenu kantu za otpatke, te izbjegavanje
                                                    dodirivanja očiju, usta ili nosa ako ruke prethodno nijesu dobro
                                                    oprane.
                                                </p>

                                                <h5><strong>Koji je najbolji način da se ruke ispravno operu?</strong>
                                                </h5>

                                                <p class="clanak-p">
                                                    <ul>
                                                        <li>1. Pokvasite ruke (šake) tekućom vodom.</li>
                                                        <li>2. Primijenite dovoljno sapuna da se prekriju mokre šake.
                                                        </li>
                                                        <li>3. Istrljajte sve površine šaka – uključujući djelove na
                                                            pozadini, između prstiju i ispod noktiju – čineći to
                                                            najmanje 20
                                                            sekundi.</li>
                                                        <li>4. Temeljno isperite tekućom vodom.</li>
                                                        <li>5. Osušite ruke čistim ubrusom ili peškirom za jednokratnu
                                                            upotrebu.</li>
                                                    </ul>
                                                </p>
                                                <p class="clanak-p">Često perite ruke, naročito prije jela, nakon
                                                    pražnjenja
                                                    nosa, kašlja ili kijanja, te nakon boravka u toaletu. </p>
                                                <p class="clanak-p">Ako sapun i voda nijesu trenutno dostupni,
                                                    upotrijebite
                                                    sredstvo za pranje ruku s najmanje 60% alkohola. Ako su ruke vidno
                                                    prljave, uvijek ih perite sapunom i vodom.</p>

                                                <h5><strong>Mogu li trudnice prenijeti korona virus svojoj nerođenoj
                                                        djeci?
                                                    </strong></h5>

                                                <p class="clanak-p">U ovom trenutku nema dovoljno dokaza da se utvrdi da
                                                    li
                                                    se virus prenosi s majke na bebu tokom trudnoće, niti kakav bi to
                                                    potencijalni uticaj moglo imati na bebu. To pitanje trenutno se
                                                    istražuje. Trudnice treba da nastave da slijede adekvatne mjere
                                                    opreza
                                                    kako bi se zaštitile od izlaganja virusu, kao i da potraže
                                                    medicinsku
                                                    pomoć u ranoj fazi ukoliko osjete simptome poput groznice, kašlja
                                                    ili
                                                    poteškoća u disanju. </p>

                                                <h5><strong>Da li je bezbjedno da majka doji ako je zaražena korona
                                                        virusom?</strong></h5>

                                                <p class="clanak-p">Sve majke u pogođenim i rizičnim oblastima koje
                                                    imaju
                                                    simptome groznice, kašlja ili poteškoća u disanju treba da potraže
                                                    medicinsku pomoć u ranoj fazi, kao i da slijede uputstva pružalaca
                                                    zdravstvene zaštite. </p>

                                                <p class="clanak-p">Imajući u vidu benefite dojenja i beznačajnu ulogu
                                                    majčinog mlijeka u prenošenju drugih respiratornih virusa, majke
                                                    mogu
                                                    nastaviti s dojenjem uz primjenu neophodnih mjera opreza. </p>

                                                <p class="clanak-p">Kada su u pitanju majke s gore navedenim simptomima
                                                    koje
                                                    se osjećaju dovoljno dobro da mogu dojiti, takve mjere opreza
                                                    uključuju
                                                    nošenje maske u blizini djeteta (uključujući i situacije tokom
                                                    hranjenja), pranje ruku prije i poslije kontakta s djetetom
                                                    (uključujući
                                                    i hranjenje), te čišćenje/dezinfekciju kontaminiranih površina – što
                                                    treba raditi i inače u svim slučajevima kada je bilo ko za koga je
                                                    potvrđeno ili se sumnja da ima virus COVID-19 u interakciji s
                                                    drugima,
                                                    uključujući djecu.</p>

                                                <p class="clanak-p">Ukoliko je majka previše bolesna, treba je ohrabriti
                                                    da
                                                    pribjegne izmlazanju i hranjenju djeteta putem čiste posude i/ili
                                                    kašike
                                                    – a sve to uz poštovanje istih metoda za prevenciju infekcije.</p>

                                                <img class="img-fluid" src="assets/images/unicef2.jpg" alt="">

                                                <h5 class="pt-3"><strong>Što UNICEF preduzima da pomogne? </strong></h5>

                                                <p class="clanak-p">Postojeći odgovor UNICEF-a fokusiran je na podršku
                                                    vladama Kine i zemalja šireg područja istočne Azije i Pacifika, gdje
                                                    je
                                                    prijavljena većina dosadašnjih slučajeva. Od 29. januara, UNICEF je
                                                    isporučio 13 tona materijala, uključujući zaštitna odijela, maske,
                                                    naočare i rukavice za zdravstvene radnike. Dodatne pošiljke su na
                                                    putu,
                                                    a UNICEF unaprijed raspoređuje pošiljke na ključne lokacije. </p>

                                                <p class="clanak-p">Imajući u vidu nepredvidivu prirodu virusa i njegovo
                                                    kontinuirano širenje, UNICEF udružuje snage s vladama, Svjetskom
                                                    zdravstvenom organizacijom i drugim partnerima na razvoju planova za
                                                    nepredviđene situacije i u drugim područjima, naročito u zemljama sa
                                                    slabijim sistemima zdravstvene zaštite i ograničenim kapacitetima za
                                                    postupanje u slučaju masovne pojave oboljenja. </p>

                                                <p class="clanak-p">UNICEF je 17. februara zatražio 42,3 miliona
                                                    američkih
                                                    dolara radi intenziviranja napora da se spriječi masovno širenje
                                                    virusa
                                                    COVID-19. Inicijalnim sredstvima podržaće se napori UNICEF-a da se
                                                    smanji prenošenje virusa, uključujući aktivnosti usmjerene na
                                                    jačanje
                                                    komunikacije o rizicima i borbu protiv dezinformacija, kako bi
                                                    djeca,
                                                    trudnice i njihove porodice znale kako spriječiti širenje virusa
                                                    COVID-19 i gdje tražiti pomoć. </p>

                                                <h5 class="text-center">Tekts preuzet sa <a
                                                        href="https://www.unicef.org/montenegro/price/korona-virus-covid-19-%C5%A1to-roditelji-treba-da-znaju"
                                                        target="__blank">UNICEF.ORG</a></h5>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <!--/Clanak Tab-->
                                <!--Dodatne Inf Tab-->
                                <section id="dodatneInf" class="tab-panel">
                                    <div class="row">
                                        <div class="col-md-12">

                                            <h4 class="text-center pb-2">Dodante informacije vezane o zaštiti od korona
                                                virusa</h4>

                                            <p class="clanak-p">
                                                Poštovani,
                                                obavijest jednog milanskog liječnika: <br>
                                                Nosite isključivo jedan par cipela kada izlazite, a po povratku ih NE
                                                unosite u kuću. Čini se da virus preživljava 9 dana na asfaltu, zato su
                                                bila
                                                sva ona dezinficiranja koja su provodili kinezi, a sada ih počinju
                                                primjenjivati na ulicama Milana. To ne objavljuju javno kako ne bi
                                                širili
                                                paniku, već ovim putem. Molim vas uzmite u obzir preporuku.
                                            </p>
                                            <p class="clanak-p">
                                                Poruka pulmologinje s KBC-a s više informacija o virusu:
                                                Virus je fizicki velik, tezak i zato ne lebdi nego pada, na rukama se
                                                zadrzava 5-10 min, na odjeci i tkaninama par sati, na metalu (brave i
                                                sl.) i
                                                do 12 sati.
                                            </p>
                                            <p class="clanak-p">
                                                Neotporan je na temperaturu >23C. Zato treba prati ruke toplom vodom,
                                                izlagati se suncu, prati garderobu i boraviti na suncu. Zato sto je
                                                velik,
                                                ne prolazi lako kroz zastitne maske. 5-10 min, koliko se virus zadrzava
                                                na
                                                rukama, dug je period, za to vrijeme se moze jesti, dirati nos, oci,
                                                usta...
                                                Zato je vazno cesto prati ruke toplom vodom. Naravno, izbjegavati guzve
                                                i
                                                boravak u malim prostorijama..
                                                Prvo se naseljava u nosu i grlu, grebucka, drazi. Ne izaziva sekreciju
                                                iz
                                                nosa (vazno za diferenciranje u odnosu na druge virusne infekcije!) Dok
                                                je
                                                tu, piti tople napitke, toplu vodu, ne koristiti hladno i led. Ispirati
                                                grlo
                                                (prijedlog Betadine za grlo), da se ne spusti dolje. Pritom se kaslje,
                                                suho,
                                                nadrazajno, bez sekreta. Ovo traje 2-4 dana. Dakle, najvaznije NEMA
                                                SEKRETA
                                                IZ NOSA.Nakon toga, poslije 5-6 dana, virus moze sići u pluca i tada se
                                                javlja povisena temp., Suh kasalj i plitak dah (tesko disanje) su znak
                                                da je
                                                virus u plucima.
                                                Znaci, pokusati da virus ne ode u pluca.
                                                Najsigurnija razdaljina od zarazenog je >3m. Proslijedi dalje...
                                            </p>
                                            <p class="clanak-p">
                                                <strong>
                                                    Kineski liječnici koji su stigli u Italiju kako bi surađivali s
                                                    talijanskim specijaliziranim timovima šire ovu poruku. Pažljivo je
                                                    pročitajte i prislijedite svojim kontaktima. Hvala vam !
                                                </strong>
                                            </p>
                                            <p class="clanak-p">
                                                Novi koronavirus NCP * možda neće pokazati znakove infekcije nekoliko
                                                dana,
                                                * tokom kojeg perioda čega nije moguće znati je li osoba zaražena. Ali
                                                do
                                                trenutka kada osoba ima temperaturu i / ili kašalj i ode u bolnicu,
                                                pluća su
                                                već oboljela od 50% fibroze i prekasno je!
                                                Tajvanski stručnjaci predlažu da napravite jednostavnu provjeru koju
                                                možemo
                                                sami napraviti svako jutro:
                                                Duboko udahnite i zadržite dah više od 10 sekundi. Ako ga uspješno
                                                dovršite
                                                bez kašlja, bez nelagode, osjećaja ugnjetavanja itd., To pokazuje da u
                                                plućima nema fibroze, što u biti znači da nema infekcije.
                                            </p>
                                            <p class="clanak-p">
                                                U ovakvim kritičnim vremenima to provjerite svako jutro u okruženju s
                                                čistim
                                                zrakom!
                                                Ovo su ozbiljni i izvrsni savjeti kineskih liječnika koji su liječili
                                                slučajeve COVID-19. Svi bi trebali biti sigurni da su im usta i grlo
                                                vlažni,
                                                nikako da se SUŠE. Pijte nekoliko gutljaja vode barem svakih 15 minuta.
                                                ZAŠTO? Čak i ako vam virus dospije u usta ... voda ili druga tekućina
                                                izbaciće ga kroz jednjak i u želudac. Jednom u trbuh ... Želučana
                                                kiselina
                                                želuca ubit će sav virus. Ako redovito ne pijete dovoljno vode ... virus
                                                može ući u vaše dišne ​​putove i pluća. Vrlo je opasno.
                                            </p>

                                        </div>
                                    </div>
                                </section>
                                <!--/Dodatne Inf Tab-->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>

    <!-- END SAFETY -->
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-xl-12 text-center">
                    <hr>
                    <span> Copyright © AbocDev 2020. All right reserved. </span>
                </div>
            </div>
        </div>
    </footer>


    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <!-- <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"></script> -->
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
    <!-- <script async defer
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAzii-Rd8yNczTknnnqUlya7hzmFoJ4p40&callback=initMap">
    </script> -->
    <!--Simplebar-->
    <script src="https://unpkg.com/simplebar@latest/dist/simplebar.min.js"></script>
    <!--Custom JS-->
    <script src="assets/js/main.js"></script>
    <script src="assets/js/api.js"></script>
    <!--MAP SCRIPT-->
    <!-- Resources -->
    <script src="https://www.amcharts.com/lib/4/core.js"></script>
    <script src="https://www.amcharts.com/lib/4/maps.js"></script>
    <script src="https://www.amcharts.com/lib/4/geodata/bosniaHerzegovinaCantonsLow.js"></script>
    <script src="https://www.amcharts.com/lib/4/themes/animated.js"></script>
    <script src="https://cdn.anychart.com/releases/8.7.1/js/anychart-base.min.js"></script>
    <script src="assets/js/mape.js"></script>
    <script src="assets/js/chart.js"></script>

</body>

</html>