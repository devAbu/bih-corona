(function ($) {
    "use strict";

    $('#search').hide()

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

    //Animation

    $(document).ready(function () {
        $('body.hero-anime').removeClass('hero-anime');
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

    $('#searchIcon').click(() => {
        //moze bolji nacin al za sad nek bude ovako
        if ($('#searchIcon').hasClass("fa-search")) {
            $('#search').show(500)
            $('#searchIcon').removeClass("fa-search").addClass("fa-search-minus")
        } else {
            $('#search').hide(500)
            $('#searchIcon').removeClass("fa-search-minus").addClass("fa-search")
        }

    })

    /*====== Price Slider Active ======*/
    $('#slider-range').slider({
        range: true,
        min: 10,
        max: 500,
        values: [110, 400],
        slide: function (event, ui) {
            $('#amount').val('$' + ui.values[0] + ' - $' + ui.values[1]);
        }
    });
    $('#amount').val('$' + $('#slider-range').slider('values', 0) +
        " - $" + $('#slider-range').slider('values', 1));


})(jQuery);

///// Section-1 CSS-Slider /////    
// Auto Switching Images for CSS-Slider
function bannerSwitcher() {
    next = $('.sec-1-input').filter(':checked').next('.sec-1-input');
    if (next.length) next.prop('checked', true);
    else $('.sec-1-input').first().prop('checked', true);
}

var bannerTimer = setInterval(bannerSwitcher, 5000);

$('nav .controls label').click(function () {
    clearInterval(bannerTimer);
    bannerTimer = setInterval(bannerSwitcher, 5000)
});

//Switch images
const activeImage = document.querySelector(".product-image .active");
const productImages = document.querySelectorAll(".image-list img");
const navItem = document.querySelector('a.toggle-nav');

function changeImage(e) {
    activeImage.src = e.target.src;
}

function toggleNavigation() {
    this.nextElementSibling.classList.toggle('active');
}

productImages.forEach(image => image.addEventListener("click", changeImage));
navItem.addEventListener('click', toggleNavigation);


///// Anchor Smooth Scroll /////
//   $('.main-menu a, .learn-more-button a').click(function(e){

//     e.preventDefault();

//     var target = $(this).attr('href');

//     $('html, body').animate({scrollTop: $(target).offset().top}, 1000);
//     return false;
//   });