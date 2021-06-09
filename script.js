$(document).ready(function(){
    $(window).scroll(function(){
		if ($(this).scrollTop() > 657){
			$("#barra-nav").addClass("nav-fijo");
			$("#barra-nav").removeClass("nav-relativo");
			$("#margin-variable").addClass("Sticky")
			$("#margin-variable").removeClass("No-Sticky")
		} else {
			$("#barra-nav").removeClass("nav-fijo");
			$("#barra-nav").addClass("nav-relativo");
			$("#margin-variable").removeClass("Sticky");
			$("#margin-variable").addClass("No-Sticky");
		}

		});

    $('.slick-slider').slick({
		autoplay: true,
		fade: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 200,
		arrows: true
	});

	// Activación de transición del menú principal y del menú móvil
    $('header nav a, aside#menu-movil nav a').bind('click',function(event){
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000,'easeOutExpo');
        event.preventDefault();
    });

    // Funciones de Abrir y Cerrar el Menú Responsive
    $('a#abrir-menu').click(function(){
        $('aside#menu-movil').animate({
            right: -70
        },500,'easeOutExpo');

        $('a#abrir-menu').hide();
        $('a#cerrar-menu').show();

        event.preventDefault();
    });

    $('a#cerrar-menu, aside#menu-movil nav a').click(function(){
        $('aside#menu-movil').animate({
            right: -290
        },1000,'easeOutElastic');

        $('a#abrir-menu').show();
        $('a#cerrar-menu').hide();

        event.preventDefault();
    });

    

});