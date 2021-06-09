$(document).ready(function(){
		$(window).scroll(function(){
		if ($(this).scrollTop() > 60){
			$("#menu-catalogo").addClass("fixed");
			$("#menu-catalogo").removeClass("relative");
		} else {
			$("#menu-catalogo").removeClass("fixed");
			$("#menu-catalogo").addClass("relative");
		}

		}); 

		$("#menu-opt1").click(function(){
			/* Fijar item señalado en el menú */
			$("#menu-opt1").addClass("marcado");
			$("#menu-opt2").removeClass("marcado");
			$("#menu-opt3").removeClass("marcado");
			$("#menu-opt4").removeClass("marcado");


			$("#menu-opt1").removeClass("no-marcado");
			$("#menu-opt2").addClass("no-marcado");
			$("#menu-opt3").addClass("no-marcado");
			$("#menu-opt4").addClass("no-marcado");

			/* Mostrar/Ocultar Items por clase */
			$(".camisas").show();
			$(".pantalones").show();
			$(".zapatos").show();

		});

		$("#menu-opt2").click(function(){
			$("#menu-opt2").addClass("marcado");
			$("#menu-opt1").removeClass("marcado");
			$("#menu-opt3").removeClass("marcado");
			$("#menu-opt4").removeClass("marcado");

			$("#menu-opt2").removeClass("no-marcado");
			$("#menu-opt1").addClass("no-marcado");
			$("#menu-opt3").addClass("no-marcado");
			$("#menu-opt4").addClass("no-marcado");

			/* Mostrar/Ocultar Items por clase */
			$(".camisas").show();
			$(".pantalones").hide();
			$(".zapatos").hide();
		});

		$("#menu-opt3").click(function(){
			$("#menu-opt3").addClass("marcado");
			$("#menu-opt2").removeClass("marcado");
			$("#menu-opt1").removeClass("marcado");
			$("#menu-opt4").removeClass("marcado");

			$("#menu-opt3").removeClass("no-marcado");
			$("#menu-opt2").addClass("no-marcado");
			$("#menu-opt1").addClass("no-marcado");
			$("#menu-opt4").addClass("no-marcado");

			/* Mostrar/Ocultar Items por clase */
			$(".camisas").hide();
			$(".pantalones").show();
			$(".zapatos").hide();
		});

		$("#menu-opt4").click(function(){
			$("#menu-opt4").addClass("marcado");
			$("#menu-opt2").removeClass("marcado");
			$("#menu-opt3").removeClass("marcado");
			$("#menu-opt1").removeClass("marcado");

			$("#menu-opt4").removeClass("no-marcado");
			$("#menu-opt2").addClass("no-marcado");
			$("#menu-opt3").addClass("no-marcado");
			$("#menu-opt1").addClass("no-marcado");

			/* Mostrar/Ocultar Items por clase */
			$(".camisas").hide();
			$(".pantalones").hide();
			$(".zapatos").show();
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