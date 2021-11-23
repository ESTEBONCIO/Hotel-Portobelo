

/*=============================================
FECHAS RESERVA
=============================================*/
$('.datepicker.entrada').datepicker({
	startDate: '0d',
	format: 'dd-mm-yyyy',
	todayHighlight:true
});

$('.datepicker.entrada').change(function(){

	var fechaEntrada = $(this).val();

	$('.datepicker.salida').datepicker({
		startDate: fechaEntrada,
		datesDisabled: fechaEntrada,
		format: 'dd-mm-yyyy'
	});

})


/*=============================================
BOTÓN RESERVA
=============================================*/

$(".mostrarBloqueReservas").click(function(){

	$(".formReservas").slideToggle("fast");

	$(".menu").slideUp('fast');

	if($(".mostrarBloqueReservas").attr("modo") == "abajo"){

		$(".mostrarBloqueReservas").attr("modo", "arriba");

		$(".flechaReserva").removeClass("fa-caret-up");

		$(".flechaReserva").addClass("fa-caret-down");

	}else{

		$(".mostrarBloqueReservas").attr("modo", "abajo");

		$(".flechaReserva").removeClass("fa-caret-down");

		$(".flechaReserva").addClass("fa-caret-up");

	}

	})

/*=============================================
ANIMACIONES CON EL SCROLL
=============================================*/

$(window).scroll(function(){

	var posY = window.pageYOffset;
	console.log("posY" , posY);

	if(window.matchMedia("(min-width:769px)").matches){
	
		if(posY > 50){

			$(".formReservas").slideUp("fast");
			$(".mostrarBloqueReservas").attr("modo", "arriba");
			$(".flechaReserva").removeClass("fa-caret-up");
			$(".flechaReserva").addClass("fa-caret-down");

		}else{

			$(".formReservas").slideDown("fast");
			$(".mostrarBloqueReservas").attr("modo", "abajo");
			$(".flechaReserva").removeClass("fa-caret-down");
			$(".flechaReserva").addClass("fa-caret-up");

		}

	}


})	



/*=============================================
BOTONES IDIOMAS
=============================================*/

$(".idiomaEn").click(function(){

	$(this).removeClass("bg-white")
	$(this).removeClass("text-dark")

	$(this).addClass("bg-info")
	$(this).addClass("text-white")

	$(".idiomaEs").removeClass("bg-info")
	$(".idiomaEs").removeClass("text-white")

	$(".idiomaEs").addClass("bg-white")
	$(".idiomaEs").addClass("text-dark")


})

$(".idiomaEs").click(function(){

	$(this).removeClass("bg-white")
	$(this).removeClass("text-dark")

	$(this).addClass("bg-info")
	$(this).addClass("text-white")

	$(".idiomaEn").removeClass("bg-info")
	$(".idiomaEn").removeClass("text-white")

	$(".idiomaEn").addClass("bg-white")
	$(".idiomaEn").addClass("text-dark")


})

/*
codigo agregado miercoles 10 noviembre
*/
/*=============================================
BOTÓN MENÚ
=============================================*/
if(window.matchMedia("(max-width:768px)").matches){

	$(".botonMenu").click(function(){

		$(".menuMovil").slideToggle('fast');
		$(".menuMovil").css({"top":$("header").height()})

	})	

	$(".menuMovil ul li a").click(function(e){

		$(".menuMovil").slideToggle('fast');

		e.preventDefault();

		var vinculo = $(this).attr("href");
		
		$("html, body").animate({

			scrollTop: $(vinculo).offset().top - 55

		}, 1000, "easeInOutBack")

	})


}else{

	$(".botonMenu").click(function(){

		$(".menu").slideToggle('fast');

		$(".formReservas").slideUp('fast');

	})

	$(".menu ul li a").click(function(e){

		$(".menu").slideToggle('fast');

		e.preventDefault();

		var vinculo = $(this).attr("href");
		
		$("html, body").animate({

			scrollTop: $(vinculo).offset().top - 60

		}, 1000, "easeInOutBack")

	})

}
/*=============================================
SCROLL UP
=============================================*/

$.scrollUp({
	scrollText:"",
	scrollSpeed: 2000,
	easingType: "easeOutQuint"
})



/*=============================================
INTERACCIÓN PLANES
=============================================*/

$(".planes .grid-item").mouseover(function() {

	$(this).children("figure").css({"height":"25%", "transition":".5s all"})

	$(".tituloPlan").html($(this).children("figure").children("h1").html());

	$(".descripcionPlan").html($(this).children("figure").children("h1").attr("descripcion"));

})


$(".planes .grid-item").mouseout(function() {

	$(this).children("figure").css({"height":"100%", "transition":".5s all"})

	$(".tituloPlan").html($(".tituloPlan").attr("tituloPlan"));

	$(".descripcionPlan").html($(".descripcionPlan").attr("descripcionPlan"));

})
/*=============================================
PLANES MOVIL
=============================================*/

$('.planesMovil').jdSlider({
	wrap: '.slide-inner',
    slideShow: 3,
    slideToScroll: 3,
    isLoop: false
})

$(".planesMovil li").click(function(){

	$(".modal-title").html($(this).children("a").children("h6").html());
	$(".modal-body img").attr("src", $(this).children("a").children("img").attr("src"));
	$(".modal-body p").html($(this).children("a").attr("descripcion"));

})


$(".planes .grid-item").click(function(){

	$(".modal-title").html($(this).children("figure").children("h1").html());
	$(".modal-body img").attr("src", $(this).children("img").attr("src"));
	$(".modal-body p").html($(this).children("figure").children("h1").attr("descripcion"));

})

/*=============================================
RECORRIDO POR EL PUEBLO
=============================================*/

$('.slidePueblo').jdSlider();