(function ($) {
    "use strict";

    document.onreadystatechange = function() { 
    if (document.readyState !== "complete") { 
        document.querySelector("body").style.visibility = "hidden"; 
        document.querySelector("#loader_bg").style.visibility = "visible"; 
    } else { 
        document.querySelector("#loader_bg").style.display = "none"; 
        document.querySelector("body").style.visibility = "visible"; 
    } 
}; 
/* Lazy Images */
const images = document.querySelectorAll("[data-src]");

function preloadImage(img){
    const src = img.getAttribute("data-src");
    if(!src){
        return;
    }
    
    img.src=src
}

const imgOptions= {
    treshold : 0,
    rootMargin : "0px 0px 400px 0px"
};
const imgObserver = new IntersectionObserver((entries, imgObserver) =>{
    entries.forEach( entry =>{
        if (!entry.isIntersecting){
            return;
        }else{
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target)
        }
    })
},imgOptions)

images.forEach(image =>{
    imgObserver.observe(image);
});

    $(function () {
        var header = $(".start-style");
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();

            if (scroll >= 10) {
                header.removeClass('start-style').addClass("scroll-on");
            } else {
                header.removeClass("scroll-on").addClass('start-style');
            }
        });
    });
    
    $('body').on('mouseenter mouseleave', '.nav-item', function (e) {
        if ($(window).width() > 750) {
            var _d = $(e.target).closest('.nav-item');
            _d.addClass('show');
            setTimeout(function () {
                _d[_d.is(':hover') ? 'addClass' : 'removeClass']('show');
            }, 1);
        }
    });

})(jQuery);

