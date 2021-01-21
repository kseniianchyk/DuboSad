$(document).ready(() => {

    new WOW().init();

    $(function () {
        $("#delivery-accordion").accordion({
            collapsible: true,
            heightStyle: "content",
            active: 1,
            icons: false,
            header: '> .delivery-accordion-info > .delivery-accordion-title'
        });
    });

    $('#reviews-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 300,
        arrows: true,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToScroll: 1,
                    arrows: false,
                    slidesToShow: 1
                }
            }
        ]
    });

    $('#contact-close').hover(function(){
        $('#contact-content').show(1000, function(){
            setTimeout(function(){
                $('#contact-content').hide(500);
            }, 4000);
        });
    });

    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        let id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 1500);
    });

    $(function() {

        let target_block = $("#stat"); // Ищем блок
        let blockStatus = true;

        $(window).scroll(function() {
            let scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height()));
            if(scrollEvent && blockStatus) {
                blockStatus = false;

                $({numberValue: 0}).animate({numberValue: 5}, {
                    duration: 1000,
                    step: function(val) {
                        $(".stat-item-numb__1").html(Math.ceil(val));
                    }
                });
                $({numberValue: 0}).animate({numberValue: 14}, {
                    duration: 1000,
                    easing: "linear",
                    step: function(val) {
                        $(".stat-item-numb__2").html(Math.ceil(val));
                    }
                });
                $({numberValue: 0}).animate({numberValue: 500}, {
                    duration: 1000,
                    easing: "linear",
                    step: function(val) {
                        $(".stat-item-numb__3").html(Math.ceil(val));
                    }
                });
                $({numberValue: 0}).animate({numberValue: 417}, {
                    duration: 1000,
                    easing: "linear",
                    step: function(val) {
                        $(".stat-item-numb__4").html(Math.ceil(val));
                    }
                });
                $({numberValue: 0}).animate({numberValue: 7}, {
                    duration: 1000,
                    easing: "linear",
                    step: function(val) {
                        $(".stat-item-numb__5").html(Math.ceil(val));
                    }
                });
            }
        });
    });

    $('.burger').click(() => {
        $('#header-container').toggleClass('menu--open')
    });

    $('#menu > *').click(() => {
        $('#header-container').removeClass('menu--open');
    });





});
