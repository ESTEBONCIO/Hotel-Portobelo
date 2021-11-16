

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
SLIDE BANNER
=============================================*/

$('.fade-slider').jdSlider({

    isSliding: false,
    isAuto: true,
    isLoop: true,
    isDrag: false,
    interval: 7000,
    isCursor: false,
    speed: 3000

})

$(".verMas").click(function(){

	var vinculo = $(this).attr("vinculo");

	$("html, body").animate({

		scrollTop: $(vinculo).offset().top - 60

	}, 1000, "easeInOutBack")

})

$(".banner .fade-slider").css({"margin-top":$("header").height()})

//CONFIGURANDO LOS EFECTOS DE LOS PLANES
let items = document.querySelectorAll('.contenedor .item');
let bienvenido = document.querySelector('.descripcion .bienvenido');
let romantico = document.querySelector('.descripcion .romantico');
let lunaDeMiel = document.querySelector('.descripcion .lunaDeMiel');
let aventura = document.querySelector('.descripcion .aventura');
let spa = document.querySelector('.descripcion .spa');

items.forEach(item => { 
    //EVENTO CUANDO EL MOUSE INGRESA SOBRE EL AREA DEL ITEM
    item.addEventListener('mouseenter', (e) => {
        item.children[0].style.height = "25%";
        if(item.classList.contains('item2')){
            bienvenido.classList.replace('d-block', 'd-none');
            romantico.classList.replace('d-none', 'd-block');
        }
        if(item.classList.contains('item3')){
            bienvenido.classList.replace('d-block', 'd-none');
            lunaDeMiel.classList.replace('d-none', 'd-block');
        }
        if(item.classList.contains('item4')){
            bienvenido.classList.replace('d-block', 'd-none');
            aventura.classList.replace('d-none', 'd-block');
        }
        if(item.classList.contains('item5')){
            bienvenido.classList.replace('d-block', 'd-none');
            spa.classList.replace('d-none', 'd-block');
        }
    });

    //EVENTO CUANDO EL MOUSE SALE DEL AREA DEL ITEM
    item.addEventListener('mouseleave', (e) => {
        item.children[0].style.height = "100%";
        if(item.classList.contains('item2')){
            romantico.classList.replace('d-block', 'd-none');
            bienvenido.classList.replace('d-none', 'd-block');
        }
        if(item.classList.contains('item3')){
            lunaDeMiel.classList.replace('d-block', 'd-none');
            bienvenido.classList.replace('d-none', 'd-block');
        }
        if(item.classList.contains('item4')){
            aventura.classList.replace('d-block', 'd-none');
            bienvenido.classList.replace('d-none', 'd-block');
        }
        if(item.classList.contains('item5')){
            spa.classList.replace('d-block', 'd-none');
            bienvenido.classList.replace('d-none', 'd-block');
        }
    });
});