function citys(value) {
    if (value == "Sarajevski kanton") {
        document.getElementById("callNumbers").innerHTML = ' <div class="container pt-3 d-flex justify-content-center"> <div class="row" style="overflow-x:auto"> <div class="col-xs-12"> <div class="table-responsive"> <table class="table table-bordered table-hover"> <thead> <tr> <th colspan="5" class="text-center">Sarajevski kanton</th> </tr> <tr> <th>RB</th> <th>Ime</th> <th>Broj telefona</th> </tr> </thead> <tbody> <tr class="text-center"> <td>1. </td> <td>HES (Higijensko-epidemiološka služba JU DZKS)</td> <td>033 623 416/lok 220</td> </tr> <tr class="text-center"> <td>2.</td> <td>OJ Dom zdravlja Stari Grad</td> <td>060 32 80 454; 033 278 624</td> </tr> <tr class="text-center"> <td>3.</td> <td>OJ Dom zdravlja Centar</td> <td>033 292 524</td> </tr> <tr class="text-center"> <td>4.</td> <td>OJ Dom zdravlja Novo Sarajevo</td> <td>061 165 219</td> </tr> <tr class="text-center"> <td>5.</td> <td>OJ Dom zdravlja Novi Grad</td> <td>033 704 937</td> </tr> <tr class="text-center"> <td>6.</td> <td>OJ Dom zdravlja Ilidža </td> <td>033 625 859; 033 623 416/lok 227</td> </tr> <tr class="text-center"> <td>7.</td> <td>OJ Dom zdravlja Vogošća </td> <td>033 432 518</td> </tr> <tr class="text-center"> <td>8.</td> <td>OJ Dom zdravlja Ilijaš </td> <td>033 584 352; 033 584 350</td> </tr> <tr class="text-center"> <td>9.</td> <td>OJ Dom zdravlja Trnovo </td> <td>033 439 047</td> </tr> <tr class="text-center"> <td>10.</td> <td>OJ Dom zdravlja Hadžići </td> <td>033 580 360; 033 421 247</td> </tr> </tbody><thead> <tr> <th colspan="5" class="text-center">Ako imate bilo koji koristan broj molimo vas da nam pošaljete u viber grupu</th> </tr>  </thead> </table> </div> <!--end of .table-responsive--> </div> </div> </div>';
    } else if (value == "Zapadnohercegovački kanton") {
        document.getElementById("callNumbers").innerHTML = ' <div class="container pt-3 d-flex justify-content-center"> <div class="row" style="overflow-x:auto"> <div class="col-xs-12"> <div class="table-responsive"> <table class="table table-bordered table-hover"> <thead> <tr> <th colspan="5" class="text-center">Zapadnohercegovački kanton</th> </tr> <tr> <th>RB</th> <th>Ime</th> <th>Broj telefona</th> </tr> </thead> <tbody> <tr class="text-center"> <td>1. </td> <td>Dom zdravlja Grude</td> <td>039-662-162 (124)</td> </tr> <tr class="text-center"> <td>2.</td> <td>Dom zdravlja Široki Brijeg</td> <td>039-852-225 (124), 039-852-226</td> </tr> <tr class="text-center"> <td>3.</td> <td>Dom zdravlja Ljubuški</td> <td>039-831-514 (124)</td> </tr> <tr class="text-center"> <td>4.</td> <td>Dom zdravlja Posušje</td> <td>039-681-124 (124), 039-681-689</td> </tr> <tr class="text-center"> <td>5.</td> <td>Uprava civilne zaštite ZHK</td> <td>039-661-377 (121)</td> </tr> <tr class="text-center"> <td>6.</td> <td>Zavod za javno zdravstvo ZHK (ZZJZ) </td> <td>039-661-702</td> </tr> </tbody><thead> <tr> <th colspan="5" class="text-center">Ako imate bilo koji koristan broj molimo vas da nam pošaljete u viber grupu</th> </tr>  </thead> </table> </div> <!--end of .table-responsive--> </div> </div> </div>';
    } else if (value == "Hercegovačko-neretvanski kanton") {
        document.getElementById("callNumbers").innerHTML = ' <div class="container pt-3 d-flex justify-content-center"> <div class="row" style="overflow-x:auto"> <div class="col-xs-12"> <div class="table-responsive"> <table class="table table-bordered table-hover"> <thead> <tr> <th colspan="5" class="text-center">Hercegovačko-neretvanski kanton</th> </tr> <tr> <th>RB</th> <th>Ime</th> <th>Broj telefona</th> </tr> </thead> <tbody> <tr class="text-center"> <td>1. </td> <td>Zavodu za javno zdravstvo HNK</td> <td>036/551-478.: 061/713-741 i 061/327-281.</td> </tr> </tbody><thead> <tr> <th colspan="5" class="text-center">Ako imate bilo koji koristan broj molimo vas da nam pošaljete u viber grupu</th> </tr>  </thead> </table> </div> <!--end of .table-responsive--> </div> </div> </div>';
    } else if (value == "Zeničko-dobojski kanton") {
        document.getElementById("callNumbers").innerHTML = ' <div class="container pt-3 d-flex justify-content-center"> <div class="row" style="overflow-x:auto"> <div class="col-xs-12"> <div class="table-responsive"> <table class="table table-bordered table-hover"> <thead> <tr> <th colspan="5" class="text-center">Zeničko-dobojski kanton</th> </tr> <tr> <th>RB</th> <th>Ime</th> <th>Broj telefona</th> </tr> </thead> <tbody> <tr class="text-center"> <td>1. </td> <td>Zenički Dom zdravlja </td> <td>032/246-910 </td> </tr> </tbody><thead> <tr> <th colspan="5" class="text-center">Ako imate bilo koji koristan broj molimo vas da nam pošaljete u viber grupu</th> </tr>  </thead> </table> </div> <!--end of .table-responsive--> </div> </div> </div>';
    } else if (value == "Tuzlanski kanton") {
        document.getElementById("callNumbers").innerHTML = ' <div class="container pt-3 d-flex justify-content-center"> <div class="row" style="overflow-x:auto"> <div class="col-xs-12"> <div class="table-responsive"> <table class="table table-bordered table-hover"> <thead> <tr> <th colspan="5" class="text-center">Tuzlanski kanton</th> </tr> <tr> <th>RB</th> <th>Ime</th> <th>Broj telefona</th> </tr> </thead> <tbody> <tr class="text-center"> <td>1. </td> <td>Dom zdravlja Tuzla </td> <td>035-368-411</td> </tr> <tr class="text-center"> <td>2.</td> <td>Krizni štab </td> <td>062-828-398</td> </tr> </tbody> <thead> <tr> <th colspan="5" class="text-center">Ako imate bilo koji koristan broj molimo vas da nam pošaljete u viber grupu</th> </tr>  </thead></table> </div> <!--end of .table-responsive--> </div> </div> </div>';
    } else if (value == "Unsko-sanski kanton") {
        document.getElementById("callNumbers").innerHTML = ' <div class="container pt-3 d-flex justify-content-center"> <div class="row" style="overflow-x:auto"> <div class="col-xs-12"> <div class="table-responsive"> <table class="table table-bordered table-hover"> <thead> <tr> <th colspan="5" class="text-center">Unsko-sanski kanton</th> </tr> <tr> <th>RB</th> <th>Ime</th> <th>Broj telefona</th> </tr> </thead> <tbody> <tr class="text-center"> <td>1. </td> <td>Dom zdravlja Bosanska Krupa </td> <td>037-471-048</td> </tr> <tr class="text-center"> <td>2.</td> <td>Zdravstvena ustanova Dom zdravlja Cazin</td> <td>037-515-400</td> </tr> <tr class="text-center"> <td>3.</td> <td>zdravlja Velika Kladuša </td> <td>037-770-010</td> </tr> <tr class="text-center"> <td>4.</td> <td>Dom zdravlja Bužim</td> <td>037-410-078</td> </tr> <tr class="text-center"> <td>5.</td> <td>Dom zdravlja Sanski Most</td> <td>037-686-202</td> </tr> <tr class="text-center"> <td>6.</td> <td>Kantonalna bolnica “Dr. Irfan Ljubijankić” </td> <td>037-318-800</td> </tr> </tbody> <thead> <tr> <th colspan="5" class="text-center">Ako imate bilo koji koristan broj molimo vas da nam pošaljete u viber grupu</th> </tr>  </thead></table> </div> <!--end of .table-responsive--> </div> </div> </div>';
    } else if (value == "Bosanskopodrinjski kanton") {
        document.getElementById("callNumbers").innerHTML = ' <div class="container pt-3 d-flex justify-content-center"> <div class="row" style="overflow-x:auto"> <div class="col-xs-12"> <div class="table-responsive"> <table class="table table-bordered table-hover"> <thead> <tr> <th colspan="5" class="text-center">Bosanskopodrinjski kanton</th> </tr> <tr> <th>RB</th> <th>Ime</th> <th>Broj telefona</th> </tr> </thead> <tbody> <tr class="text-center"> <td>1. </td> <td>JU Zavod za javno zdravstvo BPK Goražde</td> <td>038-220-060</td> </tr> <tr class="text-center"> <td>2.</td> <td>JZU Kantonalna bolnica Goražde</td> <td>038-227-333</td> </tr> <tr class="text-center"> <td>3.</td> <td>JU Dom zdravlja “Dr. Isak Samokovlija“ Goražde</td> <td>038-221-072</td> </tr> <tr class="text-center"> <td>4.</td> <td>JU Dom zdravlja Ustikolina</td> <td>038-518-140</td> </tr> <tr class="text-center"> <td>5.</td> <td>JU Dom zdravlja Prača</td> <td>038-799-020</td> </tr> </tbody> <thead> <tr> <th colspan="5" class="text-center">Ako imate bilo koji koristan broj molimo vas da nam pošaljete u viber grupu</th> </tr>  </thead></table> </div> <!--end of .table-responsive--> </div> </div> </div>';
    } else if (value == "Srednjobosanski kanton") {
        document.getElementById("callNumbers").innerHTML = ' <div class="container pt-3 d-flex justify-content-center"> <div class="row" style="overflow-x:auto"> <div class="col-xs-12"> <div class="table-responsive"> <table class="table table-bordered table-hover"> <thead> <tr> <th colspan="5" class="text-center">Srednjobosanski kanton</th> </tr> <tr> <th>RB</th> <th>Ime</th> <th>Broj telefona</th> </tr> </thead> <tbody> <tr class="text-center"> <td>1. </td> <td>J.U. Dom zdravlja Travnik </td> <td>030-518-128</td> </tr> <tr class="text-center"> <td>2.</td> <td>Dom zdravlja Drvar</td> <td>034-818-044</td> </tr> </tbody><thead> <tr> <th colspan="5" class="text-center">Ako imate bilo koji koristan broj molimo vas da nam pošaljete u viber grupu</th> </tr>  </thead></table> </div> <!--end of .table-responsive--> </div> </div> </div>';
    } else if (value == "Republika Srpska") {
        document.getElementById("callNumbers").innerHTML = ' <div class="container pt-3 d-flex justify-content-center"> <div class="row" style="overflow-x:auto"> <div class="col-xs-12"> <div class="table-responsive"> <table class="table table-bordered table-hover"> <thead> <tr> <th colspan="5" class="text-center">Republika Srpska</th> </tr> <tr> <th>RB</th> <th>Ime</th> <th>Broj telefona</th> </tr> </thead> <tbody><tr class="text-center"> <td>1. </td> <td>Institutu za javno zdravstvo Republike Srpske </td> <td>051 491 649.</td> </tr> </tbody><thead> <tr> <th colspan="5" class="text-center">Ako imate bilo koji koristan broj molimo vas da nam pošaljete u viber grupu</th> </tr>  </thead></table> </div> <!--end of .table-responsive--> </div> </div> </div>';
    } else {
        document.getElementById("callNumbers").innerHTML = '<div class="container pt-3 d-flex justify-content-center"><h4>Nemamo informacija vezano za taj grad</h4></div>';
    }
}

