(function ($) {
    "use strict";

    $('#search').hide()

    $('#collapse').click(() => {
        var collapseClass = $('#collapse').attr('class')

        if (typeof collapseClass === "undefined") {
            $('#collapse p').html("Prikaži manje")
        } else if (collapseClass != "collapsed") {
            $('#collapse p').html("Prikaži više gradova")

            $('#collapse2 p').html("Prikaži više gradova")
            $('#collapse2').attr("class", "collapsed")
            $('#collapse2').attr("aria-expanded", "false")
            $('#moreCities2').removeClass("show")
            $('#collapse3 p').html("Prikaži ostale gradove")
            $('#collapse3').attr("class", "collapsed")
            $('#collapse3').attr("aria-expanded", "false")
            $('#moreCities3').removeClass("show")
        } else {
            $('#collapse p').html("Prikaži manje")
        }
    })

    $('#collapse2').click(() => {
        var collapseClass2 = $('#collapse2').attr('class')
        if (typeof collapseClass2 === "undefined") {
            $('#collapse2 p').html("Prikaži manje")
        } else if (collapseClass2 != "collapsed") {
            $('#collapse2 p').html("Prikaži više gradova")
            $('#collapse3 p').html("Prikaži ostale gradove")
            $('#collapse3').attr("class", "collapsed")
            $('#collapse3').attr("aria-expanded", "false")
            $('#moreCities3').removeClass("show")
        } else {
            $('#collapse2 p').html("Prikaži manje")
        }
    })
    $('#collapse3').click(() => {
        var collapseClass3 = $('#collapse3').attr('class')
        if (typeof collapseClass3 === "undefined") {
            $('#collapse3 p').html("Prikaži manje")
        } else if (collapseClass3 != "collapsed") {
            $('#collapse3 p').html("Prikaži ostale gradove")
        } else {
            $('#collapse3 p').html("Prikaži manje")
        }
    })


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

    //Menu On Hover

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

//Google maps
// Initialize and add the map
function initMap() {
    // The location of Uluru
    var uluru = {
        lat: 43.84864,
        lng: 18.35644
    };
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 8,
            center: uluru
        });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}

//Call numbers
function citys(value) {
    if (value == "Sarajevo") {
        document.getElementById("callNumbers").innerHTML = '<div class="container pt-3 d-flex justify-content-center"> <div class="row"> <div class="col-xs-12"> <div class="table-responsive"> <table class="table table-bordered table-hover"> <thead > <tr> <th colspan="5" class="text-center">Sarajevo - Pozivni brojevi</th></tr> <tr> <th>Ime</th><th>Broj fiksnog telefona</th><th>Broj mobilnog telfona</th></tr></thead><tbody><tr class="text-center"><td>OJ DZ Stari Grad </td><td>033 278-624</td><td>060 328 04 54</td></tr><tr class="text-center"><td>OJ DZ Centar </td><td>x</td><td>060 328 02 17</td></tr><tr class="text-center"><td>OJ DZ Novo Sarajevo </td> <td>x</td><td>061 165 219</td></tr><tr class="text-center"> <td>Higijensko- epidemiološkoj službi JU Dom zdravlja </td><td>x</td> <td>062 842 318</td></tr></tbody></table></div><!--end of .table-responsive--></div></div></div>';
    } else if (value == "Tuzla") {
        document.getElementById("callNumbers").innerHTML = '<h4>Tuzla</h4>';
    } else {
        document.getElementById("callNumbers").innerHTML = '<div class="container pt-3 d-flex justify-content-center"><h4>Nemamo informacija vezano za taj grad</h4></div>';
    }
}

citys("Sarajevo")