citys("Sarajevski kanton")

//LOAD MROE DATA
$(document).ready(function () {


    $('nav ul li a').click(function () {
        event.preventDefault();
        var sectionTo = $(this).attr('href');
        $('html').animate({
            scrollTop: $(sectionTo).offset().top - 60
        }, 0);
    });


    if ($('#good-attribute-chart').length) {
        var html = attributeCharts({
            "labels": [''],
            "values": [
                [10, 50, 100, 100]
            ],
            "colors": ["rgba(250,255,0,0.8)", "rgba(251,186,9,0.9)", " rgba(252,117,18,0.9)", "rgba(253,29,29,0.9)"],
            "legends": ["Average", "Above Avg", "Top Tier", "juhu"]
        });
        $('#good-attribute-chart').append(html);
    }

    function attributeCharts(options) {
        var labels = options.labels;
        var values = options.values;
        var colors = options.colors;
        var legends = options.legends;
        var html = `<ul class="attribute-list">`;
        for (var i = 0; i < labels.length; i++) {
            html += `
                    <li>
                    
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" data-label="${legends[0]}" style="width: 25%; background-color:${colors[0]}" aria-valuenow="${values[i][0]}" aria-valuemin="0" aria-valuemax="100">0 - ${values[i][0]}</div>
                        <div class="progress-bar" role="progressbar" data-label="${legends[1]}" style="width: 25%; background-color:${colors[1]}" aria-valuenow="${values[i][1]}" aria-valuemin="0" aria-valuemax="100">${values[i][0]} - ${values[i][1]}</div>
                        <div class="progress-bar" role="progressbar" data-label="${legends[2]}" style="width: 25%; background-color:${colors[2]}" aria-valuenow="${values[i][2]}" aria-valuemin="0" aria-valuemax="100">${values[i][1]} - ${values[i][2]}</div>

<div class="progress-bar" role="progressbar" data-label="${legends[3]}" style="width: 25%; background-color:${colors[3]}" aria-valuenow="${values[i][3]}" aria-valuemin="0" aria-valuemax="100">${values[i][3]}+</div>
                    </div>
                    </li>
            `;
        }
        return html;
    }

});